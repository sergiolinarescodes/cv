# Sergio Linares Peralta
Senior Software Engineer · Madrid, ES
sergiolinaresperalta@gmail.com · +34 622 76 16 36
GitHub: https://github.com/sergiolinarescodes

## Resumen
Senior Software Engineer / Tech Lead con más de 12 años construyendo
plataformas tipo SaaS en producción. Actualmente lidero servicios
backend de FinOps en Maersk sobre **Aurum**, la plataforma que da
soporte a la facturación de clientes enterprise de logística (hasta
50.000 M USD/año facturados). Especializado en microservicios .NET
event-driven, observabilidad end-to-end y Kubernetes — con
responsabilidad directa sobre sistemas en evolución continua, impacto
directo en cliente y decisiones técnicas alineadas con necesidades de
negocio.

## Stack
.NET 8/10 · C# · Microservicios · Event-driven (Azure Service Bus,
Kafka, AWS SQS/SNS) · DDD / CQRS · Patrón Outbox · PostgreSQL · MSSQL ·
Azure (AKS) · Docker · OpenTelemetry · Stack Grafana (Loki, Prometheus,
Tempo) · CI/CD · Quartz · React · TypeScript

## Experiencia profesional

### Senior Software Engineer — Maersk · Nov 2021 – Actualidad

**FinOps / Plataforma Aurum — Mar 2024 – Actualidad**
Ingeniero de referencia en una plataforma multi-servicio de facturación
que procesa hasta 50.000 M USD anuales en logística y e-commerce.
Sistema multi-tenant en producción, alta disponibilidad y evolución
continua.
- Diseño e implementación de microservicios .NET event-driven sobre
  AKS — Azure Service Bus + Kafka, patrón Outbox, consistencia
  eventual.
- Construcción y liderazgo técnico de **CarrierCostProcessor** —
  servicio que ingiere feeds de costes de carriers, los normaliza y
  los proyecta sobre el modelo de coste de Aurum. Impacto directo en
  la facturación al cliente.
- Contribución a **Crucible** — herramienta interna de FinOps para
  reconciliación de costes y analítica entre unidades de negocio.
- Responsable de la observabilidad end-to-end: collector de
  OpenTelemetry, Grafana (Loki / Prometheus / Tempo), alertas vía
  webhook a GoAlert y Microsoft Teams.
- Empuje constante a la calidad: tests unitarios, de integración y
  E2E sobre los flujos críticos de billing.
- Liderazgo del nuevo microservicio de generación de PDFs de factura
  (backend → object storage), cara al cliente.
- Participación activa en decisiones de evolución de producto e
  infraestructura: upgrades, dirección técnica y procesos de on-call.

**Equipo TrackShipment — Sep 2023 – Mar 2024**
- Onboarding de un cliente logístico mayor sobre las APIs de tracking
  y etiquetas de envío, mejorando su eficiencia operativa.
- Setup del stack de OpenTelemetry con logs, métricas y trazas
  estructuradas; queries en Loki / Prometheus / Tempo y alertas vía
  webhook.
- Migración de Azure Web Apps a AKS usando tooling interno.
- Upgrades de versión de .NET sobre múltiples servicios.

**Logística interna & Shopify shipping app — Nov 2021 – Sep 2023**
- Lead developer en una app Shopify (Laravel + React) para etiquetas
  de envío — OAuth + integración con APIs internas de Maersk.
- Lideré la migración PHP → .NET y on-prem → Azure de las APIs de
  logística interna.

### Senior Web Developer — Babel Sistemas de Información · Feb 2019 – Nov 2021
- **E-Quironsalud** (Prestashop / Symfony): desarrollo PHP + JS,
  integraciones API.
- **Cosentino B2B/B2C** (WordPress): componentes modulares
  customizables.
- **Salud Savia**: APIs REST a medida, back-end con ElasticSearch,
  plugins propios para WordPress, integración con eCommerce.

### Web Developer — Voilá Productora · 2013 – 2019
PHP / JavaScript / jQuery / NodeJS / Unity (.NET). Plataformas CMS
propias, app de búsqueda de rutas en Google Maps, gestores
multimedia, juego interactivo de VR.

## Proyecto personal — Vitrina DDD / SaaS

**shipping-orchestrator** — https://github.com/sergiolinarescodes/shipping-orchestrator
Modular monolith open-source en .NET 10 que muestra cómo pienso la
arquitectura SaaS: Domain-Driven Design, separación CQRS de lectura
(Operations vs Customer), Wolverine sobre AWS SQS + SNS para mensajería
y sagas, PostgreSQL (compatible con Aurora), patrón connector para
Shopify / WooCommerce / PostNL, tres hosts desplegables (`PublicApi`,
`PrivateApi`, `Worker`), OpenTelemetry completo. Construido como la
arquitectura que propondría para una plataforma SaaS de envíos
multi-tenant.

## Formación
Grado Superior en Desarrollo de Aplicaciones Web — IES Zaidín-Vergeles
· 2011 – 2013

## Idiomas
Español (nativo) · Inglés (profesional, uso diario en Maersk con un
equipo multicultural)
