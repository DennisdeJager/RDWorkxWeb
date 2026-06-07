# R&D Workx Portal Deploy Info

Gebruik dit document als vaste context voor andere chats wanneer je hulp wilt met deployen, debuggen of doorontwikkelen van het portal.

## Project

- Naam: R&D Workx website
- Stack: Vite + React frontend, Node.js webserver/API-service
- Package manager: npm
- Web entrypoint: `scripts/serve-web.mjs`
- API entrypoint: `scripts/api-server.mjs`
- Productiebuild: `dist/`
- Webpoort op dev-container `192.168.10.12`: `5175`
- API-poort op dev-container `192.168.10.12`: `5176`
- Healthcheck: `/health`
- Readiness: `/ready`
- Data: PostgreSQL container `rdworkxwebsite-postgres` op local-data `192.168.10.50`
- Docker Compose app services: `web` (`rdworkxwebsite-web`) en `api` (`rdworkxwebsite-api`)
- Docker Compose data service: `postgres` (`rdworkxwebsite-postgres`) via `compose.data.yml`

## Apps en routes

- Portal home: `/`
- Content beheer: `/beheer` (`admin`)

De webserver serveert de SPA, valt bij onbekende routes terug op `dist/index.html` en proxyt `/api/*` naar de API-service.


## Environment variables

Zie ook `.env.example`.

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
PUBLIC_URL=https://rdworkx.nl
APP_ENV=dev
WEB_BIND_ADDRESS=192.168.10.12
WEB_PORT=5175
API_BIND_ADDRESS=192.168.10.12
API_PORT=5176
API_INTERNAL_URL=http://api:5176
API_DATABASE_URL=postgres://rdworkxwebsite:CHANGE_ME@192.168.10.50:55436/rdworkxwebsite
POSTGRES_BIND_ADDRESS=192.168.10.50
POSTGRES_PORT=55436
POSTGRES_DB=rdworkxwebsite
POSTGRES_USER=rdworkxwebsite
POSTGRES_PASSWORD=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
TURNSTILE_ALLOWED_HOSTNAMES=www-dev.rdworkx.nl,rdworkx.nl,www.rdworkx.nl
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
CONTACT_FROM=
CONTACT_TO=
```

## Contactformulier

Het contactformulier gebruikt server-side SMTP en Cloudflare Turnstile.

Benodigde configuratie per ALM-omgeving:

- `TURNSTILE_SITE_KEY`: publieke Turnstile site key voor de betreffende host.
- `TURNSTILE_SECRET_KEY`: geheime Turnstile key, alleen server-side.
- `TURNSTILE_ALLOWED_HOSTNAMES`: komma-gescheiden toegestane hostnames.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`: SMTP-configuratie.
- `CONTACT_FROM`: afzenderadres dat door SMTP mag verzenden.
- `CONTACT_TO`: interne ontvanger van intake-aanvragen.

Zonder Turnstile secret of SMTP-configuratie retourneert `/api/contact` bewust `503` en wordt er geen bericht verstuurd.
De compose-deploy leest deze waarden uit de `.env` van de betreffende omgeving en geeft server-side secrets alleen door aan `rdworkxwebsite-api`.
Bij fouten geeft DEV volledige geschoonde debugdetails terug, TEST toont diagnose en configuratiesamenvatting zonder secrets, en PROD toont een compacte categorie met herstelhint.


## Lokale deploy workflow

### Data-host `192.168.10.50`

```bash
git clone <github-url> ~/rdworkxwebsite
cd ~/rdworkxwebsite
cp .env.example .env
# vul POSTGRES_PASSWORD in
docker compose -f compose.data.yml up -d
docker ps
```

Beperk poort `55436` tot de lokale infra-route vanaf `192.168.10.12`; expose deze database niet publiek.

### Dev-container `192.168.10.12`

De LXC-host is bereikbaar via SSH-alias `dev-container`. Binnen deze LXC draait Docker met Compose.

Eerste deploy:

```bash
git clone <github-url> ~/rdworkxwebsite
cd ~/rdworkxwebsite
cp .env.example .env
# vul DATABASE_URL en eventuele API/SMTP/Turnstile keys in
docker compose up -d --build
```

Update deploy:

```bash
cd ~/rdworkxwebsite
git pull
docker compose up -d --build
```

Controles:

```bash
docker ps
curl http://192.168.10.12:5175/health
curl http://192.168.10.12:5175/ready
curl http://192.168.10.12:5175/api/public-config
curl http://192.168.10.12:5176/health
```

## Veiligheid

- Commit geen echte `OPENAI_API_KEY`, SMTP wachtwoorden of SSH gegevens.
- Zet productiegeheimen in `.env` op de server of in de hosting secret manager.
- `.env.example` mag placeholders bevatten.
- `API_DATABASE_URL`, `SMTP_PASS` en `TURNSTILE_SECRET_KEY` horen alleen in de API-service.
- De webservice krijgt geen databasecredentials.
- Controleer na deploy altijd `/health` 
- Controleer na identity-configuratie ook `/login`, `/beheer` en `/ready`.
