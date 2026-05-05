// === i18n: English source in HTML, Spanish overrides via dictionary ===
const ES = {
  // Sidebar
  'brand.sub':    'ING. DE SOFTWARE SR. · MADRID',
  'nav.summary':  '01 · RESUMEN',
  'nav.experience':'02 · EXPERIENCIA',
  'nav.projects': '03 · PROYECTOS',
  'nav.stack':    '04 · STACK',
  'nav.contact':  '05 · CONTACTO',
  'sb.cv':        'DESCARGAR CV',

  // Term-bar / foot
  'bar.title':    'CV.EXE · v2026.05 · MADRID',
  'bar.nav':      'NAV',
  'bar.print':    'IMPRIMIR',
  'foot.pos':     'SECCIÓN 01 / 05',
  'foot.ready':   'LISTO',

  // Section heads
  'head.summary':    '01 · Resumen',
  'head.experience': '02 · Experiencia',
  'head.projects':   '03 · Proyectos',
  'head.stack':      '04 · Stack',
  'head.contact':    '05 · Contacto',

  // Hero
  'hero.sub':   'INGENIERO DE SOFTWARE SENIOR / TECH LEAD · MADRID, ES · ABIERTO A OFERTAS',
  'hero.blurb':
    'Más de 12 años construyendo plataformas SaaS en producción. ' +
    'Actualmente tech-lead del backend de <b class="hi">FinOps</b> en Maersk: una plataforma ' +
    'escalable y multi-servicio de facturación para clientes enterprise de logística. ' +
    'Microservicios .NET event-driven sobre AKS, diseñados para alta disponibilidad, ' +
    'resiliencia y evolución continua; observabilidad end-to-end con OpenTelemetry. ' +
    'Responsabilidad directa sobre servicios cara al cliente y decisiones técnicas ' +
    'alineadas con las necesidades de negocio.',

  'meta.focus':       'ENFOQUE',
  'meta.cloud':       'CLOUD',
  'meta.obs':         'OBS',
  'meta.years':       'AÑOS',
  'meta.scale':       'ESCALA',
  'meta.scale-val':   'logística enterprise, multi-tenant',

  'chip.production':    'PRODUCCIÓN SAAS',
  'chip.observability': 'OBSERVABILIDAD',
  'chip.current':       'ACTUAL',
  'chip.eu-consult':    'CONSULTORA UE',
  'chip.early-career':  'INICIO DE CARRERA',
  'chip.ddd-saas':      'DDD / SAAS · OPEN SOURCE',

  // Experience
  'exp.maersk-meta':  'INGENIERO DE SOFTWARE SR. · NOV 2021 → ACTUALIDAD',
  'exp.finops-title': 'Plataforma FinOps',
  'exp.finops-meta':  'MAR 2024 → ACTUALIDAD',
  'exp.finops-blurb':
    'Tech-lead en una plataforma escalable y multi-servicio de facturación detrás ' +
    'de clientes enterprise de logística. Sistema multi-tenant en producción con ' +
    'alta disponibilidad y evolución continua, con decisiones técnicas alineadas ' +
    'con las necesidades de negocio.',

  'exp.finops.b1': 'Diseño de microservicios .NET event-driven sobre AKS · Service Bus + Kafka, Outbox, consistencia eventual · arquitectura para escalabilidad y resiliencia',
  'exp.finops.b2': 'Lead developer y arquitecto de <b class="hi">CarrierCostProcessor</b> · ingesta vía FTP de ficheros de coste de carriers, onboarding con patrón builder (con asistencia de IA), Outbox + Kafka con Schema Registry, y andamiaje de tests E2E + integración generado automáticamente por carrier',
  'exp.finops.b3': 'Lead developer y arquitecto de <b class="hi">Crucible</b> · plataforma genérica .NET 10 de procesamiento de eventos que consume feeds de CCP por Kafka y produce líneas de factura en la BD compartida de FinOps; CQRS, EF Core, OpenTelemetry, tests E2E con Testcontainers',
  'exp.finops.b4': 'Observabilidad end-to-end · collector de OpenTelemetry, Grafana (Loki, Prometheus, Tempo), alertas en GoAlert + Teams',
  'exp.finops.b5': 'Calidad alta · tests unitarios, de integración y E2E sobre flujos críticos de billing',
  'exp.finops.b6': 'Liderazgo de un nuevo microservicio para generación de PDFs de factura (backend → object storage), cara al cliente',
  'exp.finops.b7': 'Modernización de pipelines CI/CD y liderazgo de la migración a Kubernetes (AKS)',
  'exp.finops.b8': 'Activo en decisiones de evolución de producto y técnica: upgrades, dirección de infra, on-call, mejora continua',
  'meta.product-decisions': 'PRODUCTO · DECISIONES',

  'exp.trackship-title': 'Equipo TrackShipment',
  'exp.trackship.b1': 'Onboarding de un cliente logístico mayor sobre las APIs de tracking y etiquetas de envío',
  'exp.trackship.b2': 'Setup del stack de OpenTelemetry con logs, métricas y trazas estructuradas',
  'exp.trackship.b3': 'Migración de Azure Web Apps a AKS usando tooling interno',
  'exp.trackship.b4': 'Upgrades de versión de .NET sobre múltiples servicios',
  'meta.onboarding': 'ONBOARDING',
  'meta.upgrades':   'UPGRADES',

  'exp.internal-title': 'Logística interna y app Shopify de envíos',
  'exp.internal.b1': 'Lead developer en una app Shopify (Laravel + React) para etiquetas de envío · OAuth + integración con APIs internas de Maersk',
  'exp.internal.b2': 'Liderazgo de la migración PHP → .NET y on-prem → Azure de las APIs de logística interna',
  'meta.migration':   'MIGRACIÓN',

  'exp.babel-meta': 'SENIOR WEB DEVELOPER · FEB 2019 → NOV 2021',
  'exp.babel.b1': '<b>E-Quironsalud</b> · Prestashop / Symfony · desarrollo PHP + JS, integraciones API',
  'exp.babel.b2': '<b>Cosentino B2B/B2C</b> · WordPress · componentes modulares customizables',
  'exp.babel.b3': '<b>Salud Savia</b> · APIs REST a medida, back-end ElasticSearch, plugins propios para WordPress, integración eCommerce',

  'exp.voila-meta': 'WEB DEVELOPER · 2013 → 2019',
  'exp.voila-blurb':
    'PHP, JavaScript, jQuery, NodeJS, Unity (.NET). Plataformas CMS propias, ' +
    'app de búsqueda de rutas en Google Maps, gestores multimedia y un juego ' +
    'interactivo de VR.',

  'hint.expand': 'CLIC PARA EXPANDIR',

  // Projects
  'proj.shipord-meta':  'PERSONAL · MODULAR MONOLITH .NET 10',
  'proj.shipord-blurb':
    'Arquitectura de referencia open-source para una plataforma SaaS de envíos ' +
    'multi-tenant. Domain-Driven Design con separación CQRS de lectura ' +
    '(Operations vs Customer), Wolverine sobre AWS SQS + SNS para mensajería y ' +
    'sagas, PostgreSQL (compatible con Aurora), patrón connector para ' +
    'Shopify / WooCommerce / PostNL, tres hosts desplegables ' +
    '(PublicApi, PrivateApi, Worker), OpenTelemetry completo.',
  'proj.view-repo':     'VER REPO →',

  'proj.ccp-meta':      'MAERSK · FINOPS · LEAD DEVELOPER Y ARQUITECTO',
  'proj.ccp-blurb':
    'Servicio de ingesta de costes de carriers. Lead developer y arquitecto: ' +
    'diseño del pipeline de ingesta de ficheros desde <b class="hi">FTP</b> con ' +
    '<b class="hi">patrón builder</b> para onboarding plug-and-play de nuevos ' +
    'carriers (incluida integración asistida por IA). Patrón ' +
    '<b class="hi">Outbox</b> que produce eventos de coste normalizados a ' +
    '<b class="hi">Kafka</b> con contratos gestionados vía Schema Registry, ' +
    'consumidos por FinOps y Crucible. Andamiaje de tests E2E + integración ' +
    'generado automáticamente por carrier, de forma que cada nueva integración ' +
    'viaja con su propia red de seguridad.',

  'proj.crucible-meta': 'MAERSK · FINOPS · LEAD DEVELOPER Y ARQUITECTO',
  'proj.crucible-blurb':
    'Plataforma genérica de procesamiento de eventos para FinOps en .NET 10. ' +
    'Lead developer y arquitecto: diseño de la arquitectura por capas sobre ' +
    'los patrones existentes de FinOps (Domain / Application / Infrastructure ' +
    '/ Pipelines / Api / Worker), CQRS vía mediator, EF Core code-first, ' +
    'OpenTelemetry y tests E2E con Testcontainers. La primera pipeline ' +
    'ingiere feeds <b class="hi">VendorCost</b> desde CarrierCostProcessor por ' +
    'Kafka y produce líneas de factura en la base de datos compartida de ' +
    'FinOps, con atribución de enriquecimiento por campo, estado tridimensional ' +
    'de evento (procesamiento / calidad / decisión de negocio) y lineage ' +
    'completo. Construida lo bastante genérica para absorber futuras pipelines ' +
    'de revenue y reconciliación.',

  // Stack
  'stack.backend':  'BACKEND',
  'stack.event':    'EVENT-DRIVEN E INTEGRACIÓN',
  'stack.data':     'DATOS',
  'stack.cloud':    'CLOUD Y OBSERVABILIDAD',
  'stack.frontend': 'FRONTEND',
  'stack.method':   'METODOLOGÍA',
  'stack.ai':       'TOOLING DE IA',

  // Contact
  'contact.direct':    'DIRECTO',
  'contact.email':     'EMAIL',
  'contact.phone':     'TELÉFONO',
  'contact.location':  'UBICACIÓN',
  'contact.status':    'ESTADO',
  'contact.open':      'ABIERTO A OFERTAS',
  'contact.links':     'ENLACES',
  'contact.showcase':  'VITRINA',
  'contact.languages': 'IDIOMAS',
  'lang.es':           'Español · nativo',
  'lang.en':           'Inglés · profesional',
  'contact.eof':       'FIN DE ARCHIVO',
  'contact.eof-line':  '\n$ sergio --disponible\n> listo para empezar.\n',
};

