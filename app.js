// ===== Сабақ деректері (жаңа сабақ қосу үшін массивке бір блок қосыңыз) =====
// tk — тапсырмалар [сұрақ,[жауаптар],дұрыс индекс], ts — қорытынды тест
const YT={}; // YouTube қосу: {1:"VIDEO_ID"}; болмаса videos/lesson-N.mp4 алынады
const L=[
{i:"▦",t:"Мәтіндік процессордағы кестелер",g:"Кесте құру және оның элементтерін дұрыс пішімдеу.",k:"Кесте — ақпаратты жолдар мен бағандарға реттеп орналастыру тәсілі.",ex:"Жол көлденең, баған тік орналасады, ал қиылысқан жері — ұяшық. Мысалы, сабақ кестесі.",
th:["Мәтіндік процессорда кесте арқылы сабақ кестесін, тізімді, жоспарды жасауға болады.","Ұяшықтарды біріктіруге, мәтінді туралауға, шекара мен фонды өзгертуге болады."],
tk:[["Кестедегі көлденең орналасқан ұяшықтар тобы қалай аталады?",["Жол","Баған","Парақ","Файл"],0],["Жол мен баған қиылысқан жер қалай аталады?",["Диаграмма","Ұяшық","Шекара","Қаріп"],1]],
ts:[["Тік орналасқан ұяшықтар тобы қалай аталады?",["Баған","Жол","Диапазон","Формула"],0],["Екі ұяшықты бір үлкен ұяшық ету әрекеті?",["Сұрыптау","Көшіру","Біріктіру","Жою"],2],["Кесте не үшін қажет?",["Ақпаратты реттеп орналастыру","Файлды жабу","Интернетке қосылу","Құпиясөз қою"],0],["Кестеде нені өзгертуге болады?",["Тек файл атауын","Шекара мен фонды","Тек принтерді","Ештеңені"],1]]},
{i:"▤",t:"Электронды кесте элементтерін пішімдеу",g:"Электронды кесте элементтерін пішімдей алу.",k:"Ұяшық адресі баған әрпі мен жол нөмірінен тұрады.",ex:"B3 — B бағаны мен 3-жолдың қиылысуы. A1:C4 — ұяшықтар диапазоны.",
th:["Бірнеше ұяшықтан тұратын бөлік диапазон деп аталады, мысалы A1:C4.","Пішімдеу мағынаны өзгертпейді, тек көрінісін түзетеді: қаріп, туралау, фон, шекара."],
tk:[["B3 нені білдіреді?",["B бағаны, 3-жол","3-баған, B жол","Файл атауы","Формула"],0],["A1:C3 не деп аталады?",["Формула","Диапазон","Диаграмма","Баған"],1]],
ts:[["D2 ұяшығы қай бағанда орналасқан?",["A","B","C","D"],3],["Пішімдеу нені өзгертеді?",["Мағынасын","Көрінісін","Файл түрін","Адресін"],1],["Диапазон дегеніміз не?",["Бір сан","Ұяшықтар тобы","Қаріп түрі","Файл"],1],["Мәтінді ортаға қою қандай әрекет?",["Туралау","Жою","Сақтау","Басып шығару"],0]]},
{i:"123",t:"Мәліметтер пішімі",g:"Электронды кестедегі деректердің типтерін жіктеу.",k:"Дұрыс формат есептеуді жеңілдетіп, кестені түсінікті етеді.",ex:"0,75 саны пайыздық форматта 75% болып көрінеді.",
th:["Негізгі форматтар: мәтін, сан, күн, уақыт, пайыз және валюта.","Бірдей мән әртүрлі форматта көрсетілуі мүмкін, бірақ оның мәні өзгермейді."],
tk:[["75% қай форматқа жатады?",["Мәтін","Пайыз","Күн","Уақыт"],1],["12.10.2026 қай формат?",["Валюта","Уақыт","Күн","Пайыз"],2]],
ts:[["2500 ₸ үшін қолайлы формат?",["Пайыз","Валюта","Мәтін","Күн"],1],["14:30 қай формат?",["Уақыт","Күн","Пайыз","Валюта"],0],["«Алматы» қай форматқа жатады?",["Сан","Валюта","Мәтін","Пайыз"],2],["0,5 санын пайыздық форматқа ауыстырса не шығады?",["5%","50%","0,5%","500%"],1]]},
{i:"🎨",t:"Шартты пішімдеу",g:"Шартты пішімдеу ережелерін қолдану.",k:"Шарт орындалғанда ұяшықтың түсі автоматты өзгереді.",ex:"80-нен жоғары ұпай — жасыл, 50-ден төмен ұпай — қызыл.",
th:["Шартты пішімдеу үлкен кестеден маңызды мәнді тез табуға көмектеседі.","Дерек өзгерсе, ереже автоматты түрде қайта қолданылады."],
tk:[["80 және одан жоғары ұпайды жасыл ету үшін қандай ереже дұрыс?",["Мән ≥ 80","Мән < 50","Мән = 0","Барлық мән"],0],["Дерек өзгерсе, шартты пішімдеу...",["Жойылады","Автоматты жаңарады","Файл жабылады","Қате шығады"],1]],
ts:[["Шартты пішімдеу не үшін керек?",["Маңызды мәндерді ерекшелеу","Файлды жою","Интернет қосу","Принтер таңдау"],0],["50-ден төмен мәнді қызыл ету ережесі қайсы?",["Мән < 50","Мән > 90","Мән = 100","Мән ≥ 80"],0],["Шартты пішімдеу қайда қолданылады?",["Тек мәтіндік процессорда","Электронды кестеде","Тек браузерде","Ойында"],1],["Ереже бірнеше ұяшыққа қолданыла ала ма?",["Жоқ, тек біреуіне","Иә, диапазонға","Тек файлға","Тек парақ атауына"],1]]},
{i:"📊",t:"Кестелі мәліметтердің графикалық ұсынылуы",g:"Берілген мәліметке сәйкес диаграмма таңдау және құру.",k:"Диаграмма — кестедегі сандық ақпараттың графикалық көрінісі.",ex:"Бағандық — салыстыру, сызықтық — өзгеріс, дөңгелек — бүтіннің бөліктері.",
th:["Бағандық диаграмма мәндерді салыстыруға ыңғайлы.","Сызықтық диаграмма уақыт бойынша өзгерісті, дөңгелек диаграмма бүтіннің бөліктерін көрсетеді."],
tk:[["Қаңтар–сәуір аралығындағы температураның өзгерісіне қай диаграмма ыңғайлы?",["Дөңгелек","Сызықтық","Тек мәтін","Шекара"],1],["Сыныптардың ұпайын салыстыруға қайсысы ыңғайлы?",["Бағандық","Дөңгелек","Уақыт шкаласы","Мәтін"],0]],
ts:[["Бюджет бөліктерінің үлесін көрсетуге қайсысы ыңғайлы?",["Сызықтық","Дөңгелек","Мәтін","Формула"],1],["Диаграмма не үшін қажет?",["Деректі көрнекі көрсету","Файлды сақтау","Құпиясөз қою","Қаріп таңдау"],0],["Жылдар бойынша халық өсімін көрсетуге?",["Дөңгелек","Сызықтық","Мәтін","Шекара"],1],["Диаграмма қандай деректерден жасалады?",["Кесте деректерінен","Тек суреттен","Тек видеодан","Дыбыстан"],0]]},
{i:"🧠",t:"Процестерді электронды кестелерде модельдеу",g:"Дерек енгізу, пішімдеу, есептеу және диаграмманы бір модельде қолдану.",k:"Модель — нақты нысанның немесе процестің қарапайым бейнесі.",ex:"Бюджет, ауа райы, оқу үлгерімі электронды кестеде модельденеді.",
th:["Модель құру: дерек енгізу, формат таңдау, есептеу, маңызды мәнді белгілеу, диаграмма салу.","Мини-жоба «Апталық шығын» осы қадамдардың барлығын біріктіреді."],
tk:[["«Апталық шығын» моделінің дұрыс жұмыс реті қандай?",["Диаграмма → дерек → формат","Дерек → формат → есептеу → шартты пішімдеу → диаграмма","Файлды жабу → дерек енгізу","Тек диаграмма"],1],["Электронды модельде диаграмма не үшін қажет?",["Нәтижені көрнекі көрсету","Файлды жабу","Құпиясөз қою","Қаріпті өшіру"],0]],
ts:[["Модель дегеніміз не?",["Тек сурет","Нақты процестің қарапайым бейнесі","Тек мәтін","Ойын"],1],["Модельде қандай әрекеттер бірігеді?",["Тек мәтін теру","Дерек, есептеу, пішімдеу, диаграмма","Тек сурет салу","Тек басып шығару"],1],["Модельдеуге қай процесс жатады?",["Бюджет жоспары","Файл атауы","Принтер","Монитор"],0],["Модельдегі алғашқы қадам қандай?",["Диаграмма салу","Дерек енгізу","Файлды жабу","Басып шығару"],1]]}
];
// ===== Көмекші функциялар =====
const $=s=>document.querySelector(s),app=$('#app'),N=L.length;
const NAMES=['Кіріспе','Видеосабақ','Теория (материал)','Тапсырма 1','Теория (жалғасы)','Тапсырма 2','Қорытынды тест'];
const COL=['#3b82f6,#60a5fa','#10b981,#34d399','#f97316,#fb923c','#ef4444,#f87171','#8b5cf6,#a78bfa','#14b8a6,#2dd4bf','#f59e0b,#fbbf24','#ec4899,#f472b6'];
const rd=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const wr=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const prog=()=>rd('inf7p',{}),favs=()=>rd('inf7f',[]);
const sh=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function mark(id,s){const p=prog(),x=p[id]||{s:0};x.s=Math.max(x.s,s);p[id]=x;wr('inf7p',p)}
function finish(id,sc){const p=prog();p[id]={s:6,d:1,sc:Math.max(sc,(p[id]||{}).sc||0)};wr('inf7p',p)}
const pct=id=>{const x=prog()[id];return !x?0:x.d?100:Math.min(99,Math.round(x.s/6*100))};
const status=id=>{const x=prog()[id];return x&&x.d?['Аяқталған','b-ok']:x&&x.s>0?['Орындалуда','b-mid']:['Басталмаған','b-no']};
let timer,qz;
// ===== Беттер =====
function route(){
  clearInterval(timer);
  const p=(location.hash.slice(1)||'/').split('/').filter(Boolean),sec=p[0]==='l'?'lessons':(p[0]||'');
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('on',a.getAttribute('href').slice(2)===sec));
  if(!p[0])home();
  else if(p[0]==='lessons')grid('7-сынып, 2-тоқсан','Сабақтар тізімі',[...Array(N)].map((_,i)=>i+1));
  else if(p[0]==='fav')grid('Таңдаулы сабақтар','Жұлдызшаны басып сабақты таңдауға қосыңыз',favs().sort(),'Әзірге таңдаулы сабақ жоқ. Сабақтар тізімінде ☆ белгісін басыңыз.');
  else if(p[0]==='profile')profile();
  else if(p[0]==='l'&&L[p[1]-1])lesson(+p[1],Math.min(6,Math.max(0,+p[2]||0)));
  else app.innerHTML='<div class="sec"><div class="empty">Бет табылмады. <a href="#/" style="color:var(--b)">Басты бетке өту</a></div></div>';
}
function home(){
  app.innerHTML=`<section class="hero"><div><h1>7-сынып<br>2-тоқсан</h1><p>Заманауи білім алу платформасы. Сабақтарды қарап, тапсырмаларды орындап, білімінді тексер!</p><a class="cta" href="#/lessons">Сабақтарға өту →</a></div><div class="art">🧑‍🎓👩‍🎓</div></section>
  <div class="feat"><div><span>▶️</span>Видеосабақтар</div><div><span>✏️</span>Интерактивті тапсырмалар</div><div><span>✅</span>Автоматты тексеру</div><div><span>🧭</span>Прогресс жүйесі</div></div>`;
}
const card=i=>{const l=L[i-1],c=COL[(i-1)%8].split(','),f=favs().includes(i),s=status(i)[0];
  return `<article class="card" style="background:linear-gradient(160deg,${c[0]},${c[1]})"><span class="num">${i}</span><button class="fav" data-fav="${i}" aria-label="Таңдауға қосу">${f?'★':'☆'}</button><div class="ci">${l.i}</div><h3>Сабақ ${i}</h3><p>${l.t}</p><small>${s}, ${pct(i)}%</small><a class="btn w" href="#/l/${i}/0">${pct(i)?'Жалғастыру':'Бастау'}</a></article>`};
