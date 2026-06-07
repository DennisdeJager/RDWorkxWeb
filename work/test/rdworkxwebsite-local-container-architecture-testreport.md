# Testrapport - RD Workx Website Lokale Containerarchitectuur

## Status

GO voor Development-checks. Geen open bevindingen.

## Uitgevoerde checks

- `node --check scripts\serve-web.mjs` - GO
- `node --check scripts\api-server.mjs` - GO
- `node --check scripts\serve-dist.mjs` - GO
- `C:\Program Files\nodejs\npm.cmd install postgres --save --cache .npm-cache --no-audit` - GO
- `C:\Program Files\nodejs\npm.cmd run lint` - GO
- `C:\Program Files\nodejs\npm.cmd run build` - GO
- `DATABASE_URL=postgres://rdworkxwebsite:placeholder@rdworkxwebsite-db:5432/rdworkxwebsite docker compose config` - GO, legacy URL wordt alleen aan API-service doorgegeven als `LEGACY_DATABASE_URL`
- `docker compose config` zonder `DATABASE_URL` in runner-env - GO
- `DATABASE_URL=postgres://rdworkxwebsite:placeholder@192.168.10.50:55432/rdworkxwebsite docker compose config` - GO
- `POSTGRES_PASSWORD=placeholder docker compose -f compose.data.yml config` - GO

## Functionele verificatie

- Webservice heeft `/health`, `/ready`, SPA fallback en `/api/*` proxy.
- Webservice filtert hop-by-hop headers, `Content-Encoding` en `Content-Length` uit API-proxyresponses.
- API-service heeft `/health`, `/ready`, `/api/public-config` en `/api/contact`.
- API-service `/ready` voert een live PostgreSQL `select 1` uit en retourneert `503` als `DATABASE_URL` ontbreekt of PostgreSQL niet bereikbaar is.
- API-service normaliseert `LEGACY_DATABASE_URL` met host `rdworkxwebsite-db` naar data-host `192.168.10.50:55432`.
- App-compose bevat alleen `rdworkxwebsite-web` en `rdworkxwebsite-api`.
- Data-compose bevat `rdworkxwebsite-postgres` met eigen database, user en volumes.

## Security checks

- De effectieve `DATABASE_URL` staat alleen op de API-service in `compose.yml`.
- `compose.yml` negeert oude generieke `DATABASE_URL` waarden en gebruikt `API_DATABASE_URL` of de data-host URL opgebouwd uit `POSTGRES_PASSWORD`.
- Oude DEV `DATABASE_URL` waarden worden alleen als API-only `LEGACY_DATABASE_URL` gebruikt om bestaande secretwaarden zonder commit te behouden.
- PostgreSQL-client `postgres.js` wordt alleen in de API-server geïmporteerd.
- SMTP- en Turnstile secrets staan alleen op de API-service.
- Webservice krijgt alleen `API_INTERNAL_URL` en publieke/runtime-instellingen.
- `.env.example` bevat placeholders en geen echte secretwaarden.

## Afwijkingen

- Geen live containerstart uitgevoerd in deze Development-run.
- Geen ALM DEV deployment uitgevoerd; dat hoort bij Deployment.
- De standaard `npm` shim op deze Windows-user verwijst naar een ontbrekende Roaming-installatie; checks zijn uitgevoerd met `C:\Program Files\nodejs\npm.cmd`.
- `docker compose config` gaf op deze Windows-shell een waarschuwing over toegang tot `C:\Users\denni\.docker\config.json`, maar de Compose-configuratie werd wel succesvol gerenderd.

## Eindoordeel

GO. De code en configuratie voldoen aan het lokale web/api/data-host patroon en zijn build/lint/config gevalideerd.
