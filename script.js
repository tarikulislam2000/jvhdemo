/* ---------- icons ---------- */
const I = {
  building:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/></svg>',
  pin:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  bag:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/></svg>',
  pound:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20H6c2-1.5 2.5-3.5 2.5-6V8.5A4 4 0 0 1 16 7M5 13h8"/></svg>',
  clock:'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.3 2-1 1.7L11 13V6h2z"/></svg>',
  users:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5zM15.5 19c0-2-.6-3.5-1.7-4.6 3.6-.4 6.2 1.4 6.2 4.6z"/></svg>',
  lock:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  spark:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.3L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.7z"/></svg>',
  arrow:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  left:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>',
  shield:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  crown:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5z"/></svg>'
};

/* ---------- sample data ---------- */
const DEP = 'Dependants Allowed (Higher-Skilled Roles)';
const jobs = [
 {id:'j1',title:'Support Worker - 8 years Long Employment Permit Offered',company:'States of Guernsey',loc:'States Of Guernsey',type:'Full-Time',salary:'£30,434 - £35,627 per annum',posted:'2 days ago',postedDate:'October 31, 2026',closing:'13 Nov 2026',closingSoon:true,area:'Overseas',spons:'Sponsorship Available',route:'Guernsey Employment Permit (8 years)',
  ai:'Support children with learning disabilities at The Croft, a 7-bed short-breaks home, plus outreach in family homes. Shift work with pay enhancements of 40% and 80% for unsocial hours.',
  reqs:['Experience supporting children or young people','Able to work alone and manage your own workload','Comfortable with shift and unsocial-hours work','Enhanced pre-employment checks'],
  match:72,missing:['Safeguarding certificate','Level 3 Diploma'],cos:null,level:'MID'},
 {id:'j2',title:'Senior Community Staff Nurse',company:'North Cumbria Integrated Care NHS Foundation Trust',loc:'Cumbria, United Kingdom',type:'Full-Time',salary:'£39,959 - £48,117 per annum',posted:'2 days ago',postedDate:'October 31, 2026',closing:'20 Nov 2026',area:'UK only',spons:'Sponsorship Available',route:'Health and Care Worker visa',
  ai:'Lead a community nursing team visiting patients at home across rural Cumbria. Band 6 role with caseload management and mentoring junior nurses.',
  reqs:['NMC registered nurse','Community nursing experience','Full UK driving licence','Team leadership experience'],match:58,missing:['UK driving licence','NMC PIN'],cos:212,level:'SENIOR'},
 {id:'j3',title:"Social Worker/Experienced Social Worker (Children's)",company:'Wirral Council',loc:'Wirral, Mallory, United Kingdom',type:'Full-time',salary:'£40,444 - £47,665 per annum',posted:'5 days ago',postedDate:'October 28, 2026',closing:'25 Nov 2026',area:'UK only',spons:'Sponsorship Available',route:'Skilled Worker visa',
  ai:"Children's social work in a locality team: assessments, child protection plans and court work. Experienced grade available for candidates with 2+ years post-qualifying.",
  reqs:['Social Work England registration','Degree in Social Work','Child protection casework','Court report writing'],match:64,missing:['Social Work England registration'],cos:57,level:'MID'},
 {id:'j4',title:'Capital Project Manager',company:'Chelsea & Westminster NHS Foundation Trust',loc:'London, United Kingdom',type:'Full-Time',salary:'£66,274 - £73,496 per annum',posted:'5 days ago',postedDate:'October 28, 2026',closing:'18 Nov 2026',area:'Overseas',spons:'Sponsorship Available',route:'Skilled Worker visa',
  ai:'Manage hospital estate building projects from business case to handover. Works with clinicians, contractors and finance on budgets up to multi-million pounds.',
  reqs:['Construction or estates project delivery','RICS / APM / PRINCE2 or similar','Budget and contract management','NHS or healthcare estates (desirable)'],match:81,missing:['NEC4 contract experience'],cos:140,level:'SENIOR'},
 {id:'j5',title:'Biomedical Scientist',company:'Great Ormond Street Hospital NHS Trust',loc:'London, United Kingdom',type:'Permanent',salary:'£38,488 - £46,852 per year',posted:'5 days ago',postedDate:'October 28, 2026',closing:'21 Nov 2026',area:'UK only',spons:'Sponsorship Available',route:'Health and Care Worker visa',
  ai:'Laboratory role in a children’s hospital: run and validate diagnostic tests, maintain quality standards and take part in the out-of-hours rota.',
  reqs:['HCPC registered Biomedical Scientist','IBMS Specialist Portfolio (desirable)','Laboratory quality systems (UKAS)','Out-of-hours rota'],match:69,missing:['HCPC registration'],cos:310,level:'MID'},
 {id:'j6',title:'Occupation Therapist',company:'Somerset NHS Foundation Trust',loc:'Taunton, Somerset, United Kingdom',type:'Permanent',salary:'£32,073 - £39,043 per year',posted:'5 days ago',postedDate:'October 28, 2026',closing:'16 Nov 2026',closingSoon:true,area:'UK only',spons:'Sponsorship Available',route:'Health and Care Worker visa',
  ai:'Band 5 occupational therapist rotating across inpatient and community services. Preceptorship support for newly qualified therapists.',
  reqs:['HCPC registered Occupational Therapist','OT degree','Good written and spoken English','Willing to travel across sites'],match:55,missing:['HCPC registration','UK placement experience'],cos:98,level:'ENTRY'},
 {id:'j7',title:'Delivery Lead',company:'Cambridge University Press & Assessment',loc:'Cambridge, Coventry, United Kingdom',type:'Permanent',salary:'£49,300 - £65,950 PA',posted:'5 days ago',postedDate:'October 28, 2026',closing:'30 Nov 2026',area:'UK only',spons:'Sponsorship Available',route:'Skilled Worker visa',
  ai:'Lead agile delivery for digital product teams: plan releases, remove blockers and report progress to stakeholders. Hybrid working.',
  reqs:['Agile delivery (Scrum / Kanban)','Jira and roadmap tools','Stakeholder management','Digital product experience'],match:77,missing:['SAFe certification'],cos:44,level:'SENIOR'},
 {id:'j8',title:'Senior Delivery Manager',company:'Jacobs UK Ltd',loc:'London, United Kingdom',type:'Full-Time',salary:'Competitive',posted:'5 days ago',postedDate:'October 28, 2026',closing:'28 Nov 2026',area:'UK only',spons:'Sponsorship Likely Available',route:'Skilled Worker visa',
  ai:'Own delivery of large engineering consultancy programmes: scope, schedule, risk and client reporting across multi-disciplinary teams.',
  reqs:['Programme or delivery management','Engineering or infrastructure sector','Risk and change control','Client-facing reporting'],match:62,missing:['Infrastructure sector experience'],cos:83,level:'SENIOR'},
 {id:'j9',title:'Senior Engineer',company:'Jacobs UK Ltd',loc:'London, United Kingdom',type:'Full-Time',salary:'Competitive',posted:'5 days ago',postedDate:'October 28, 2026',closing:'28 Nov 2026',area:'UK only',spons:'Sponsorship Likely Available',route:'Skilled Worker visa',
  ai:'Design and check engineering solutions for UK infrastructure projects, mentor graduates and work towards chartership.',
  reqs:['Engineering degree','Chartered or working towards (ICE / IStructE)','Design software experience','UK codes and standards'],match:74,missing:['Chartership'],cos:83,level:'SENIOR'}
];
const byId = id => jobs.find(j=>j.id===id);

