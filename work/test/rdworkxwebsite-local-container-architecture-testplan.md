# Testplan - RD Workx Website Lokale Containerarchitectuur

## Doel

Verifieer dat RD Workx Website lokaal volgens de nieuwe RD Workx architectuur draait met gescheiden web-, API- en data-services.

## Functionele scenario's

- Webservice serveert `dist/`, `/health`, `/ready` en SPA fallback.
- Webservice proxyt `/api/*` naar `rdworkxwebsite-api` via `API_INTERNAL_URL`.
- API-service retourneert `/health`, `/ready` en `/api/public-config`.
- API-service `/ready` voert een live PostgreSQL `select 1` uit via `postgres.js`.
- API-service verwerkt `/api/contact` server-side en blijft frontendcompatibel.
- App-compose bevat `rdworkxwebsite-web` en `rdworkxwebsite-api`, zonder database-service.
- Data-compose bevat `rdworkxwebsite-postgres` met eigen database, role en volumes.

## Negatieve scenario's

- API `/ready` retourneert `503` wanneer `DATABASE_URL` ontbreekt.
- API `/ready` retourneert `503` wanneer PostgreSQL niet bereikbaar is.
- Data-compose faalt wanneer `POSTGRES_PASSWORD` ontbreekt.
- Contactformulier retourneert `503` wanneer SMTP of Turnstile-serverconfig ontbreekt.
- Onbekende API-route retourneert `404`.
- Te grote of ongeldige JSON body retourneert een foutstatus.

## Edge cases

- Onbekende niet-API route valt terug naar `index.html`.
- API-proxy geeft response body door zonder hop-by-hop headers of foutieve compressieheaders.
- Static assets krijgen cache headers; HTML blijft `no-store`.
- `/ready` van web faalt wanneer `dist/index.html` ontbreekt.

## Security checks

- Alleen `rdworkxwebsite-api` krijgt `DATABASE_URL`.
- Alleen `rdworkxwebsite-api` krijgt SMTP- en Turnstile-secrets.
- Webservice krijgt geen databasecredentials of server-side secrets.
- `compose.data.yml` bindt PostgreSQL alleen op het interne local-data adres.
- Secretwaarden staan niet in repo of documentatie.

## Regressiechecks

- Homepage laadt na build.
- Theme toggle en assets blijven beschikbaar.
- Contactformulier UI kan `/api/public-config` ophalen via de webservice.

## Technische checks

- `node --check scripts/serve-web.mjs`
- `node --check scripts/api-server.mjs`
- `node --check scripts/serve-dist.mjs`
- `npm run lint`
- `npm run build`
- `docker compose config` zonder `DATABASE_URL` in runner-env
- `docker compose config` met placeholder `DATABASE_URL`
- `docker compose -f compose.data.yml config` met placeholder `POSTGRES_PASSWORD`

## Smoke-test input voor Deployment

- `curl http://192.168.10.12:5175/health`
- `curl http://192.168.10.12:5175/ready`
- `curl http://192.168.10.12:5175/api/public-config`
- `curl http://192.168.10.12:5176/health`
- `curl http://192.168.10.12:5176/ready` moet `databaseReachable:true` tonen
