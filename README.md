# R&D Workx

Website en portalbasis voor R&D Workx.

## Stack

- Vite + React
- Node.js webserver voor static assets en API-proxy
- Node.js API-service voor contactformulier en toekomstige data-use-cases
- PostgreSQL op de aparte local-data container

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start:web
npm run start:api
```

De webserver serveert `dist/` via `scripts/serve-web.mjs` en proxyt `/api/*` naar `API_INTERNAL_URL`.
De API-service draait via `scripts/api-server.mjs`.

## Routes

- `/` homepage
- `/health` healthcheck
- `/ready` readinesscheck
- `/api/public-config` via API-service
- `/api/contact` via API-service

## Lokale containerarchitectuur

Op de dev-container `192.168.10.12`:

- `rdworkxwebsite-web` op poort `5175`
- `rdworkxwebsite-api` op poort `5176`

Op de local-data container `192.168.10.50`:

- `rdworkxwebsite-postgres` op poort `55436`, alleen bedoeld voor de lokale route vanaf de dev-container.

Start data op de data-host met:

```bash
docker compose -f compose.data.yml up -d
```

Start web en API op de dev-host met:

```bash
docker compose up -d --build
```

## Deployment

Zie `DEPLOYMENT.md`.
