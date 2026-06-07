# Deployment Report - RD Workx Website Lokale Containerarchitectuur

## Status

GO voor Deployment.

## Deployed commit

`9fb66febe0c5af1610297ac7d7714f7ae0a49d7a`

## Targetomgeving

- DEV app-runtime: `192.168.10.12`
- DEV publieke URL: `https://www-dev.rdworkx.nl/`
- Data-host volgens architectuur: `192.168.10.50`

## Datum/tijd

2026-06-07 14:44 Europe/Amsterdam

## Deploymentresultaat

- Workflow: `Deploy Latest To Dev`
- Run: `27092890498`
- Run URL: `https://github.com/DennisdeJager/RDWorkxWeb/actions/runs/27092890498`
- Resultaat: `success`
- Docker build/push: GO
- LAN SSH deploy: GO

## Healthcheckresultaat

- `curl http://192.168.10.12:31015/health` - GO, `{"ok":true,"service":"rdworkxwebsite-web"}`
- `curl http://192.168.10.12:31015/ready` - GO, `{"ok":true,"service":"rdworkxwebsite-web"}`
- `curl http://192.168.10.12:31015/api/public-config` - GO, Turnstile site key beschikbaar
- `curl http://192.168.10.12:5176/health` - GO, `{"ok":true,"service":"rdworkxwebsite-api"}`
- `curl http://192.168.10.12:5176/ready` - GO, `{"databaseUrlSet":true,"ok":true,"service":"rdworkxwebsite-api"}`

## Smoke-testresultaat

- `curl --compressed https://www-dev.rdworkx.nl/` - GO, HTTP 200, niet-lege HTML body
- `curl --compressed https://www-dev.rdworkx.nl/assets/index-CvhsmBlr.js` - GO, HTTP 200, niet-lege JS body
- `curl --compressed https://www-dev.rdworkx.nl/assets/index-B4q7EyJR.css` - GO, HTTP 200, niet-lege CSS body

## Afwijkingen

- Eerste deploymentrun `27092745378` faalde op `DATABASE_URL` interpolatie tijdens Compose servicelijst-detectie in GitHub Actions.
- Remediationcommit `9fb66fe` laat Compose renderen zonder database-secret in de runner-env, terwijl echte DEV-runtime `DATABASE_URL` via `.env` blijft gebruiken.
- Directe SSH vanaf deze Codex-machine naar `192.168.10.12` gaf `Permission denied`; de ALM/GitHub Actions runner kon wel via LAN SSH deployen.

## Eindoordeel

GO. RD Workx Website draait op DEV met gescheiden `rdworkxwebsite-web` en `rdworkxwebsite-api`; de API is bereikbaar, heeft `DATABASE_URL` gezet en de publieke DEV-site plus assets laden correct.
