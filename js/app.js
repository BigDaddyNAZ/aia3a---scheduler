// AIA 3A Girls Basketball · Region Alignment & Schedule Tool
// Seton Catholic Preparatory Athletic Department

// Schedule data loaded from data/schedules.json



// ═══════════════ DATA ═══════════════════════════════════════════════════════

const REGIONS = {
  metro:  {name:"Greater Phoenix",     color:"#185FA5", light:"#E6F1FB"},
  east:   {name:"East Valley/Pinal", color:"#0F6E56", light:"#E1F5EE"},
  rim:    {name:"Rim Country",       color:"#993C1D", light:"#FAECE7"},
  navajo: {name:"Navajo / North",    color:"#534AB7", light:"#EEEDFE"},
  south:  {name:"Tucson / South",    color:"#3B6D11", light:"#EAF3DE"},
  west:   {name:"West / Yuma",       color:"#854F0B", light:"#FAEEDA"},
};

const SCHOOLS = [
  // Greater Phoenix 3A
  {n:"Seton Catholic",   city:"Chandler",      lat:33.306,lng:-111.841,r:"metro",conf:"3A",orig:true},
  {n:"Gilbert Christian",city:"Gilbert",       lat:33.352,lng:-111.789,r:"metro",conf:"3A",orig:true},
  {n:"Valley Christian", city:"Chandler",      lat:33.282,lng:-111.886,r:"metro",conf:"3A",orig:true},
  {n:"NW Christian",     city:"Phoenix",       lat:33.639,lng:-112.145,r:"metro",conf:"3A",orig:true},
  {n:"ALA - Radiance",   city:"Gilbert",       lat:33.350,lng:-111.750,r:"east",conf:"3A",orig:true},
  {n:"ALA - Vistancia",  city:"Peoria",        lat:33.733,lng:-112.316,r:"metro",conf:"3A",orig:true},
  {n:"Highland Prep",    city:"Phoenix",       lat:33.570,lng:-112.080,r:"metro",conf:"3A",orig:true},
  {n:"Madison Highland", city:"Phoenix",       lat:33.514,lng:-112.012,r:"metro",conf:"3A",orig:true},
  // East Valley/Pinal 3A
  {n:"ALA - Ironwood",   city:"Queen Creek",   lat:33.248,lng:-111.622,r:"east",conf:"3A",orig:true},
  {n:"Apache Junction",  city:"Apache Jct",    lat:33.415,lng:-111.549,r:"east",conf:"3A",orig:true},
  {n:"Benjamin Franklin",city:"Queen Creek",   lat:33.252,lng:-111.614,r:"east",conf:"3A",orig:true},
  {n:"San Tan Foothills",city:"San Tan Valley",lat:33.211,lng:-111.665,r:"east",conf:"3A",orig:true},
  {n:"Heritage Gateway", city:"San Tan Valley",lat:33.195,lng:-111.605,r:"east",conf:"3A",orig:true},
  {n:"Heritage Maricopa",city:"Maricopa",      lat:33.060,lng:-112.047,r:"metro",conf:"3A",orig:true},
  {n:"Coolidge",         city:"Coolidge",      lat:32.975,lng:-111.517,r:"east",conf:"3A",orig:true},
  {n:"Florence",         city:"Florence",      lat:33.031,lng:-111.387,r:"east",conf:"3A",orig:true},
  {n:"Highland Prep West",city:"Goodyear",     lat:33.435,lng:-112.358,r:"east",conf:"3A",orig:true},
  {n:"St. John Paul II", city:"Goodyear",      lat:33.448,lng:-112.367,r:"metro",conf:"3A",orig:true},
  {n:"Odyssey Institute",city:"Buckeye",       lat:33.460,lng:-112.583,r:"metro",conf:"3A",orig:true},
  // Rim Country 3A
  {n:"Payson",           city:"Payson",        lat:34.231,lng:-111.325,r:"rim",conf:"3A",orig:true},
  {n:"Blue Ridge",       city:"Lakeside",      lat:34.183,lng:-109.983,r:"rim",conf:"3A",orig:true},
  {n:"Show Low",         city:"Show Low",      lat:34.254,lng:-110.029,r:"rim",conf:"3A",orig:true},
  {n:"Snowflake",        city:"Snowflake",     lat:34.513,lng:-110.079,r:"rim",conf:"3A",orig:true},
  {n:"Alchesay",         city:"Whiteriver",    lat:33.831,lng:-109.969,r:"rim",conf:"3A",orig:true},
  {n:"Holbrook",         city:"Holbrook",      lat:34.902,lng:-110.159,r:"rim",conf:"3A",orig:true},
  {n:"Winslow",          city:"Winslow",       lat:35.024,lng:-110.697,r:"rim",conf:"3A",orig:true},
  // Navajo/North 3A original
  {n:"Chinle",           city:"Chinle",        lat:36.154,lng:-109.553,r:"navajo",conf:"3A",orig:true},
  {n:"Ganado",           city:"Ganado",        lat:35.704,lng:-109.535,r:"navajo",conf:"3A",orig:true},
  {n:"Monument Valley",  city:"Kayenta",       lat:36.723,lng:-110.256,r:"navajo",conf:"3A",orig:true},
  {n:"Page",             city:"Page",          lat:36.914,lng:-111.458,r:"navajo",conf:"3A",orig:true},
  {n:"Tuba City",        city:"Tuba City",     lat:36.134,lng:-111.238,r:"navajo",conf:"3A",orig:true},
  {n:"Window Rock",      city:"Window Rock",   lat:35.666,lng:-109.063,r:"navajo",conf:"3A",orig:true},
  // Navajo/North EXPANDED
  {n:"Many Farms",       city:"Many Farms",    lat:36.287,lng:-109.597,r:"navajo",conf:"2A",orig:false,addNote:"10 mi from Chinle"},
  {n:"Pinon",            city:"Pinon",         lat:36.497,lng:-110.223,r:"navajo",conf:"2A",orig:false,addNote:"16 mi from Monument Valley"},
  {n:"Hopi",             city:"Keams Canyon",  lat:35.843,lng:-110.461,r:"navajo",conf:"2A",orig:false,addNote:"48 mi from Tuba City"},
  {n:"Valley/Sanders",   city:"Sanders",       lat:35.217,lng:-109.322,r:"navajo",conf:"2A",orig:false,addNote:"34 mi from Window Rock"},
  {n:"Coconino",         city:"Flagstaff",     lat:35.197,lng:-111.613,r:"rim",conf:"4A",orig:false,addNote:"53 mi from Winslow · 85 mi from Holbrook"},
  {n:"Flagstaff",        city:"Flagstaff",     lat:35.198,lng:-111.629,r:"rim",conf:"4A",orig:false,addNote:"54 mi from Winslow · 86 mi from Holbrook"},
  // Tucson/South 3A
  {n:"Amphitheater",     city:"Tucson",        lat:32.281,lng:-110.987,r:"south",conf:"3A",orig:true},
  {n:"Andrada Poly",     city:"Tucson",        lat:32.082,lng:-110.760,r:"south",conf:"3A",orig:true},
  {n:"Empire",           city:"Tucson",        lat:32.045,lng:-110.840,r:"south",conf:"3A",orig:true},
  {n:"Palo Verde",       city:"Tucson",        lat:32.223,lng:-111.011,r:"south",conf:"3A",orig:true},
  {n:"Pusch Ridge",      city:"Oro Valley",    lat:32.440,lng:-110.980,r:"south",conf:"3A",orig:true},
  {n:"Sabino",           city:"Tucson",        lat:32.280,lng:-110.801,r:"south",conf:"3A",orig:true},
  {n:"Safford",          city:"Safford",       lat:32.834,lng:-109.707,r:"south",conf:"3A",orig:true},
  {n:"Tanque Verde",     city:"Tucson",        lat:32.231,lng:-110.726,r:"south",conf:"3A",orig:true},
  {n:"Thatcher",         city:"Thatcher",      lat:32.849,lng:-109.760,r:"south",conf:"3A",orig:true},
  // West/Yuma 3A original
  {n:"Yuma Catholic",    city:"Yuma",          lat:32.692,lng:-114.628,r:"west",conf:"3A",orig:true,r_split:"west_a"},
  {n:"Yuma",             city:"Yuma",          lat:32.725,lng:-114.624,r:"west",conf:"3A",orig:true,r_split:"west_a"},
  {n:"Kingman",          city:"Kingman",       lat:35.189,lng:-114.053,r:"west",conf:"3A",orig:true,r_split:"west_b"},
  {n:"Mohave",           city:"Bullhead City", lat:35.148,lng:-114.568,r:"west",conf:"3A",orig:true,r_split:"west_b"},
  {n:"River Valley",     city:"Mohave Valley", lat:35.000,lng:-114.620,r:"west",conf:"3A",orig:true,r_split:"west_b"},
  {n:"Chino Valley",     city:"Chino Valley",  lat:34.757,lng:-112.453,r:"west",conf:"3A",orig:true,r_split:"west_b"},
  {n:"Tonopah Valley",   city:"Tonopah",       lat:33.500,lng:-113.000,r:"west",conf:"3A",orig:true,r_split:"west_a"},
  // West/Yuma EXPANDED
  {n:"Kofa",             city:"Yuma",          lat:32.686,lng:-114.577,r:"west",conf:"4A",orig:false,addNote:"3 mi from Yuma Catholic",r_split:"west_a"},
  {n:"Somerton",         city:"Somerton",      lat:32.597,lng:-114.706,r:"west",conf:"4A",orig:false,addNote:"8 mi from Yuma Catholic",r_split:"west_a"},
  {n:"Lee Williams",     city:"Kingman",       lat:35.189,lng:-114.018,r:"west",conf:"4A",orig:false,addNote:"2 mi from Kingman",r_split:"west_b"},
  {n:"Kingman Academy",  city:"Kingman",       lat:35.190,lng:-114.035,r:"west",conf:"2A",orig:false,addNote:"1 mi from Kingman",r_split:"west_b"},
  {n:"Mohave Accel.",    city:"Bullhead City", lat:35.140,lng:-114.590,r:"west",conf:"2A",orig:false,addNote:"2 mi from Mohave",r_split:"west_b"},
  {n:"Parker",           city:"Parker",        lat:34.146,lng:-114.289,r:"west",conf:"2A",orig:false,addNote:"62 mi from River Valley",r_split:"west_a"},
  {n:"Prescott",         city:"Prescott",      lat:34.540,lng:-112.468,r:"west",conf:"4A",orig:false,addNote:"15 mi from Chino Valley",r_split:"west_b"},
  {n:"Bradshaw Mtn",     city:"Prescott Valley",lat:34.522,lng:-112.495,r:"west",conf:"4A",orig:false,addNote:"16 mi from Chino Valley",r_split:"west_b"},
];

