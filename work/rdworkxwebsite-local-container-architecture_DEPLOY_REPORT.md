# Deployment Report - RD Workx Website Lokale Containerarchitectuur

## Status

NO-GO voor volledige Deployment-gate door PostgreSQL credential mismatch op de data-host.

## Deployed commit

`571c95b577adf3046242c06f13a1f9fd6c3b680c`

## Targetomgeving

- DEV app-runtime: `192.168.10.12`
- DEV publieke URL: `https://www-dev.rdworkx.nl/`
- Data-host volgens architectuur: `192.168.10.50`

## Datum/tijd

2026-06-07 15:04 Europe/Amsterdam

## Deploymentresultaat

- Workflow: `Deploy Latest To Dev`
- Run: `27093362028`
- Run URL: `https://github.com/DennisdeJager/RDWorkxWeb/actions/runs/27093362028`
- Resultaat: `success`
- Docker build/push: GO
- LAN SSH deploy: GO

## Healthcheckresultaat

- `curl http://192.168.10.12:5176/health` - GO, `{"ok":true,"service":"rdworkxwebsite-api"}`
- `curl http://192.168.10.12:31015/ready` - GO, `{"ok":true,"service":"rdworkxwebsite-web"}`
- `curl http://192.168.10.12:5176/ready` - NO-GO, `database_auth_error`, `databaseReachable:false`, `databaseUrlSource:"legacy-normalized"`, PostgreSQL code `28P01`

## Smoke-testresultaat

- `curl --compressed https://www-dev.rdworkx.nl/` - GO, HTTP 200, niet-lege HTML body
- `curl --compressed https://www-dev.rdworkx.nl/assets/index-B4q7EyJR.css` - GO, HTTP 200, niet-lege CSS body

## Uitgevoerde remediation

- API-readiness uitgebreid met een live PostgreSQL `select 1` via `postgres.js`.
- API-readiness retourneert nu `503` bij ontbrekende of onbereikbare PostgreSQL.
- Oude DEV `DATABASE_URL` wordt API-only als `LEGACY_DATABASE_URL` gelezen en host `rdworkxwebsite-db` wordt genormaliseerd naar `192.168.10.50:55436`.
- App-compose houdt databasecredentials alleen op `rdworkxwebsite-api`; web krijgt geen DB-secret.

## Open blocker

De API bereikt de data-host maar PostgreSQL weigert authenticatie:

```text
category: database_auth_error
code: 28P01
message: password authentication failed for user "sg"
```

Dit betekent dat de huidige DEV-secretwaarde niet overeenkomt met de PostgreSQL role/user op `rdworkxwebsite-postgres`, of dat de data-host database nog niet is geprovisiond met de verwachte app-specifieke credentials.

## Benodigde correctie

Een van deze acties is nodig op de DEV/data-laag:

- Zet `API_DATABASE_URL=postgres://rdworkxwebsite:<juiste-secret>@192.168.10.50:55436/rdworkxwebsite` in de DEV `.env` van `rdworkxwebsite-api`; of
- Provision/repair op `local-data` de databasecontainer `rdworkxwebsite-postgres` met database `rdworkxwebsite`, role `rdworkxwebsite` en de bijbehorende secret; of
- Geef Codex/ALM een route om de data-host secret/provisioning te herstellen zonder secretwaarden te lekken.

## Eindoordeel

NO-GO. De app-deploy zelf is groen en de publieke site werkt, maar de nieuwe correcte API-readiness bewijst dat PostgreSQL-authenticatie op de data-host nog niet klopt.
