# Deployment Plan - RD Workx Website Lokale Containerarchitectuur

## Commit

Implementatiecommit: wordt na commit bijgewerkt

## Targetomgeving

Lokale DEV:

- Dev-container: `192.168.10.12`
- Local-data container: `192.168.10.50`

## Services

- `rdworkxwebsite-web`
- `rdworkxwebsite-api`
- `rdworkxwebsite-postgres`

## Migraties

Geen SQL-migraties in deze story. PostgreSQL wordt als app-specifieke container voorbereid; de huidige website gebruikt nog geen tabellen.

## Environment en secrets

Secretwaarden niet committen.

Benodigd op dev-container:

- `DATABASE_URL=postgres://rdworkxwebsite:<secret>@192.168.10.50:55432/rdworkxwebsite`
- `TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM`
- `CONTACT_TO`

Benodigd op data-container:

- `POSTGRES_DB=rdworkxwebsite`
- `POSTGRES_USER=rdworkxwebsite`
- `POSTGRES_PASSWORD`
- `POSTGRES_BIND_ADDRESS=192.168.10.50`
- `POSTGRES_PORT=55432`

## Deploycommando's

Op local-data `192.168.10.50`:

```bash
cd ~/rdworkxwebsite
docker compose -f compose.data.yml up -d
```

Op dev-container `192.168.10.12`:

```bash
cd ~/rdworkxwebsite
docker compose up -d --build
```

## Healthchecks

```bash
curl http://192.168.10.12:5175/health
curl http://192.168.10.12:5175/ready
curl http://192.168.10.12:5175/api/public-config
curl http://192.168.10.12:5176/health
curl http://192.168.10.12:5176/ready
```

`/ready` van de API moet `databaseReachable:true` en `databaseUrlSet:true` tonen.

## Smoke test

- Open `http://192.168.10.12:5175/`.
- Controleer dat homepage en assets laden.
- Controleer dat theme toggle werkt.
- Controleer dat contactformulier zonder volledige config veilig een foutstatus toont.

## Rollback

```bash
git checkout <vorige-commit>
docker compose up -d --build
```

Op data-host alleen rollback uitvoeren als de PostgreSQL-containerconfig expliciet terug moet:

```bash
docker compose -f compose.data.yml down
```

Gebruik geen volume-delete zonder aparte dataretentiebeslissing.

## Risico's en aandachtspunten

- Beperk PostgreSQL-poort `55432` tot de lokale route vanaf `192.168.10.12`.
- De API-service is de enige service die databasecredentials mag hebben.
- Deploy pas naar Done na health/smoke op de doelomgeving.
