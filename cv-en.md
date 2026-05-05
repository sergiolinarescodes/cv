# Sergio Linares Peralta
Senior Software Engineer / Tech Lead · Madrid, ES
sergiolinaresperalta@gmail.com · +34 622 76 16 36
GitHub: https://github.com/sergiolinarescodes

## Summary
Senior Software Engineer / Tech Lead with 12+ years building production
SaaS-style platforms. Currently leading FinOps backend services at
Maersk: a scalable, multi-service platform powering invoicing for
enterprise logistics customers. Day to day I work on event-driven .NET
microservices designed for high availability, resilience and continuous
evolution, end-to-end observability with OpenTelemetry, and Kubernetes
on AKS. Direct ownership of customer-facing systems and technical
decisions aligned with business needs.

## Tech focus
.NET 8/10, C#, microservices, event-driven (Azure Service Bus, Kafka,
AWS SQS/SNS), DDD / CQRS, Outbox pattern, PostgreSQL, MSSQL, Azure
(AKS), Docker, OpenTelemetry, Grafana stack (Loki, Prometheus, Tempo),
CI/CD, Quartz, React, TypeScript.

AI tooling: Claude Code, GitHub Copilot.

## Professional experience

### Senior Software Engineer, Maersk · Nov 2021 to Present

**FinOps platform · Mar 2024 to Present**
Tech-lead on a scalable, multi-service invoicing platform across
logistics and e-commerce. High-availability, multi-tenant production
system in continuous evolution, with technical decisions aligned with
business needs.

- Designed and shipped event-driven .NET microservices on AKS, using
  Azure Service Bus + Kafka with the Outbox pattern and eventual
  consistency. Architected for scalability, resilience and continuous
  evolution.
- Built and led **CarrierCostProcessor**, the service that ingests
  carrier cost feeds, normalises them and projects them onto the
  FinOps cost model. Direct customer impact via more accurate
  invoicing.
- Contributed to **Crucible**, an internal FinOps tool for cost
  reconciliation and analytics across business units.
- Owned end-to-end observability with the OpenTelemetry collector,
  Grafana (Loki, Prometheus, Tempo) and webhook-driven alerts to
  GoAlert and Microsoft Teams.
- Drove a high quality bar with unit, integration and E2E tests across
  critical billing paths.
- Led the new microservice for invoice-PDF generation (backend to
  object storage), customer-facing.
- Modernised CI/CD pipelines and led the migration to Kubernetes
  (AKS).
- Active in product and tech-evolution decisions: framework upgrades,
  infra direction, on-call processes, continuous improvement.

**TrackShipment team · Sep 2023 to Mar 2024**

- Onboarded a major logistics customer onto our tracking and
  shipping-label APIs, improving their operational efficiency.
- Set up the OpenTelemetry stack with structured logs, metrics and
  traces, including Loki / Prometheus / Tempo queries and webhook
  alerts.
- Led the migration from Azure Web Apps to AKS using company-level
  tooling.
- Drove .NET version upgrades across multiple services.

**Internal logistics & Shopify shipping app · Nov 2021 to Sep 2023**

- Lead developer on a Shopify app (Laravel + React) for shipping
  labels, with OAuth and Maersk internal API integration.
- Led the PHP to .NET, on-prem to Azure migration of the internal
  logistics APIs.

### Senior Web Developer, Babel Sistemas de Información · Feb 2019 to Nov 2021

- **E-Quironsalud** (Prestashop / Symfony): PHP and JS development,
  API integrations.
- **Cosentino B2B/B2C** (WordPress): modular, customisable components.
- **Salud Savia**: custom REST APIs, ElasticSearch back-end, custom
  WordPress plugins, eCommerce integration.

### Web Developer, Voilá Productora · 2013 to 2019
PHP, JavaScript, jQuery, NodeJS, Unity (.NET). Proprietary CMS
platforms, a Google Maps routing app, multimedia content managers and
a VR interactive game.

## Side project, DDD / SaaS showcase

**shipping-orchestrator** ·
https://github.com/sergiolinarescodes/shipping-orchestrator

Open-source .NET 10 modular monolith showing how I approach SaaS
architecture: Domain-Driven Design, CQRS read-side split (Operations
vs Customer), Wolverine over AWS SQS + SNS for messaging and sagas,
PostgreSQL (Aurora-compatible), connector pattern for Shopify,
WooCommerce and PostNL, three deployable hosts (`PublicApi`,
`PrivateApi`, `Worker`), full OpenTelemetry. Built as the architecture
I would propose for a multi-tenant SaaS shipping platform.

## Education
Higher Degree in Web Application Development, IES Zaidín-Vergeles ·
2011 to 2013

## Languages
Spanish (native), English (professional, day-to-day at Maersk in a
multicultural team).
