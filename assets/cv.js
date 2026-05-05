// === Boot sequence: typewriter overlay, then reveal screen ===
const BOOT_LINES = [
  '$ ./cv.exe --user="sergio.linares" --target="sportian"',
  'mounting fs ........................ <ok>',
  'loading modules:',
  '  · finops/aurum ................... <ok>',
  '  · carrier-cost-processor ......... <ok>',
  '  · crucible ....................... <ok>',
  '  · shipping-orchestrator .......... <ok>',
  'attaching observability (otel) ..... <ok>',
  'ready.',
];
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const boot = document.querySelector('.boot');

async function runBoot(){
  if (!boot) { document.body.classList.add('ready'); return; }
  if (REDUCED){ boot.remove(); document.body.classList.add('ready'); return; }
  for (const line of BOOT_LINES){
    const el = document.createElement('span');
    el.className = 'boot-line';
    boot.appendChild(el);
    await typeLine(el, line);
    await wait(20);
  }
  await wait(220);
  boot.classList.add('done');
  document.body.classList.add('ready');
  setTimeout(()=>boot.remove(), 360);
}
function typeLine(el, str){
  return new Promise(res=>{
    let i = 0;
    const step = ()=>{
      if (i >= str.length){ el.appendChild(document.createTextNode('\n')); res(); return; }
      const ch = str[i++];
      // mark <ok> tag
      if (str.slice(i-1, i+3) === '<ok>'){
        const ok = document.createElement('span');
        ok.className = 'ok';
        ok.textContent = '<ok>';
        el.appendChild(ok);
        i += 3;
      } else {
        el.appendChild(document.createTextNode(ch));
      }
      setTimeout(step, 8 + Math.random()*8);
    };
    step();
  });
}
const wait = ms => new Promise(r=>setTimeout(r, ms));

// === Sidebar tabs + scrollspy ===
const tabs = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('.section[id]')];

function setActive(id){
  tabs.forEach(t => t.classList.toggle('active', t.dataset.sectionLink === id));
}

function scrollToSection(id){
  const target = document.getElementById(id);
  if (!target) return;
  const go = ()=>{
    target.scrollIntoView({behavior: REDUCED ? 'instant' : 'smooth', block: 'start'});
    setActive(id);
  };
  // Use View Transitions API if available
  if (document.startViewTransition && !REDUCED){
    document.startViewTransition(go);
  } else {
    go();
  }
}

tabs.forEach(t=>{
  t.addEventListener('click', e=>{
    e.preventDefault();
    scrollToSection(t.dataset.sectionLink);
  });
});

// IntersectionObserver to highlight active tab on scroll
const io = new IntersectionObserver(entries=>{
  // pick the entry with the largest intersectionRatio that is intersecting
  const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActive(visible.target.id);
}, { rootMargin:'-30% 0px -55% 0px', threshold:[0, .25, .5, .75, 1] });
sections.forEach(s=>io.observe(s));

// === Keyboard nav ===
document.addEventListener('keydown', e=>{
  if (e.target.matches('input, textarea')) return;
  const idx = tabs.findIndex(t=>t.classList.contains('active'));
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown'){
    if (idx < tabs.length - 1){ e.preventDefault(); scrollToSection(tabs[idx+1].dataset.sectionLink); }
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
    if (idx > 0){ e.preventDefault(); scrollToSection(tabs[idx-1].dataset.sectionLink); }
  } else if (e.key === 'Home'){
    e.preventDefault(); scrollToSection(tabs[0].dataset.sectionLink);
  } else if (e.key === 'End'){
    e.preventDefault(); scrollToSection(tabs[tabs.length-1].dataset.sectionLink);
  } else if (e.key === 'p' || e.key === 'P'){
    e.preventDefault(); window.print();
  }
});

// === Print button ===
document.querySelector('[data-action="print"]')?.addEventListener('click', ()=>window.print());

// === Mouse parallax on .screen (3D tilt tied to pointer X/Y) ===
const screen = document.querySelector('.screen');
const stage = document.querySelector('.stage');
let target = { rx:0, ry:0 }, current = { rx:0, ry:0 }, raf = 0;

function onMove(e){
  if (REDUCED || !screen) return;
  if (window.innerWidth <= 980) return;
  const r = stage.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  target.ry = -2 + (x - .5) * -3;     // base -2deg, ±1.5deg from mouse
  target.rx = .4 + (y - .5) * 1.2;    // base .4deg, ±.6deg
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick(){
  current.rx += (target.rx - current.rx) * .08;
  current.ry += (target.ry - current.ry) * .08;
  if (screen) screen.style.transform = `rotateY(${current.ry.toFixed(2)}deg) rotateX(${current.rx.toFixed(2)}deg)`;
  if (Math.abs(target.rx - current.rx) > .01 || Math.abs(target.ry - current.ry) > .01){
    raf = requestAnimationFrame(tick);
  } else {
    raf = 0;
  }
}
window.addEventListener('mousemove', onMove, { passive:true });

// === Run ===
runBoot();