const i18nNodes = new Map();   // node -> original English innerHTML
function applyLang(lang){
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if (!i18nNodes.has(el)) i18nNodes.set(el, el.innerHTML);
    if (lang === 'es' && Object.prototype.hasOwnProperty.call(ES, el.dataset.i18n)){
      el.innerHTML = ES[el.dataset.i18n];
    } else {
      el.innerHTML = i18nNodes.get(el);
    }
  });
  try{ localStorage.setItem('cv-lang', lang); }catch(e){}
  // Update section position label after switching (translates "SECTION → SECCIÓN")
  if (typeof refreshSectionLabel === 'function') refreshSectionLabel();
}

// === Boot sequence ===
const BOOT_LINES = [
  '$ ./cv.exe --user="sergio.linares"',
  'mounting fs ........................ <ok>',
  'loading modules:',
  '  · finops ......................... <ok>',
  '  · carrier-cost-processor ......... <ok>',
  '  · crucible ....................... <ok>',
  '  · shipping-orchestrator .......... <ok>',
  'attaching observability (otel) ..... <ok>',
  'ready.',
];
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = ms => new Promise(r=>setTimeout(r, ms));

const boot = document.querySelector('.boot');
async function runBoot(){
  if (!boot){ document.body.classList.add('ready'); return; }
  if (REDUCED){ boot.remove(); document.body.classList.add('ready'); afterBoot(); return; }
  for (const line of BOOT_LINES){
    const el = document.createElement('span');
    el.className = 'boot-line';
    boot.appendChild(el);
    await typeBootLine(el, line);
    await wait(18);
  }
  await wait(200);
  boot.classList.add('done');
  document.body.classList.add('ready');
  setTimeout(()=>{ boot.remove(); afterBoot(); }, 320);
}
function typeBootLine(el, str){
  return new Promise(res=>{
    let i = 0;
    const step = ()=>{
      if (i >= str.length){ el.appendChild(document.createTextNode('\n')); res(); return; }
      if (str.slice(i, i+4) === '<ok>'){
        const ok = document.createElement('span');
        ok.className = 'ok';
        ok.textContent = '<ok>';
        el.appendChild(ok);
        i += 4;
      } else {
        el.appendChild(document.createTextNode(str[i]));
        i++;
      }
      setTimeout(step, 6 + Math.random()*8);
    };
    step();
  });
}