/* ---------- design definitions ---------- */
const DESIGNS = [
 {key:'d1',short:'Design 1',name:'Summary first',
  title:'Click → summary popup → full details',
  desc:'One “View Details” button. It opens a summary popup first. The full page is one more click.',
  flow:['View Details','Summary popup','See full details'],
  pros:['One button, simple card','List scroll position is kept','Becomes a bottom sheet on mobile'],
  cons:['Extra click for users who want the full page','Popup must stay short'],
  lock:['Facts + AI summary are free','CV match score and tools are locked inside the popup']},
 {key:'d2',short:'Design 2',name:'Hover preview',
  title:'Hover → summary · View Details → full page',
  desc:'Hover a card for a moment to see the summary. The button still goes straight to the full page.',
  flow:['Hover card','Summary preview','View Details → full page'],
  pros:['Zero clicks, fastest scanning on desktop','Full page is still one click'],
  cons:['No hover on phones (tap the card instead)','Preview can appear by accident and hides the card while open','Hard to make accessible'],
  lock:['Summary is free','Only a small “Premium insights” teaser line, so hover stays light']},
 {key:'d3',short:'Design 3',name:'Two buttons',
  title:'View Summary + View Details',
  desc:'Each card has two buttons. Summary opens under the card’s row, so the grid does not break.',
  flow:['View Summary','Panel under the row','View Details → full page'],
  pros:['User chooses what they want','Very clear, no surprises','Several cards stay visible around it'],
  cons:['Two buttons = heavier card, one more decision','Opening a panel pushes rows down'],
  lock:['Premium area shown blurred inside the panel','Upgrade button sits right next to the value']},
 {key:'d4',short:'Design 4',name:'Split view',
  title:'List on the left, summary panel on the right',
  desc:'Like LinkedIn / Indeed. Click any row and the panel updates. On phones the panel becomes a sheet.',
  flow:['Click row','Panel updates','Open full details'],
  pros:['Fastest way to compare many jobs','No popups, panel is always there','Great for active job seekers'],
  cons:['Big layout change from the card grid','Rows show less info than cards','Needs a separate mobile pattern'],
  lock:['“Summary” tab is free','“Insights” tab (match score, sponsor data, tools) is Premium']},
 {key:'d5',short:'Design 5',name:'Drawer + free quota',
  title:'Side drawer with next / previous and a daily free limit',
  desc:'Summary opens in a side drawer. Users can step through jobs with arrows. Free users get 3 AI summaries a day.',
  flow:['Quick look','Drawer · next / prev','Full details'],
  pros:['Browse many jobs without closing anything','Limit creates a natural upgrade moment','Keeps AI cost under control'],
  cons:['A limit can annoy free users','Needs per-user tracking on the backend','More logic to build'],
  lock:['Facts are always free','After 3 summaries/day the AI summary and requirements lock']}
];