function grid(h,sub,ids,empty){
  app.innerHTML=`<section class="sec"><h2>${h}</h2><p>${sub}</p>${ids.length?`<div class="grid">${ids.map(card).join('')}</div>`:`<div class="empty">${empty}</div>`}</section>`;
}
const vid=id=>YT[id]?`<div class="vid"><iframe src="https://www.youtube.com/embed/${YT[id]}" title="Видеосабақ" allowfullscreen></iframe></div>`
 :`<div class="vid"><video controls preload="metadata" src="videos/lesson-${id}.mp4" onerror="this.outerHTML='<div class=ph><span>▶</span><p>Видео жақында қосылады</p><small>videos/lesson-${id}.mp4</small></div>'"></video></div>`;
function task(id,st){
  const q=L[id-1].tk[st===3?0:1],ok=q[1][q[2]];
  return `<div class="box"><h3>${st===3?1:2}. Сұрақ</h3><p>${q[0]}</p>${sh(q[1]).map(a=>`<button class="to" data-ok="${a===ok?1:0}">${a}</button>`).join('')}<div id="fb" class="fb"></div><a id="nx" class="btn" hidden href="#/l/${id}/${st+1}">${st===3?'Келесі бөлім':'Қорытынды тест'} →</a></div>`;
}
function lesson(id,st){
  const l=L[id-1];mark(id,st);let b;
  if(st===0)b=`<div class="poster">${l.i}</div><div class="note bl"><b>🎯 Сабақтың мақсаты:</b>${l.g}<br>Мысалдар арқылы түсіну.<br>Тапсырмаларды орындау.</div><a class="btn" href="#/l/${id}/1">Сабақты бастау →</a>`;
  else if(st===1)b=`${vid(id)}<div class="box"><b>Видео мазмұны:</b><ul><li>${l.t}</li><li>Мысалдар</li><li>Практикалық қолдану</li></ul></div><a class="btn" href="#/l/${id}/2">Теорияға өту →</a>`;
  else if(st===2)b=`<div class="note g"><b>Негізгі ұғым:</b>${l.k}</div><div class="box"><p>${l.th[0]}</p></div><div class="box"><b>Мысал:</b><p>${l.ex}</p></div><a class="btn" href="#/l/${id}/3">Тапсырма 1 →</a>`;
  else if(st===4)b=`<div class="box"><p>${l.th[1]}</p></div><div class="note p"><b>Есте сақта!</b>${l.k}</div><a class="btn" href="#/l/${id}/5">Тапсырма 2 →</a>`;
  else if(st===6)b='<div id="qbox"></div>';
  else b=task(id,st);
  app.innerHTML=`<div class="lay"><aside class="side"><h4>Сабақ ${id}</h4><div class="sl">Сабақтың жоспары</div>${NAMES.map((n,i)=>`<a class="st${i===st?' on':''}" href="#/l/${id}/${i}">${i+1}. ${n}</a>`).join('')}</aside><section class="main"><div class="hd"><h2>${st?NAMES[st]:'Сабақ '+id+'. '+l.t}</h2>${st?'':`<div class="bar"><i style="width:${pct(id)}%"></i></div>`}</div>${b}</section></div>`;
  if(st===6)quiz(id);
}
function quiz(id){
  qz={id,i:0,a:[],t:600,qs:L[id-1].ts.map(q=>({q:q[0],o:sh(q[1]),ok:q[1][q[2]]}))};
  drawQ();
  timer=setInterval(()=>{qz.t--;const e=$('#tm');if(e)e.textContent=fmt(qz.t);if(qz.t<=0)end()},1000);
}
function drawQ(){
  const q=qz.qs[qz.i],n=qz.qs.length;
  $('#qbox').innerHTML=`<div class="box"><div class="qh"><h3>Қорытынды тест</h3><span class="tm">⏱ <b id="tm">${fmt(qz.t)}</b></span></div><b>${qz.i+1}/${n}</b><p>${q.q}</p>${q.o.map((a,k)=>`<label class="qo${qz.a[qz.i]===a?' sel':''}"><input type="radio" name="r" data-v="${k}"${qz.a[qz.i]===a?' checked':''}> ${a}</label>`).join('')}<div class="qn"><button class="btn gh" id="pv"${qz.i?'':' disabled'}>← Алдыңғы</button><button class="btn" id="nt">${qz.i===n-1?'Аяқтау':'Келесі →'}</button></div><div class="bar"><i style="width:${(qz.i+1)/n*100}%"></i></div></div>`;
}
function end(){
  clearInterval(timer);const n=qz.qs.length,sc=qz.qs.filter((q,i)=>qz.a[i]===q.ok).length,per=Math.round(sc/n*100),pass=per>=75,id=qz.id;
  if(pass)finish(id,per);
  $('#qbox').innerHTML=`<div class="box res"><div class="tr">${pass?'🏆':'📚'}</div><h3>${pass?'Құттықтаймыз!':'Тағы бір рет байқап көр'}</h3><p>${pass?`Сіз Сабақ ${id}-ді сәтті аяқтадыңыз!`:'Сабақты өту үшін кемінде 75% қажет. Теорияны қайталап, тестті қайта тапсыр.'}</p><div class="ring" style="--p:${per}"><b>${per}%</b></div><div class="ck"><div>✅ Видеосабақ қаралды</div><div>✅ Тапсырмалар орындалды</div><div>${pass?'✅':'❌'} Қорытынды тест: ${sc}/${n}</div></div><div class="acts"><a class="btn gh" href="#/">Басты бетке оралу</a>${pass?`<a class="btn" href="${id<N?`#/l/${id+1}/0`:'#/profile'}">${id<N?'Келесі сабақ':'Прогресті көру'} →</a>`:'<button class="btn" id="rt">Қайта тапсыру</button>'}</div></div>`;
}
function profile(){
  const d=Object.keys(prog()).filter(i=>prog()[i].d).length,tot=Math.round(d/N*100);
  app.innerHTML=`<section class="sec"><h2>Менің прогрессім</h2><p>Нәтижелер осы браузерде сақталады.</p><div class="box"><div class="pf"><div class="ring" style="--p:${tot}"><b>${tot}%</b></div><div><b style="font-size:26px">${d} / ${N}</b><br>сабақ аяқталды</div><div class="stats"><div class="stat" style="background:#eff6ff;color:#1d4ed8"><b>${N}</b>Жалпы сабақ</div><div class="stat" style="background:#ecfdf5;color:#15803d"><b>${d}</b>Аяқталған</div><div class="stat" style="background:#fef2f2;color:#b91c1c"><b>${N-d}</b>Қалған</div></div></div></div>
  <div class="box"><h3>Сабақтар статусы</h3>${[...Array(N)].map((_,k)=>{const i=k+1,s=status(i);return `<div class="row"><a href="#/l/${i}/0"><b>Сабақ ${i}</b></a><span class="badge ${s[1]}">${s[0]}</span><div class="bar"><i style="width:${pct(i)}%"></i></div><span>${pct(i)}%</span></div>`}).join('')}<a class="btn gh" style="margin-top:14px" href="#/lessons">Барлық сабақтарды көру →</a><br><button class="lnk" data-reset>Прогресті тазалау</button></div></section>`;
}
// ===== Оқиғалар =====
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-fav]');
  if(g){const i=+g.dataset.fav,f=favs(),k=f.indexOf(i);k<0?f.push(i):f.splice(k,1);wr('inf7f',f);route();return}
  const t=e.target.closest('.to');
  if(t&&!t.disabled){const ok=t.dataset.ok==='1',f=$('#fb');t.classList.add(ok?'good':'bad');f.className='fb '+(ok?'ok':'no');f.innerHTML=ok?'<b>Дұрыс жауап!</b> Өте жақсы!':'<b>Қате.</b> Тағы бір рет байқап көр.';t.disabled=true;if(ok){document.querySelectorAll('.to').forEach(x=>x.disabled=true);$('#nx').hidden=false}return}
  if(e.target.closest('#pv')){qz.i--;drawQ()}
  else if(e.target.closest('#nt')){qz.i===qz.qs.length-1?end():(qz.i++,drawQ())}
  else if(e.target.closest('#rt'))quiz(qz.id);
  else if(e.target.closest('[data-reset]')&&confirm('Барлық прогресс жойылсын ба?')){wr('inf7p',{});route()}
});
document.addEventListener('change',e=>{if(e.target.name==='r'){qz.a[qz.i]=qz.qs[qz.i].o[+e.target.dataset.v];drawQ()}});
addEventListener('hashchange',()=>{route();scrollTo(0,0)});
route();
