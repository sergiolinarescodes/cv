# Sergio Linares Peralta
Senior Software Engineer / Tech Lead · Madrid, ES
sergiolinaresperalta@gmail.com · +34 622 76 16 36
GitHub: https://github.com/sergiolinarescodes

## Resumen
Senior Software Engineer / Tech Lead con más de 12 años construyendo
plataformas tipo SaaS en producción. Actualmente lidero servicios
backend de FinOps en Maersk: una plataforma escalable y multi-servicio
que da soporte a la facturación para clientes enterprise de logística.
Mi día a día son microservicios .NET event-driven diseñados para alta
disponibilidad, resiliencia y evolución continua, observabilidad
end-to-end con OpenTelemetry y Kubernetes sobre AKS. Responsabilidad
directa sobre sistemas con impacto directo en cliente y decisiones
técnicas alineadas con las necesidades de negocio.

## Stack
.NET 8/10, C#, microservicios, event-driven (Azure Service Bus, Kafka,
AWS SQS/SNS), DDD / CQRS, patrón Outbox, PostgreSQL, MSSQL, Azure
(AKS), Docker, OpenTelemetry, stack Grafana (Loki, Prometheus, Tempo),
CI/CD, Quartz, React, TypeScript.

Tooling de IA: Claude Code, GitHub Copilot.

## Experiencia profesional

### Senior Software Engineer, Maersk · Nov 2021 a Actualidad

**Plataforma FinOps · Mar 2024 a Actualidad**
Tech-lead en una plataforma escalable y multi-servicio de facturación
en logística y e-commerce. Sistema multi-tenant en producción, alta
disponibilidad y evolución continua, con decisiones técnicas alineadas
con las necesidades de negocio.

- Diseño e implementación de microservicios .NET event-driven sobre
  AKS, con Azure Service Bus + Kafka, patrón Outbox y consistencia
  eventual. Arquitectura para escalabilidad, resiliencia y evolución
  continua.
- Construcción y liderazgo técnico de **CarrierCostProcessor**, el
  servicio que ingiere feeds de costes de carriers, los normaliza y
  los proyecta sobre el modelo de coste de FinOps. Impacto directo en
  la facturación al cliente.
- Contribución a **Crucible**, herramienta interna de FinOps para
  reconciliación de costes y analítica entre unidades de negocio.
- Responsable de la observabilidad end-to-end con el collector de
  OpenTelemetry, Grafana (Loki, Prometheus, Tempo) y alertas vía
  webhook a GoAlert y Microsoft Teams.
- Empuje constante a la calidad: tests unitarios, de integración y
  E2E sobre los flujos críticos de billing.
- Liderazgo del nuevo microservicio de generación de PDFs de factura
  (backend a object storage), cara al cliente.
- Modernización de pipelines CI/CD y liderazgo de la migración a
  Kubernetes (AKS).
- Participación activa en decisiones de evolución de producto e
  infraestructura: upgrades, dirección técnica, procesos de on-call y
  mejora continua.

**Equipo TrackShipment · Sep 2023 a Mar 2024**

- Onboarding de un cliente logístico mayor sobre las APIs de tracking
  y etiquetas de envío, mejorando su eficiencia operativa.
- Setup del stack de OpenTelemetry con logs, métricas y trazas
  estructuradas, queries en Loki / Prometheus / Tempo y alertas vía
  webhook.
- Migración de Azure Web Apps a AKS usando tooling interno.
- Upgrades de versión de .NET sobre múltiples servicios.

**Logística interna y Shopify shipping app · Nov 2021 a Sep 2023**

- Lead developer en una app Shopify (Laravel + React) para etiquetas
  de envío, con OAuth e integración con APIs internas de Maersk.
- Lideré la migración PHP a .NET y on-prem a Azure de las APIs de
  logística interna.

### Senior Web Developer, Babel Sistemas de Información · Feb 2019 a Nov 2021

- **E-Quironsalud** (Prestashop / Symfony): desarrollo PHP y JS,
  integraciones API.
- **Cosentino B2B/B2C** (WordPress): componentes modulares
  customizables.
- **Salud Savia**: APIs REST a medida, back-end con ElasticSearch,
  plugins propios para WordPress, integración con eCommerce.

### Web Developer, Voilá Productora · 2013 a 2019
PHP, JavaScript, jQuery, NodeJS, Unity (.NET). Plataformas CMS
propias, app de búsqueda de rutas en Google Maps, gestores
multimedia y un juego interactivo de VR.

## Proyecto personal, vitrina DDD / SaaS

**shipping-orchestrator** ·
https://github.com/sergiolinarescodes/shipping-orchestrator

Modular monolith open-source en .NET 10 que muestra cómo pienso la
arquitectura SaaS: Domain-Driven Design, separación CQRS de lectura
(Operations vs Customer), Wolverine sobre AWS SQS + SNS para
mensajería y sagas, PostgreSQL (compatible con Aurora), patrón
connector para Shopify, WooCommerce y PostNL, tres hosts desplegables
(`PublicApi`, `PrivateApi`, `Worker`), OpenTelemetry completo.
Construido como la arquitectura que propondría para una plataforma
SaaS de envíos multi-tenant.

## Formación
Grado Superior en Desarrollo de Aplicaciones Web, IES Zaidín-Vergeles
· 2011 a 2013

## Idiomas
Español (nativo), inglés (profesional, uso diario en Maersk con un
equipo multicultural).