/* ---------- state ---------- */
/* phrases shown in bold on the details page */
const KEY_TERMS = {
  j1:['learning disabilities','7-bed short-breaks home','Shift work','40% and 80%','children or young people','work alone','unsocial-hours','Enhanced pre-employment checks'],
  j2:['community nursing team','rural Cumbria','Band 6','NMC registered nurse','Community nursing experience','Full UK driving licence','Team leadership experience'],
  j3:['child protection plans','court work','2+ years post-qualifying','Social Work England registration','Degree in Social Work','Child protection casework','Court report writing'],
  j4:['business case to handover','multi-million pounds','Construction or estates project delivery','RICS / APM / PRINCE2','Budget and contract management'],
  j5:['children’s hospital','out-of-hours rota','HCPC registered Biomedical Scientist','UKAS','Out-of-hours rota'],
  j6:['Band 5','Preceptorship support','HCPC registered Occupational Therapist','OT degree','Willing to travel'],
  j7:['agile delivery','Hybrid working','Agile delivery','Stakeholder management'],
  j8:['large engineering consultancy programmes','Programme or delivery management','Risk and change control'],
  j9:['UK infrastructure projects','chartership','Engineering degree','Chartered or working towards','UK codes and standards']
};
const FREE_LIMIT = 3;
const S = {design:'d1', premium:false, view:'list', detailId:null, viewed:new Set(), d3open:null, d4sel:'j1', d4tab:'sum', d5idx:null, quota:new Set()};
try{const p=localStorage.getItem('jvh-premium'); if(p==='1') S.premium=true;}catch(e){}
const app = document.getElementById('app');

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const markKey = (text,id) => (KEY_TERMS[id]||[]).reduce((h,t)=>h.split(esc(t)).join(`<strong>${esc(t)}</strong>`),esc(text));
function toast(msg){document.querySelector('.toast')?.remove();const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2400);}

function badges(j){return `<div class="badges"><span class="bdg">${esc(j.spons)}</span><span class="bdg g">${esc(j.area)}</span></div>`}
function factsHTML(j){return `<div class="facts">
  <div>${I.pin}<span>${esc(j.loc)}</span></div><div>${I.bag}<span>${esc(j.type)}</span></div>
  <div>${I.pound}<span>${esc(j.salary.replace('£',''))}</span></div><div>${I.clock}<span>${esc(j.posted)}</span></div></div>`}

function cardHTML(j, buttons, extra=''){
  return `<article class="card" data-id="${j.id}" ${extra}>
    <div class="c-head"><div class="c-ico">${I.building}</div><div class="c-title"><h3>${esc(j.title)}</h3><p>${esc(j.company)}</p></div>${badges(j)}</div>
    ${factsHTML(j)}
    <div class="dep">${I.users}<span>${DEP}</span></div>
    ${buttons}
    ${S.viewed.has(j.id)?'<span class="viewed">You already viewed this job</span>':''}
  </article>`;
}

