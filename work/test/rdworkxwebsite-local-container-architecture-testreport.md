# Testrapport - RD Workx Website Lokale Containerarchitectuur

## Status

GO voor Development-checks. Geen open bevindingen.

## Uitgevoerde checks

- `node --check scripts\serve-web.mjs` - GO
- `node --check scripts\api-server.mjs` - GO
- `node --check scripts\serve-dist.mjs` - GO
- `npm.cmd run lint` - GO
- `npm run build` - GO
- `docker compose config` - GO
- `POSTGRES_PASSWORD=compose_config_placeholder docker compose -f compose.data.yml config` - GO

## Functionele verificatie

- Webservice heeft `/health`, `/ready`, SPA fallback en `/api/*` proxy.
- API-service heeft `/health`, `/ready`, `/api/public-config` en `/api/contact`.
- App-compose bevat alleen `rdworkxwebsite-web` en `rdworkxwebsite-api`.
- Data-compose bevat `rdworkxwebsite-postgres` met eigen database, user en volumes.

## Security checks

- `DATABASE_URL` staat alleen op de API-service in `compose.yml`.
- SMTP- en Turnstile secrets staan alleen op de API-service.
- Webservice krijgt alleen `API_INTERNAL_URL` en publieke/runtime-instellingen.
- `.env.example` bevat placeholders en geen echte secretwaarden.

## Afwijkingen

- Geen live containerstart uitgevoerd in deze Development-run.
- Geen ALM DEV deployment uitgevoerd; dat hoort bij Deployment.
- `docker compose config` gaf op deze Windows-shell een waarschuwing over toegang tot `C:\Users\denni\.docker\config.json`, maar de Compose-configuratie werd wel succesvol gerenderd.

## Eindoordeel

GO. De code en configuratie voldoen aan het lokale web/api/data-host patroon en zijn build/lint/config gevalideerd.
