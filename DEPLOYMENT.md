# R&D Workx Portal Deploy Info

Gebruik dit document als vaste context voor andere chats wanneer je hulp wilt met deployen, debuggen of doorontwikkelen van het portal.

## Project

- Naam: R&D Workx website
- Stack: Vite + React frontend, Node.js runtime server
- Package manager: npm
- Runtime entrypoint: `scripts/serve-dist.mjs`
- Productiebuild: `dist/`
- Interne apppoort: `5175`
- Externe LXC-poort: `5175`
- Healthcheck: `/health`
- Readiness: `/ready`
- Data: PostgreSQL container `rdworkxwebsite-db` plus volumes voor appdata, uploads en backups
- Docker Compose services: `website` (`rdworkxwebsite-web`) en `postgres` (`rdworkxwebsite-db`)

## Apps en routes

- Portal home: `/`
- Content beheer: `/beheer` (`admin`)

De Node server serveert de SPA en valt bij onbekende routes terug op `dist/index.html`.


## Environment variables

Zie ook `.env.example`.

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
PUBLIC_URL=https://rdworkx.nl
DATABASE_URL=postgres://sg:CHANGE_ME@rdworkxwebsite-db:5432/rdworkxwebsite
POSTGRES_DB=rdworkxwebsite
POSTGRES_USER=sg
POSTGRES_PASSWORD=
HOST=0.0.0.0
PORT=5175
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
De compose-deploy leest deze waarden uit de `.env` van de betreffende ALM-omgeving en geeft ze door aan de webcontainer.


## Verwachte deploy workflow op LXC

De LXC-host is bereikbaar via SSH-alias `dev-container`. Binnen deze LXC draait Docker met Compose.

Eerste deploy:

```bash
git clone <github-url> ~/rdworkxwebsite
cd ~/rdworkxwebsite
cp .env.example .env
# vul POSTGRES_PASSWORD en eventuele API keys in
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
curl http://127.0.0.1:5175/health
curl http://127.0.0.1:5175/ready
```

## Veiligheid

- Commit geen echte `OPENAI_API_KEY`, SMTP wachtwoorden of SSH gegevens.
- Zet productiegeheimen in `.env` op de server of in de hosting secret manager.
- `.env.example` mag placeholders bevatten.
- Controleer na deploy altijd `/health` 
- Controleer na identity-configuratie ook `/login`, `/beheer` en `/ready`.