// ── Inline schedule data (Greater Phoenix + Rim Country) ──
// Schedules will be loaded from JSON at bottom of script
// ═══════════════ MAP ═══════════════════════════════════════════════════════

const AZ_PATH = "M 55 18 L 500 18 L 500 75 L 540 75 L 540 455 L 215 455 L 193 430 L 170 410 L 153 393 L 55 393 Z";

function ll(lat,lng){
  const x=((lng-(-115.0))/((-108.7)-(-115.0)))*530+45;
  const y=((37.1-lat)/(37.1-31.2))*420+22;
  return [x,y];
}

let mapView='all';

function setMapView(v){
  mapView=v;
  document.querySelectorAll('#page-map .pill').forEach(b=>b.classList.remove('on'));
  event.target.classList.add('on');
  renderMap();
}

function renderMap(){
  const svg=document.getElementById('azmap');
  svg.innerHTML='';
  const ns='http://www.w3.org/2000/svg';

  // AZ background
  const az=document.createElementNS(ns,'path');
  az.setAttribute('d',AZ_PATH);
  az.setAttribute('fill','#d9d3c4');
  az.setAttribute('stroke','#b0a898');
  az.setAttribute('stroke-width','1');
  svg.appendChild(az);

  let visible=SCHOOLS;
  let useColor=s=>REGIONS[s.r];
  if(mapView==='orig') visible=SCHOOLS.filter(s=>s.orig&&s.conf==='3A');
  if(mapView==='rim_exp') visible=SCHOOLS.filter(s=>s.r==='rim');
  if(mapView==='west') visible=SCHOOLS.filter(s=>s.r==='west');
  if(mapView==='yuma_a'){visible=SCHOOLS.filter(s=>s.r_split==='west_a');useColor=s=>REGIONS[s.r_split]||REGIONS[s.r];}
  if(mapView==='yuma_b'){visible=SCHOOLS.filter(s=>s.r_split==='west_b');useColor=s=>REGIONS[s.r_split]||REGIONS[s.r];}
  if(mapView==='navajo') visible=SCHOOLS.filter(s=>s.r==='navajo');

  visible.forEach(s=>{
    const [x,y]=ll(s.lat,s.lng);
    const rc=useColor(s)||REGIONS[s.r];
    const g=document.createElementNS(ns,'g');
    g.setAttribute('transform',`translate(${x},${y})`);
    g.style.cursor='pointer';

    if(!s.orig){
      const ring=document.createElementNS(ns,'circle');
      ring.setAttribute('r','10');
      ring.setAttribute('fill','none');
      ring.setAttribute('stroke',rc.color);
      ring.setAttribute('stroke-width','1.5');
      ring.setAttribute('stroke-dasharray','3,2');
      ring.setAttribute('opacity','0.7');
      g.appendChild(ring);
    }

    if(s.conf==='3A'){
      const c=document.createElementNS(ns,'circle');
      c.setAttribute('r','6');
      c.setAttribute('fill',rc.color);
      c.setAttribute('stroke','white');
      c.setAttribute('stroke-width','1.5');
      g.appendChild(c);
    } else if(s.conf==='4A'){
      const p=document.createElementNS(ns,'polygon');
      p.setAttribute('points','0,-8 7,0 0,8 -7,0');
      p.setAttribute('fill',rc.color);
      p.setAttribute('stroke','white');
      p.setAttribute('stroke-width','1.5');
      g.appendChild(p);
    } else {
      const r=document.createElementNS(ns,'rect');
      r.setAttribute('x','-5');r.setAttribute('y','-5');
      r.setAttribute('width','10');r.setAttribute('height','10');
      r.setAttribute('fill',rc.color);
      r.setAttribute('stroke','white');
      r.setAttribute('stroke-width','1.5');
      r.setAttribute('rx','1');
      g.appendChild(r);
    }

    g.addEventListener('mouseover',e=>showMapTip(e,s,rc));
    g.addEventListener('mouseout',hideMapTip);
    g.addEventListener('click',()=>{
      if(SCHED_DATA[s.n]||SCHED_DATA[s.n+' Prep']){
        const k=SCHED_DATA[s.n]?s.n:s.n+' Prep';
        showPage('schedules');
        setTimeout(()=>loadSchoolSchedule(k),100);
      }
    });
    svg.appendChild(g);
  });

  renderRegionList();
  updateMapNote();
}

