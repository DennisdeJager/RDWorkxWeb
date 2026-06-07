# Architectuur - RD Workx Website Lokale Containerarchitectuur

## Besluit

RD Workx Website wordt lokaal gesplitst in drie verantwoordelijkheden:

- `rdworkxwebsite-web`: serveert `dist/`, SPA fallback, `/health`, `/ready` en proxyt `/api/*`.
- `rdworkxwebsite-api`: verwerkt API-contracten, contactformulier, server-side secrets en toekomstige database-use-cases.
- `rdworkxwebsite-postgres`: draait los op local-data `192.168.10.50` met eigen database, role en volume.

## Containerplaatsing

- App/dev container `192.168.10.12`: `rdworkxwebsite-web`, `rdworkxwebsite-api`.
- Data container `192.168.10.50`: `rdworkxwebsite-postgres`.

## Datatoegang

Alleen `rdworkxwebsite-api` krijgt `DATABASE_URL`. Web gebruikt `API_INTERNAL_URL` voor interne HTTP-calls.

## Poorten

- Web: `192.168.10.12:5175`
- API: `192.168.10.12:5176`
- PostgreSQL: `192.168.10.50:55436`, alleen bedoeld voor de lokale app-host route.

## Risico's

- Zonder firewallbinding kan PostgreSQL breder bereikbaar worden dan bedoeld.
- De huidige applicatie gebruikt PostgreSQL nog niet functioneel; readiness controleert daarom proces/configuratie, niet database-migraties.