// === Terminal section nav ===
const tabs = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('.section[id]')];
const promptEl = document.querySelector('.term-prompt');
const promptCmdEl = document.querySelector('.term-prompt .cmd');
const posEl = document.querySelector('.term-foot .pos');

const SECTION_CMDS = {
  summary: 'cat 01-summary.md',
  experience: 'cat 02-experience.md',
  projects: 'ls 03-projects/',
  stack: 'cat 04-stack.txt',
  contact: 'cat 05-contact.txt',
};

let currentId = null;
let typingToken = 0;

function setActiveTab(id){
  tabs.forEach(t => t.classList.toggle('active', t.dataset.sectionLink === id));
}

async function showSection(id, { force=false } = {}){
  if (!force && id === currentId) return;
  const target = document.getElementById(id);
  if (!target) return;
  const idx = sections.findIndex(s => s.id === id) + 1;
  const total = sections.length;

  // Instant swap: sidebar + terminal chrome stay still.
  // Only the inner section content has a reveal-stagger animation
  // (driven by the .section.active CSS rules).
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  setActiveTab(id);
  setSectionLabel(idx, total);
  const content = document.querySelector('.term-content');
  if (content) content.scrollTop = 0;
  currentId = id;
  await typePrompt(SECTION_CMDS[id] || `cat ${id}.md`);
}