function updateMapNote(){
  const notes={
    all:'All 8 proposed regions. Greater Phoenix (10 schools, 49 mi max) · East Valley/Pinal (9 schools, 63 mi max). Circles = 3A, diamonds = 4A, squares = 2A. Hover for details.',
    orig:'Original 3A-only alignment — 48 schools, 5 regions. The isolation of Yuma/Yuma Catholic and the 6-school Navajo/North gap are clearly visible.',
    rim_exp:'Rim Country with Flagstaff & Coconino (4A Grand Canyon, 1 mi apart). Winslow to Flagstaff = 54 mi. Alchesay to Flagstaff = 133 mi is the longest in-region trip.',
    west:'Full West/Yuma expanded — all proposed 2A and 4A additions. Kofa & Somerton solve Yuma isolation. Lee Williams solves Kingman. Prescott & Bradshaw Mtn anchor Chino Valley.',
    yuma_a:'Region A — Yuma / Colorado River. 6 schools. 110 mi proximity threshold: opponents within 110 mi play H+A (2 games), farther play once. Each 3A school gets 10 region games.',
    yuma_b:'Region B — Kingman / Prescott Corridor. 9 schools. Kingman / Mohave / River Valley within 35 mi of each other (H+A = 13 region games). Chino Valley plays cross-cluster opponents once each direction (10 region games).',
    navajo:'Navajo/North expanded: Many Farms (10 mi from Chinle), Pinon (16 mi from Monument Valley), Hopi (48 mi from Tuba City). Note: Flagstaff & Coconino moved to Rim Country region.',
  };
  const nb=document.getElementById('map-note-bar');
  if(nb) nb.textContent=notes[mapView]||notes.all;
}

