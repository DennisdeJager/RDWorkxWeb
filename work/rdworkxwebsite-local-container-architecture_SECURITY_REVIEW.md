# Security Review - RD Workx Website Lokale Containerarchitectuur

## Status

Security is van toepassing.

## Maatregelen

- Databasecredentials staan alleen in `rdworkxwebsite-api`.
- SMTP- en Turnstile secret staan alleen in `rdworkxwebsite-api`.
- Web proxyt API-verkeer zonder secrets te kennen.
- `.env.example` bevat alleen placeholders.
- PostgreSQL-poort `55436` moet beperkt blijven tot de lokale route vanaf `192.168.10.12`.

## Restpunt voor deployment

Controleer op local-data dat `192.168.10.50:55436` niet publiek/internet-breed bereikbaar is.
