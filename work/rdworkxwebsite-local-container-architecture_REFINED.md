# Story Refinement - RD Workx Website Lokale Containerarchitectuur

## User story

Als beheerder wil ik RD Workx Website lokaal draaien met een gescheiden webservice, API-service en PostgreSQL data-container, zodat de applicatieruntime stateless blijft en databaseverantwoordelijkheid bij de API-laag ligt.

## Functionele opdrachtanalyse

- Actor: beheerder/developer die de lokale DEV-stack beheert.
- Doel: `rdworkxwebsite-web` en `rdworkxwebsite-api` draaien op dev-container `192.168.10.12`; `rdworkxwebsite-postgres` draait op local-data `192.168.10.50`.
- Flow: homepage en contactformulier blijven via web bereikbaar; web proxyt `/api/*` naar API.
- Data/API: contactformulier blijft server-side verwerkt; toekomstige database-use-cases lopen alleen via API.
- Regressie: homepage, theme, static assets en contactformulier mogen niet breken.

## Scope

- Split huidige Node-runtime in `rdworkxwebsite-web` en `rdworkxwebsite-api`.
- Verplaats server-side secrets en `DATABASE_URL` naar API.
- Voeg `compose.data.yml` toe voor `rdworkxwebsite-postgres` op `192.168.10.50`.
- Update Dockerfile, compose, env example, README, deploymentdocs en manifest.
- Leg test- en deploymentbewijs vast.

## Out of scope

- ALM DEV deployment uitvoeren.
- Productiedata migreren.
- Nieuwe database-tabellen of SQL-migraties toevoegen.
- Contactformulier functioneel uitbreiden.

## Acceptatiecriteria

- `compose.yml` bevat web en API, geen PostgreSQL-service.
- `compose.data.yml` definieert `rdworkxwebsite-postgres`.
- Alleen API heeft `DATABASE_URL`, SMTP secrets en Turnstile secret.
- Web proxyt `/api/*` naar API en serveert SPA fallback.
- API bevat `/health`, `/ready`, `/api/public-config` en `/api/contact`.
- Build, lint en Compose-configvalidatie slagen.
- Documentatie beschrijft hosts, poorten en secretverdeling.

## Business rules

- Web/frontend krijgt geen databasecredentials.
- Databasecontainer draait niet in de app-runtime compose.
- Secretwaarden worden niet gecommit.
- Contactformulier blijft fail-closed bij ontbrekende SMTP/Turnstile-configuratie.

## Architectuurimpact

De applicatie volgt het RD Workx patroon: web en API op de dev-runtime, PostgreSQL als app-specifieke container op de data-host. De API-service is de enige data-eigenaar.

## Security-impact

Security is van toepassing. De refactor vermindert secret exposure en vereist dat PostgreSQL-poort `55432` op `192.168.10.50` beperkt blijft tot de lokale infra-route vanaf `192.168.10.12`.

## UX-impact

Geen UI-impact bedoeld. Regressiecontrole blijft nodig voor homepage, responsive layout, theme toggle en contactformulierstates.

## Data/API-impact

`/api/public-config` en `/api/contact` blijven frontendcompatibel. `DATABASE_URL` verhuist naar `rdworkxwebsite-api`. PostgreSQL wordt voorbereid als `rdworkxwebsite-postgres`.

## Dependency-check

Geen codeblokkerende dependency. Runtime secrets en firewallregels moeten op de containers worden ingericht.

## T-shirt size

M. Onderbouwing: runtime-splitsing en infra-documentatie zonder datamodelmigratie.

## Definition of Ready

- [x] Scope en out of scope beschreven
- [x] Acceptatiecriteria beschreven
- [x] UX-impact expliciet beoordeeld
- [x] Security-impact expliciet beoordeeld
- [x] Data/API-impact beschreven
- [x] Geen open dependency voor codewijziging