function showMapTip(e,s,rc){
  const tip=document.getElementById('map-tooltip');
  const svgEl=document.getElementById('azmap');
  const rect=svgEl.getBoundingClientRect();
  const [x,y]=ll(s.lat,s.lng);
  const sx=rect.width/620, sy=rect.height/520;
  document.getElementById('tt-name').textContent=s.n;
  document.getElementById('tt-meta').innerHTML=`${rc.name} &middot; ${s.conf}${!s.orig?' &middot; <em>Proposed addition</em>':''}${s.addNote?'<br>'+s.addNote:''}`;
  tip.style.left=Math.min(Math.max(0,x*sx-70),rect.width-180)+'px';
  tip.style.top=Math.max(0,y*sy-52)+'px';
  tip.style.display='block';
}
function hideMapTip(){
  document.getElementById('map-tooltip').style.display='none';
}

function renderRegionList(){
  const el=document.getElementById('region-list');
  const counts={};
  const isSplit=['yuma_a','yuma_b'].includes(mapView);
  SCHOOLS.filter(s=>mapView==='orig'?s.orig&&s.conf==='3A':true).forEach(s=>{
    const key=isSplit&&s.r_split?s.r_split:s.r;
    counts[key]=(counts[key]||0)+1;
  });
  const baseRegs={metro:REGIONS.metro,east:REGIONS.east,rim:REGIONS.rim,
    navajo:REGIONS.navajo,south:REGIONS.south,west:REGIONS.west};
  const splitRegs={west_a:REGIONS.west_a,west_b:REGIONS.west_b};
  const showRegs=isSplit?splitRegs:baseRegs;
  el.innerHTML=Object.entries(showRegs).map(([k,r])=>`
    <div class="stat-row">
      <span class="stat-label" style="display:flex;align-items:center;gap:7px">
        <span style="width:8px;height:8px;border-radius:50%;background:${r.color};display:inline-block;flex-shrink:0"></span>
        ${r.name}
      </span>
      <span class="stat-val">${counts[k]||0} schools</span>
    </div>
  `).join('');
}