function lockBox(title, text, kind='score'){
  const fake = kind==='score'
    ? `<div class="big">78%</div><div class="bar-f" style="width:80%"></div><div class="bar-f" style="width:55%"></div>`
    : `<div class="bar-f" style="width:90%"></div><div class="bar-f" style="width:70%"></div><div class="bar-f" style="width:82%"></div><div class="bar-f" style="width:40%"></div>`;
  return `<div class="lock"><div class="lock-fake" aria-hidden="true">${fake}</div>
    <div class="lock-over"><strong>${I.lock}${esc(title)}</strong><span>${esc(text)}</span>
    <button class="btn gold sm" data-act="upgrade">${I.crown} Unlock with Premium</button></div></div>`;
}

function premiumReal(j){
  return `<div class="prem">
    <div class="prem-h">${I.crown} Premium insights</div>
    <div class="score"><div class="ring" style="--p:${j.match}"><b>${j.match}%</b></div>
      <p><strong>Your CV matches ${j.match}% of this job.</strong><br><small>Missing:</small></p></div>
    <div class="chips">${j.missing.map(m=>`<span class="chip">${esc(m)}</span>`).join('')}</div>
    ${j.cos?`<p style="margin:0;font-size:13.5px">This employer issued <strong>${j.cos}</strong> Certificates of Sponsorship in 2025.</p>`:''}
    <div class="actions"><button class="btn sm" data-act="tool">Tailor my CV</button><button class="btn sm line" data-act="tool">Supporting statement</button></div>
  </div>`;
}

function premiumBlock(j, mode='box'){
  if(S.premium) return premiumReal(j);
  if(mode==='teaser') return `<div class="teaser">${I.lock}<span>CV match score + sponsor data</span><button data-act="upgrade">Premium</button></div>`;
  return lockBox('CV match score & AI tools','See how well your CV fits, what is missing, and tailor your CV in one click.');
}

function keyFacts(j){
  return `<div class="kv">
    <div><span>Salary</span><strong>${esc(j.salary)}</strong></div>
    <div><span>Job type</span><strong>${esc(j.type)}</strong></div>
    <div><span>Visa route</span><strong>${esc(j.route)}</strong></div>
    <div><span>Who can apply</span><strong>${esc(j.area==='Overseas'?'Overseas + UK':'UK-based only')}</strong></div>
    <div><span>Dependants</span><strong>Allowed (higher-skilled)</strong></div>
    <div class="${j.closingSoon?'warn':''}"><span>Closing date</span><strong>${esc(j.closing)}${j.closingSoon?' · soon':''}</strong></div>
  </div>`;
}

/* opts: compact, premMode, locked(summary locked by quota), showTop */
function summaryHTML(j, o={}){
  const top = o.showTop===false?'':`<div class="sum-top"><h3>${esc(j.title)}</h3><p>${esc(j.company)} · ${esc(j.loc)}</p></div>`;
  const aiBlock = o.locked
    ? `<div class="wall">${I.lock}<strong>You used your ${FREE_LIMIT} free AI summaries today</strong><span>Key facts stay free. Upgrade for unlimited summaries, or come back tomorrow.</span><button class="btn gold sm" data-act="upgrade">${I.crown} Get unlimited summaries</button></div>`
    : `<div class="ai"><b>${I.spark} AI summary</b>${esc(j.ai)}</div>`;
  const reqs = o.locked ? '' : `<div class="blk"><h4>Key requirements</h4><ul class="reqs">${(o.compact?j.reqs.slice(0,3):j.reqs).map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div>`;
  return `<div class="sum">${top}${aiBlock}${keyFacts(j)}${reqs}${o.noPrem?'':premiumBlock(j,o.premMode)}</div>`;
}

/* ---------- top bar ---------- */
function renderTabs(){
  document.getElementById('tabs').innerHTML = DESIGNS.map(d=>`<button class="tab" role="tab" id="tab-${d.key}" aria-selected="${S.design===d.key}" data-design="${d.key}"><span>${d.short}</span><b>${d.name}</b></button>`).join('');
  document.getElementById('planFree').setAttribute('aria-pressed',!S.premium);
  document.getElementById('planPrem').setAttribute('aria-pressed',S.premium);
}

function briefHTML(d){
  const quota = d.key==='d5' && !S.premium
    ? `<div class="meter">Free AI summaries used today: ${Math.min(S.quota.size,FREE_LIMIT)} / ${FREE_LIMIT} <button data-act="resetQuota">reset demo</button></div>` : '';
  return `<section class="brief">
    <div><h2>${esc(d.title)}</h2><p>${esc(d.desc)}</p>
      <div class="flow">${d.flow.map((f,i)=>`${i?'<em>→</em>':''}<i>${esc(f)}</i>`).join('')}</div>${quota}</div>
    <div class="pro"><h4>Good</h4><ul>${d.pros.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
    <div class="con"><h4>Trade-off</h4><ul>${d.cons.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
    <div class="lk"><h4>Lock system</h4><ul>${d.lock.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
  </section>`;
}

