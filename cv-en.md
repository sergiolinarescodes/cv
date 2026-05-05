# Sergio Linares Peralta
Senior Software Engineer · Madrid, ES
sergiolinaresperalta@gmail.com · +34 622 76 16 36
GitHub: https://github.com/sergiolinarescodes

## Summary
Senior Software Engineer / Tech Lead with 12+ years building production
SaaS-style platforms. Currently leading FinOps backend services at Maersk
on **Aurum**, the platform powering invoicing for enterprise logistics
customers (up to USD 50B/year invoiced). Specialised in event-driven .NET
microservices, end-to-end observability and Kubernetes — with direct
ownership of customer-facing systems in continuous evolution and
technical decisions aligned with business needs.

## Tech focus
.NET 8/10 · C# · Microservices · Event-driven (Azure Service Bus, Kafka,
AWS SQS/SNS) · DDD / CQRS · Outbox pattern · PostgreSQL · MSSQL ·
Azure (AKS) · Docker · OpenTelemetry · Grafana stack (Loki, Prometheus,
Tempo) · CI/CD · Quartz · React · TypeScript

## Professional experience

### Senior Software Engineer — Maersk · Nov 2021 – Present

**FinOps / Aurum platform — Mar 2024 – Present**
Lead engineer on a multi-service invoicing platform processing up to
USD 50B/year across logistics and e-commerce. High-availability,
multi-tenant production system in continuous evolution.
- Designed and shipped event-driven .NET microservices on AKS — Azure
  Service Bus + Kafka, Outbox pattern, eventual consistency.
- Built and led **CarrierCostProcessor** — service ingesting carrier
  cost feeds, normalising and projecting them onto the Aurum cost
  model. Direct customer impact via more accurate invoicing.
- Contributed to **Crucible** — internal FinOps tooling for cost
  reconciliation and analytics across business units.
- Owned end-to-end observability: OpenTelemetry collector, Grafana
  (Loki / Prometheus / Tempo), webhook-driven alerts to GoAlert and
  Microsoft Teams.
- Drove a high quality bar with unit, integration and E2E tests across
  critical billing paths.
- Led the new microservice for invoice-PDF generation (backend →
  object storage), customer-facing.
- Active in product and tech-evolution decisions: framework upgrades,
  infra direction, on-call processes.

**TrackShipment team — Sep 2023 – Mar 2024**
- Onboarded a major logistics customer onto tracking and shipping-label
  APIs, improving their operational efficiency.
- Set up the OpenTelemetry stack with structured logs, metrics and
  traces; built Loki / Prometheus / Tempo queries and webhook alerts.
- Led migration from Azure Web Apps to AKS using company-level tooling.
- Drove .NET version upgrades across multiple services.

**Internal logistics & Shopify shipping app — Nov 2021 – Sep 2023**
- Lead developer on a Shopify app (Laravel + React) for shipping
  labels — OAuth + Maersk internal API integration.
- Led PHP → .NET and on-prem → Azure migration of internal logistics
  APIs.

### Senior Web Developer — Babel Sistemas de Información · Feb 2019 – Nov 2021
- **E-Quironsalud** (Prestashop / Symfony): PHP + JS development, API
  integrations.
- **Cosentino B2B/B2C** (WordPress): modular, customisable components.
- **Salud Savia**: custom REST APIs, ElasticSearch back-end, custom
  WordPress plugins, eCommerce integration.

### Web Developer — Voilá Productora · 2013 – 2019
PHP / JavaScript / jQuery / NodeJS / Unity (.NET). Proprietary CMS
platforms, Google Maps routing app, multimedia content managers, VR
interactive game.

## Side project — DDD / SaaS showcase

**shipping-orchestrator** — https://github.com/sergiolinarescodes/shipping-orchestrator
Open-source .NET 10 modular monolith showing how I approach SaaS
architecture: Domain-Driven Design, CQRS read-side split (Operations
vs Customer), Wolverine over AWS SQS + SNS for messaging and sagas,
PostgreSQL (Aurora-compatible), connector pattern for Shopify /
WooCommerce / PostNL, three deployable hosts (`PublicApi`,
`PrivateApi`, `Worker`), full OpenTelemetry. Built as the architecture
I would propose for a multi-tenant SaaS shipping platform.

## Education
Higher Degree in Web Application Development — IES Zaidín-Vergeles ·
2011 – 2013

## Languages
Spanish (native) · English (professional, day-to-day at Maersk in a
multicultural team)