// ═══════════════ REGIONS PAGE ══════════════════════════════════════════════

function renderRegionsPage(){
  const grid=document.getElementById('regions-grid');
  const byRegion={};
  SCHOOLS.forEach(s=>{ byRegion[s.r]=byRegion[s.r]||[]; byRegion[s.r].push(s); });

  const flags={
    navajo:"⚠ Only 6 original 3A schools — H+A round-robin yields 10 region games. Expanded version adds 6 schools (4 × 2A, 2 × 4A) for a 12-school region.",
    west:"⚠ Yuma ↔ Chino Valley = 190 mi within region. Yuma schools have no nearby opponents in original alignment. See split proposal: Yuma / Colorado River + Kingman / Prescott.",
    metro:"ℹ Greater Phoenix: 10 schools across the valley (Chandler → Buckeye → Maricopa). All within 49 mi. Includes St. John Paul II, Odyssey, and Heritage Maricopa from the west/south corridor.",
    rim:"ℹ Expanded to include Coconino & Flagstaff (4A Grand Canyon). Both schools are 1 mi apart in Flagstaff — 54 mi from Winslow, 85–86 mi from Holbrook."
  };

  grid.innerHTML=Object.entries(REGIONS).map(([k,r])=>{
    const schools=byRegion[k]||[];
    const orig=schools.filter(s=>s.orig);
    const added=schools.filter(s=>!s.orig);
    return `
    <div class="region-card">
      <div class="region-card-hdr" style="background:${r.color}">
        <h3>${r.name}</h3>
        <span style="font-size:12px;opacity:.8;color:white">${orig.length} 3A${added.length?` + ${added.length} proposed`:''}</span>
      </div>
      <div class="region-card-body">
        <div>${orig.map(s=>`<span class="school-chip" style="background:${r.light};color:${r.color};border-color:${r.color}22" onclick="jumpToSchedule('${s.n}')">${s.n}<span class="chip-conf">3A</span></span>`).join('')}</div>
        ${added.length?`<div style="margin-top:6px">${added.map(s=>`<span class="school-chip new" style="background:white;color:${r.color};border-color:${r.color}" title="${s.addNote||''}">${s.n}<span class="chip-conf">${s.conf}</span></span>`).join('')}</div>`:''}
        ${flags[k]?`<div class="region-note flag-note">${flags[k]}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

function jumpToSchedule(name){
  showPage('schedules');
  setTimeout(()=>loadSchoolSchedule(name),150);
}

// ═══════════════ SCHEDULES PAGE ════════════════════════════════════════════

function renderSchoolList(){
  const regionDefs=[
    {id:"slp-gp", rname:"Greater Phoenix",         color:"#185FA5"},
    {id:"slp-ev", rname:"East Valley / Pinal",      color:"#0F6E56"},
    {id:"slp-rc", rname:"Rim Country",              color:"#993C1D"},
    {id:"slp-nn", rname:"Navajo / North",           color:"#534AB7"},
    {id:"slp-ts", rname:"Tucson / South",           color:"#3B6D11"},
    {id:"slp-yc", rname:"Yuma / Colorado River",    color:"#1A6B8A"},
    {id:"slp-kp", rname:"Kingman / Prescott",       color:"#6B3A0B"},
  ];
  regionDefs.forEach(({id,rname,color})=>{
    const el=document.getElementById(id);
    if(!el) return;
    const schools=Object.keys(SCHEDULES)
      .filter(s=>SCHEDULES[s]&&SCHEDULES[s].region===rname)
      .sort((a,b)=>a.localeCompare(b));
    el.innerHTML=schools.map(n=>{
      const sid='slp-'+n.replace(/[^a-zA-Z0-9]/g,'_');
      return `<div class="slp-school" id="${sid}" onclick="loadSchoolSchedule(${JSON.stringify(n)})">
        <span class="slp-dot" style="background:${color}"></span>
        <span>${n}</span>
      </div>`;
    }).join('');
  });
}

const TYPE_LABELS={
  rgn:'Region', long:'Away Long-Haul 1', long2:'Away Long-Haul 2',
  long_home:'Home Long-Haul 1', long_home2:'Home Long-Haul 2', near:'Non-Rgn Nearby'
};
const TYPE_CLASS={
  rgn:'t-rgn', long:'t-long', long2:'t-long2',
  long_home:'t-lh', long_home2:'t-lh2', near:'t-near'
};
const FIRST_HALF=["Tue, Nov 18","Fri, Nov 20","Wed, Nov 25","Mon, Nov 30","Tue, Dec 02","Fri, Dec 05","Tue, Dec 09","Fri, Dec 12","Thu, Dec 17"];

let activeSchool=null;

function loadSchoolSchedule(name){
  activeSchool=name;
  document.querySelectorAll('.slp-school').forEach(el=>el.classList.remove('active'));
  const el=document.getElementById('slp-'+name.replace(/[^a-zA-Z0-9]/g,'_'));
  if(el){el.classList.add('active');el.scrollIntoView({block:'nearest'});}

  const data=SCHEDULES[name];
  const meta=SCHEDULES[name]||SCHED_DATA[name]||{};
  if(!data||!data.games||!data.games.length){
    document.getElementById('schedule-content').innerHTML=`<div class="panel" style="padding:2rem;text-align:center"><p style="color:var(--text3)">Schedule not yet available for ${name}</p></div>`;
    return;
  }

  const games=data.games;
  const rgn=games.filter(g=>g.type==='rgn').length;
  const awayL=games.filter(g=>['long','long2'].includes(g.type)).length;
  const homeL=games.filter(g=>['long_home','long_home2'].includes(g.type)).length;
  const nearby=games.filter(g=>g.type==='near').length;
  const h=games.filter(g=>g.ha==='H').length;
  const a=games.filter(g=>g.ha==='A').length;
  const nrFH=games.filter(g=>g.type!=='rgn'&&FIRST_HALF.includes(g.date)).length;
  const maxDist=Math.max(...games.map(g=>g.dist));

  let rows=''; let lastWk=''; let breakDone=false;
  games.forEach((g,i)=>{
    if(g.wk==='W7'&&lastWk==='W5'&&!breakDone){
      breakDone=true;
      rows+=`<tr class="break-row"><td colspan="7">— Holiday Break: December 18 – January 1 — No Games —</td></tr>`;
    }
    lastWk=g.wk;
    const oppDisplay=g.ha==='A'?`@ ${g.opp}`:g.opp;
    const isLong=['long','long2','long_home','long_home2'].includes(g.type);
    rows+=`<tr>
      <td style="color:var(--text3);font-family:'DM Mono',monospace;font-size:.78rem">${g.g}</td>
      <td style="font-weight:500;white-space:nowrap;font-size:.82rem">${g.date}</td>
      <td><span class="ha-${g.ha.toLowerCase()}">${g.ha}</span></td>
      <td style="${isLong?'font-weight:500':''}${g.type==='long'||g.type==='long2'?';color:#712B13':g.type==='long_home'||g.type==='long_home2'?';color:#3C3489':''}">${oppDisplay}</td>
      <td><span class="game-type ${TYPE_CLASS[g.type]||'t-near'}">${TYPE_LABELS[g.type]||g.type}</span></td>
      <td class="dist-cell">${g.dist} mi</td>
      <td class="note-cell">${g.notes||''}</td>
    </tr>`;
  });

  document.getElementById('schedule-content').innerHTML=`
    <div class="schedule-card">
      <div class="sc-hdr" style="border-left:4px solid ${meta.color}">
        <h2>${name}</h2>
        <div class="meta">${meta.city}, AZ &nbsp;·&nbsp; ${meta.region} Region &nbsp;·&nbsp; 2026–27 Season</div>
      </div>
      <div class="sc-stats">
        <div class="sc-stat"><div class="n">${games.length}</div><div class="l">Total games</div></div>
        <div class="sc-stat"><div class="n" style="color:${meta.color}">${rgn}</div><div class="l">Region</div></div>
        <div class="sc-stat"><div class="n" style="color:#8B2500">${awayL}</div><div class="l">Away L/H</div></div>
        <div class="sc-stat"><div class="n" style="color:#3C3489">${homeL}</div><div class="l">Home L/H</div></div>
        <div class="sc-stat"><div class="n" style="color:#27500A">${nearby}</div><div class="l">Nearby</div></div>
        <div class="sc-stat"><div class="n">${h}/${a}</div><div class="l">H/A</div></div>
        <div class="sc-stat"><div class="n">${nrFH}/${games.length-rgn-nrFH}</div><div class="l">NR 1st/2nd</div></div>
        <div class="sc-stat"><div class="n" style="font-size:1rem">${maxDist}</div><div class="l">Max mi</div></div>
      </div>
      <div style="overflow-x:auto">
        <table class="sched-table">
          <thead><tr><th>#</th><th>Date</th><th>H/A</th><th>Opponent</th><th>Type</th><th>Dist.</th><th>Notes</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="contract-note" style="margin:.5rem 1.25rem .75rem;padding:.65rem .85rem;background:#EAF3DE;border-radius:7px;border-left:3px solid #3B6D11;font-size:.8rem;color:#1A4008">
      <strong>Boys / Girls coordination:</strong> When girls play at home, the boys program travels — and vice versa. This schedule is built for Girls Basketball; the Boys program mirrors H/A assignments on the same dates.
    </div>
    <div class="contract-note">
        <strong>2-Year Contract:</strong> All long-haul games (home and away) are on 2-year rotating contracts.
        Home games this season flip to away in 2027–28 and vice versa. Nearby non-region games reset annually.
      </div>
    </div>`;
}

// ═══════════════ NAVIGATION ════════════════════════════════════════════════

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t=>{
    if(t.textContent.toLowerCase().includes(id.toLowerCase().slice(0,4))) t.classList.add('active');
  });
}

// ═══════════════ SCHEDULE DATA (embedded) ══════════════════════════════════

// This section contains the full 18-game schedules for Greater Phoenix + Rim Country.
// Additional regions will be added as they are finalized.



// Merge embedded + additional regions
// ═══════════════ INIT ══════════════════════════════════════════════════════

function initApp() {
  renderMap();
  renderRegionsPage();
  renderSchoolList();
}
// School location data loaded from data/schools.js