let _lastIdx = 1, _lastTotal = 5;
function setSectionLabel(idx, total){
  _lastIdx = idx; _lastTotal = total;
  if (!posEl) return;
  const word = (document.body.dataset.lang === 'es') ? 'SECCIÓN' : 'SECTION';
  posEl.textContent = `${word} ${String(idx).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
}
function refreshSectionLabel(){ setSectionLabel(_lastIdx, _lastTotal); }

function typePrompt(cmd){
  if (!promptCmdEl) return Promise.resolve();
  const myToken = ++typingToken;
  promptCmdEl.textContent = '';
  promptEl.classList.remove('done');
  if (REDUCED){ promptCmdEl.textContent = cmd; promptEl.classList.add('done'); return Promise.resolve(); }
  return new Promise(res=>{
    let i = 0;
    const step = ()=>{
      if (myToken !== typingToken){ res(); return; }
      if (i >= cmd.length){ promptEl.classList.add('done'); res(); return; }
      promptCmdEl.textContent += cmd[i++];
      setTimeout(step, 22 + Math.random()*22);
    };
    step();
  });
}

// === After boot: wire tabs + show first section ===
function afterBoot(){
  tabs.forEach(t=>{
    t.addEventListener('click', e=>{
      e.preventDefault();
      showSection(t.dataset.sectionLink);
    });
  });

  // Keyboard nav
  document.addEventListener('keydown', e=>{
    if (e.target.matches('input, textarea')) return;
    const idx = sections.findIndex(s => s.classList.contains('active'));
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown'){
      if (idx < sections.length - 1){ e.preventDefault(); showSection(sections[idx+1].id); }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
      if (idx > 0){ e.preventDefault(); showSection(sections[idx-1].id); }
    } else if (e.key === 'Home'){
      e.preventDefault(); showSection(sections[0].id);
    } else if (e.key === 'End'){
      e.preventDefault(); showSection(sections[sections.length-1].id);
    } else if (e.key === 'p' || e.key === 'P'){
      e.preventDefault(); window.print();
    }
  });

  // Print button
  document.querySelector('[data-action="print"]')?.addEventListener('click', ()=>window.print());

  // Language toggle
  document.querySelector('[data-action="toggle-lang"]')?.addEventListener('click', ()=>{
    const next = document.body.dataset.lang === 'es' ? 'en' : 'es';
    applyLang(next);
  });
  // Restore saved language
  try{
    const saved = localStorage.getItem('cv-lang');
    if (saved === 'es' || saved === 'en') applyLang(saved);
  }catch(e){}

  // Honor URL hash on load
  const hash = location.hash.replace('#','');
  const start = hash && document.getElementById(hash) ? hash : sections[0]?.id;
  if (start) showSection(start, { force:true });
}

// Run
runBoot();