/* ---------- list views ---------- */
const canHover = () => matchMedia('(hover:hover) and (pointer:fine)').matches;

function renderList(){
  const d = DESIGNS.find(x=>x.key===S.design);
  let body = '';
  if(S.design==='d1'){
    body = `<div class="grid">${jobs.map(j=>cardHTML(j,`<button class="btn block" data-act="d1open" data-id="${j.id}">View Details</button>`)).join('')}</div>`;
  } else if(S.design==='d2'){
    const hint = canHover()?'Hover the card to preview':'Tap the card to preview';
    body = `<div class="grid">${jobs.map(j=>cardHTML(j,`<button class="btn block" data-act="detail" data-id="${j.id}">View Details</button><div class="hint">${hint}</div>`,'data-hover="1"')).join('')}</div>`;
  } else if(S.design==='d3'){
    body = `<div class="grid" id="d3grid">${jobs.map(j=>cardHTML(j,`<div class="btn-row"><button class="btn ghost" data-act="d3toggle" data-id="${j.id}" aria-expanded="${S.d3open===j.id}">${S.d3open===j.id?'Hide Summary':'View Summary'}</button><button class="btn" data-act="detail" data-id="${j.id}">View Details</button></div>`)).join('')}</div>`;
  } else if(S.design==='d4'){
    body = `<div class="split"><div class="list">${jobs.map(j=>`
      <button class="row ${S.d4sel===j.id?'active':''}" data-act="d4sel" data-id="${j.id}">
        <div class="c-ico">${I.building}</div>
        <div style="min-width:0"><h3>${esc(j.title)}</h3><p>${esc(j.company)}</p>
          <div class="meta"><span>${esc(j.loc)}</span><span>${esc(j.salary)}</span><span>${esc(j.posted)}</span></div></div>
        <div class="tagl"><span class="mini">${esc(j.area)}</span>${S.viewed.has(j.id)?'<span class="mini" style="background:var(--gold-soft);color:var(--gold)">Viewed</span>':''}</div>
      </button>`).join('')}</div>
      <aside class="panel" id="d4panel">${d4panelHTML()}</aside></div>`;
  } else {
    body = `<div class="grid">${jobs.map((j,i)=>cardHTML(j,`<div class="btn-row"><button class="btn ghost" data-act="d5open" data-idx="${i}">Quick look</button><button class="btn" data-act="detail" data-id="${j.id}">View Details</button></div>`)).join('')}</div>`;
  }
  app.innerHTML = `<div class="wrap">${briefHTML(d)}<h2 class="section-title">Featured Sponsored Jobs</h2>${body}</div>
    <p class="foot wrap">Prototype with sample data · switch “Free user / Premium” at the top to see the lock states</p>`;
  if(S.design==='d3' && S.d3open) placeRowPanel();
}

