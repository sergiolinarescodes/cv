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

  const swap = ()=>{
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    setActiveTab(id);
    if (posEl) posEl.textContent = `SECTION ${String(idx).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
    const content = document.querySelector('.term-content');
    if (content) content.scrollTop = 0;
  };

  if (document.startViewTransition && !REDUCED){
    document.startViewTransition(swap);
  } else {
    swap();
  }
  currentId = id;
  await typePrompt(SECTION_CMDS[id] || `cat ${id}.md`);
}

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

  // Honor URL hash on load
  const hash = location.hash.replace('#','');
  const start = hash && document.getElementById(hash) ? hash : sections[0]?.id;
  if (start) showSection(start, { force:true });
}

// Run
runBoot();