/* ---------- D1 modal (also used as mobile sheet for D2/D4) ---------- */
function openModal(id, label='Job summary'){
  closeOverlays();
  const j = byId(id);
  const el = document.createElement('div');
  el.className='scrim'; el.dataset.overlay='modal';
  el.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(j.title)} summary">
    <div class="m-head"><span>${label}</span><button class="x" data-act="close" aria-label="Close">${I.x}</button></div>
    <div class="m-body">${summaryHTML(j)}</div>
    <div class="m-foot"><button class="btn line" data-act="close">Back to jobs</button><button class="btn" data-act="detail" data-id="${j.id}">See full details ${I.right}</button></div>
  </div>`;
  el.addEventListener('click',e=>{if(e.target===el)closeOverlays();});
  document.body.appendChild(el);
  el.querySelector('.x').focus();
}

/* ---------- D2 popover ---------- */
let popEl=null, popTimer=null, popFor=null;
function showPop(card){
  const j = byId(card.dataset.id);
  hidePop();
  popEl = document.createElement('div');
  popEl.className='popover'; popEl.setAttribute('role','tooltip');
  popEl.innerHTML = `<div class="pop-body">${summaryHTML(j,{compact:true,premMode:'teaser'})}</div>
    <div class="pop-foot"><button class="btn block" data-act="detail" data-id="${j.id}">View Details</button></div>`;
  card.appendChild(popEl);
  void popEl.offsetWidth; // apply the start state so the transition runs
  popEl.classList.add('open');
  popFor = card; card.classList.add('active');
}
function hidePop(){clearTimeout(popTimer);if(popEl){const el=popEl;el.classList.remove('open');setTimeout(()=>el.remove(),200);}popEl=null;popFor?.classList.remove('active');popFor=null;}
app.addEventListener('mouseover',e=>{
  if(S.design!=='d2'||S.view!=='list'||!canHover())return;
  const card=e.target.closest('.card[data-hover]'); if(!card)return;
  if(popFor===card)return;
  hidePop();
  popTimer=setTimeout(()=>showPop(card),350);
});
app.addEventListener('mouseout',e=>{
  if(S.design!=='d2')return;
  const card=e.target.closest('.card[data-hover]'); if(!card)return;
  if(card.contains(e.relatedTarget))return;
  hidePop();
});

/* ---------- D3 row panel ---------- */
function placeRowPanel(){
  const grid=document.getElementById('d3grid'); if(!grid)return;
  grid.querySelector('.rowpanel')?.remove();
  grid.querySelectorAll('.card').forEach(c=>c.classList.toggle('active',c.dataset.id===S.d3open));
  if(!S.d3open)return;
  const cards=[...grid.querySelectorAll('.card')];
  const idx=cards.findIndex(c=>c.dataset.id===S.d3open);
  const cols=getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  const end=Math.min(Math.floor(idx/cols)*cols+cols-1,cards.length-1);
  const j=byId(S.d3open);
  const p=document.createElement('section');
  p.className='rowpanel'; p.setAttribute('aria-label',j.title+' summary');
  p.innerHTML=`<button class="x rp-close" data-act="d3close" aria-label="Close summary">${I.x}</button>
    <div class="rp-grid">
      <div><div class="sum-top"><h3 style="font-size:20px;padding-right:40px">${esc(j.title)}</h3><p style="margin:3px 0 0;color:var(--muted-ink)">${esc(j.company)} · ${esc(j.loc)}</p></div>
        <div class="ai"><b>${I.spark} AI summary</b>${esc(j.ai)}</div>
        <div class="blk"><h4>Key requirements</h4><ul class="reqs">${j.reqs.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div></div>
      <div>${keyFacts(j)}${premiumBlock(j)}
        <button class="btn" data-act="detail" data-id="${j.id}">See full details ${I.right}</button></div>
    </div>`;
  cards[end].after(p);
  const cr=cards[idx].getBoundingClientRect(), gr=grid.getBoundingClientRect();
  p.style.setProperty('--caret',(cr.left-gr.left+cr.width/2)+'px');
}
let rz; addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(()=>{if(S.design==='d3'&&S.view==='list')placeRowPanel();},120);});

/* ---------- D4 panel ---------- */
function d4panelHTML(){
  const j=byId(S.d4sel);
  const ins = S.premium ? premiumReal(j) :
    `${lockBox('CV match score','See your match % and the skills you are missing.')}
     ${lockBox('Sponsor history','Certificates issued, licence rating and hiring trend for this employer.','lines')}
     ${lockBox('Tailor CV & supporting statement','Generate both for this job in one click.','lines')}`;
  return `<div class="p-tabs" role="tablist">
      <button class="p-tab" role="tab" aria-selected="${S.d4tab==='sum'}" data-act="d4tab" data-tab="sum">Summary</button>
      <button class="p-tab" role="tab" aria-selected="${S.d4tab==='ins'}" data-act="d4tab" data-tab="ins">${S.premium?I.crown:I.lock} Insights</button>
    </div>
    <div class="p-body">${S.d4tab==='sum'
      ? summaryHTML(j,{noPrem:true}) + `<div class="actions" style="margin-top:16px"><button class="btn" data-act="detail" data-id="${j.id}">Open full details ${I.arrow}</button></div>`
      : `<div class="sum"><div class="sum-top"><h3>${esc(j.title)}</h3><p>${esc(j.company)}</p></div>${ins}</div>`}</div>`;
}

/* ---------- D5 drawer ---------- */
function openDrawer(idx){
  S.d5idx=idx; const j=jobs[idx];
  let locked=false;
  if(!S.premium){ if(!S.quota.has(j.id)){ if(S.quota.size<FREE_LIMIT) S.quota.add(j.id); else locked=true; } }
  const used=Math.min(S.quota.size,FREE_LIMIT);
  let dr=document.querySelector('.drawer');
  if(!dr){
    const sc=document.createElement('div');sc.className='drawer-scrim';sc.dataset.overlay='drawer';sc.addEventListener('click',closeOverlays);
    dr=document.createElement('aside');dr.className='drawer';dr.dataset.overlay='drawer';dr.setAttribute('role','dialog');dr.setAttribute('aria-modal','true');
    document.body.append(sc,dr);
  }
  dr.setAttribute('aria-label',j.title+' quick look');
  dr.innerHTML=`<div class="d-head">
      <span class="pos">Job ${idx+1} of ${jobs.length}</span>
      <button class="x" data-act="d5nav" data-dir="-1" aria-label="Previous job" ${idx===0?'disabled style="opacity:.4"':''}>${I.left}</button>
      <button class="x" data-act="d5nav" data-dir="1" aria-label="Next job" ${idx===jobs.length-1?'disabled style="opacity:.4"':''}>${I.right}</button>
      <button class="x" data-act="close" aria-label="Close">${I.x}</button></div>
    <div class="d-body">
      ${S.premium?'':`<div class="quota" style="margin-bottom:14px"><div class="dots">${Array.from({length:FREE_LIMIT},(_,i)=>`<i class="${i<used?'on':''}"></i>`).join('')}</div>Free AI summaries today: ${used}/${FREE_LIMIT}</div>`}
      ${summaryHTML(j,{locked})}
    </div>
    <div class="d-foot"><button class="btn" data-act="detail" data-id="${j.id}">See full details ${I.right}</button></div>`;
  const meter=document.querySelector('.meter'); if(meter) meter.firstChild.textContent=`Free AI summaries used today: ${used} / ${FREE_LIMIT} `;
  dr.querySelector('[data-act="close"]').focus();
}

function closeOverlays(){
  document.querySelectorAll('[data-overlay]').forEach(n=>n.remove());
  hidePop();
}

/* ---------- details page ---------- */
function renderDetail(id){
  const j=byId(id); S.viewed.add(id);
  app.innerHTML=`<div class="wrap detail">
    <button class="back" data-act="back">${I.left} Back to jobs (${DESIGNS.find(d=>d.key===S.design).short})</button>
    <section class="d-hero">
      <div style="flex:1;min-width:0">
        <span class="lvl">${esc(j.level)}</span>
        <div class="dep" style="justify-content:flex-start">${I.users}<span>${DEP}</span></div>
        <h1>${esc(j.title)}</h1>
        <div class="d-meta"><span>${I.pin}${esc(j.loc)}</span><span>${I.pound}<strong>${esc(j.salary.replace('£',''))}</strong></span><span>Posted: ${esc(j.postedDate)}</span><span class="exp">Closes: <strong>${esc(j.closing)}</strong></span></div>
        <p class="fine">*The recruiter reserves the right to <strong>close this job post earlier</strong> than indicated</p>
        <div class="d-tools">
          <button class="btn sm" data-act="${S.premium?'tool':'upgrade'}">${S.premium?'':I.lock} Generate Supporting Statement</button>
          <button class="btn sm" data-act="${S.premium?'tool':'upgrade'}">${S.premium?'':I.lock} Tailor My CV to This Job</button>
        </div>
      </div>
      <div class="apply"><button class="btn" data-act="apply">Apply Now ${I.arrow}</button><small>*External job post</small></div>
    </section>
    <div class="d-cols">
      <article class="d-main">
        <h2>Job Overview</h2>
        <p>${markKey(j.ai,j.id)}</p>
        <p>The post holder will work as part of a team and also independently, making sure a high level of quality is delivered. Staff work alongside colleagues, including senior staff, and are expected to <strong>manage their own workload</strong>.</p>
        <section class="visa">
          <h2>${I.shield} Visa &amp; sponsorship</h2>
          <div class="visa-grid">
            <div><span>Sponsorship</span><strong>${esc(j.spons)}</strong></div>
            <div><span>Visa route</span><strong>${esc(j.route)}</strong></div>
            <div><span>Who can apply</span><strong>${j.area==='Overseas'?'Overseas + UK applicants':'Only candidates already in the UK'}</strong></div>
            <div><span>Dependants</span><strong>Allowed (higher-skilled roles)</strong></div>
          </div>
        </section>
        <h2 style="margin-top:18px">Requirements</h2>
        <ul class="reqs" style="margin-bottom:16px">${j.reqs.map(r=>`<li><span>${markKey(r,j.id)}</span></li>`).join('')}</ul>
        <h2>How to apply</h2>
        <p>Applications must be <strong>submitted online</strong>. Candidates should upload an <strong>up-to-date CV</strong> with full employment, voluntary work and education history, with <strong>reasons for any gaps</strong>, plus supporting information showing how they meet the key criteria.</p>
        <p>Appointment is subject to <strong>satisfactory pre-employment checks</strong>. Closing date: <strong>${esc(j.closing)}</strong>.</p>
      </article>
      <aside class="d-side">
        ${S.premium?premiumReal(j):lockBox('Your CV match for this job','Premium shows your match score and the skills you are missing.')}
        <div class="disc"><h3>Important Disclaimer</h3><p>JobVisaHunt will <strong>never ask you to pay for a Certificate of Sponsorship (CoS)</strong>. Genuine employers also <strong>do not charge fees</strong> before offering a job or CoS. Report suspicious requests to <strong>support@jobvisahunt.com</strong>.</p></div>
        <div class="comp"><h3>Company Details</h3><p><strong style="color:var(--ink)">${esc(j.company)}</strong></p><p>${esc(j.loc)}</p>${j.cos?`<p>CoS issued in 2025: <strong style="color:var(--ink)">${j.cos}</strong></p>`:''}</div>
      </aside>
    </div></div>`;
  scrollTo({top:0});
}

/* ---------- routing & render ---------- */
function render(){
  closeOverlays(); renderTabs();
  if(S.view==='detail') renderDetail(S.detailId); else renderList();
}
function setHash(){try{history.replaceState(null,'','#'+S.design);}catch(e){location.hash=S.design;}}
function fromHash(){const h=location.hash.slice(1); if(DESIGNS.some(d=>d.key===h)) S.design=h;}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-act],[data-design]');
  // D2 tap-to-preview on touch devices
  if(!t && S.design==='d2' && S.view==='list' && !canHover()){
    const card=e.target.closest('.card[data-hover]');
    if(!card){hidePop();return;}
    if(popEl?.contains(e.target))return;
    if(popFor===card)hidePop(); else showPop(card);
    return;
  }
  if(!t)return;
  if(t.dataset.design){S.design=t.dataset.design;S.view='list';S.d3open=null;setHash();render();scrollTo({top:0});return;}
  const id=t.dataset.id, a=t.dataset.act;
  switch(a){
    case 'd1open': openModal(id); break;
    case 'detail': closeOverlays(); S.view='detail'; S.detailId=id; render(); break;
    case 'back': S.view='list'; render(); break;
    case 'close': closeOverlays(); break;
    case 'upgrade': toast('In the real app this opens the Pricing page'); break;
    case 'tool': toast('Premium tool would open here'); break;
    case 'apply': toast('Opens the employer’s site in a new tab'); break;
    case 'd3toggle': S.d3open = S.d3open===id?null:id; renderList(); break;
    case 'd3close': S.d3open=null; renderList(); break;
    case 'd4sel':
      S.d4sel=id;
      if(matchMedia('(max-width:900px)').matches){openModal(id,'Job summary');}
      document.querySelectorAll('.row').forEach(r=>r.classList.toggle('active',r.dataset.id===id));
      const p=document.getElementById('d4panel'); if(p){p.innerHTML=d4panelHTML();p.scrollTop=0;}
      break;
    case 'd4tab': S.d4tab=t.dataset.tab; document.getElementById('d4panel').innerHTML=d4panelHTML(); break;
    case 'd5open': openDrawer(+t.dataset.idx); break;
    case 'd5nav': openDrawer(Math.max(0,Math.min(jobs.length-1,S.d5idx+ +t.dataset.dir))); break;
    case 'resetQuota': S.quota.clear(); renderList(); toast('Free summary count reset'); break;
  }
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeOverlays();}
  if(document.querySelector('.drawer') && (e.key==='ArrowRight'||e.key==='ArrowLeft')){
    openDrawer(Math.max(0,Math.min(jobs.length-1,S.d5idx+(e.key==='ArrowRight'?1:-1))));
  }
});
function setPlan(p){S.premium=p;try{localStorage.setItem('jvh-premium',p?'1':'0');}catch(e){}
  const dr=document.querySelector('.drawer'); render(); if(dr&&S.d5idx!=null&&S.view==='list')openDrawer(S.d5idx);
  toast(p?'Showing Premium user view':'Showing Free user view');}
document.getElementById('planFree').onclick=()=>setPlan(false);
document.getElementById('planPrem').onclick=()=>setPlan(true);
addEventListener('hashchange',()=>{fromHash();S.view='list';render();});

fromHash(); render();
