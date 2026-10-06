
const lessons = [
 {id:1,icon:"▦",title:"Мәтіндік процессордағы кестелер",desc:"Кесте, жол, баған және ұяшықтармен жұмыс істеуді үйренеміз.",goal:"Кесте құру және оның элементтерін дұрыс пішімдеу.",theory:["Кесте — ақпаратты жолдар мен бағандарға реттеп орналастыру тәсілі. Жол көлденең, баған тік орналасады. Олардың қиылысқан жері ұяшық деп аталады.","Мәтіндік процессорда кесте арқылы сабақ кестесін, тізімді, жоспарды немесе салыстыру кестесін жасауға болады. Ұяшықтарды біріктіруге, мәтінді туралауға, шекара мен фонды өзгертуге болады."],task:"match"},
 {id:2,icon:"▤",title:"Электронды кесте элементтерін пішімдеу",desc:"Ұяшық, диапазон, қаріп, шекара және туралауды меңгереміз.",goal:"Электронды кесте элементтерін пішімдей алу.",theory:["Электронды кестеде әр ұяшықтың адресі болады. Мысалы, B3 — B бағаны мен 3-жолдың қиылысуы. Бірнеше ұяшықтан тұратын бөлік диапазон деп аталады: A1:C4.","Пішімдеу ақпараттың мағынасын өзгертпейді, тек оны түсінікті әрі әдемі көрсетеді. Қаріпті қалыңдатуға, мәтінді ортаға туралауға, фон мен шекараны өзгертуге болады."],task:"cell"},
 {id:3,icon:"123",title:"Мәліметтер пішімі",desc:"Мәтін, сан, күн, уақыт, пайыз және валюта форматтарын ажыратамыз.",goal:"Электронды кестедегі деректердің типтерін жіктеу.",theory:["Электронды кесте деректерді әртүрлі пішімде көрсете алады. Мысалы, 0.75 санын пайыздық форматқа ауыстырсақ, 75% болып көрінеді.","Негізгі форматтар: мәтін, сан, күн, уақыт, пайыз және валюта. Дұрыс формат есептеуді жеңілдетіп, кестені түсінікті етеді."],task:"types"},
 {id:4,icon:"🎨",title:"Шартты пішімдеу",desc:"Мәнге байланысты ұяшықтың түсін автоматты өзгертеміз.",goal:"Шартты пішімдеу ережелерін қолдану.",theory:["Шартты пішімдеу — белгілі бір шарт орындалғанда ұяшықтың сыртқы көрінісін автоматты өзгерту. Мысалы, 80-нен жоғары ұпайды жасыл, 50-ден төмен ұпайды қызыл түспен белгілеуге болады.","Бұл үлкен кестеден маңызды мәліметті тез байқауға көмектеседі. Ереже дерек өзгерген сайын автоматты түрде қайта қолданылады."],task:"conditional"},
 {id:5,icon:"📊",title:"Кестелі мәліметтердің графикалық ұсынылуы",desc:"Бағандық, сызықтық және дөңгелек диаграммаларды қолданамыз.",goal:"Берілген мәліметке сәйкес диаграмма таңдау және құру.",theory:["Диаграмма — кестедегі сандық ақпараттың графикалық көрінісі. Ол мәліметтерді салыстыруды және өзгерісті байқауды жеңілдетеді.","Бағандық диаграмма салыстыруға, сызықтық диаграмма уақыт бойынша өзгерісті көрсетуге, ал дөңгелек диаграмма бүтіннің бөліктерін көрсетуге ыңғайлы."],task:"chart"},
 {id:6,icon:"🧠",title:"Процестерді электронды кестелерде модельдеу",desc:"Алдыңғы білімдерді біріктіріп, шағын электронды модель жасаймыз.",goal:"Дерек енгізу, пішімдеу, есептеу және диаграмманы бір модельде қолдану.",theory:["Модель — нақты нысанның немесе процестің қарапайым бейнесі. Электронды кестеде бюджет, ауа райы, оқу үлгерімі сияқты процестерді модельдеуге болады.","Модель құру кезінде деректер енгізіледі, формат таңдалады, қажет есептеулер орындалады, маңызды мәндер белгіленеді және нәтиже диаграмма арқылы көрсетіледі."],task:"project"}
];
const steps=["Кіріспе","Видеосабақ","Теория","Интерактив","Тест"];
const quizBank={
1:[["Кестедегі көлденең орналасқан ұяшықтар тобы қалай аталады?","Жол",["Баған","Жол","Файл"]],["Жол мен баған қиылысқан жер?","Ұяшық",["Ұяшық","Диаграмма","Парақ"]],["Екі ұяшықты бір үлкен ұяшық ету әрекеті?","Біріктіру",["Сұрыптау","Біріктіру","Көшіру"]]],
2:[["B3 нені білдіреді?","B бағаны, 3-жол",["3-баған, B жол","B бағаны, 3-жол","Файл атауы"]],["A1:C3 деген не?","Диапазон",["Формула","Диапазон","Диаграмма"]],["Пішімдеу нені өзгертеді?","Көрінісін",["Мағынасын","Көрінісін","Файл түрін"]]],
3:[["75% қай форматқа жатады?","Пайыз",["Мәтін","Пайыз","Күн"]],["12.10.2026 қай формат?","Күн",["Күн","Уақыт","Валюта"]],["2500 ₸ үшін қолайлы формат?","Валюта",["Пайыз","Валюта","Мәтін"]]],
4:[["Шартты пішімдеу не үшін керек?","Маңызды мәндерді ерекшелеу",["Файлды жою","Маңызды мәндерді ерекшелеу","Интернет қосу"]],["90 баллды жасыл ету үшін қандай шарт дұрыс?","80-нен жоғары",["50-ден төмен","80-нен жоғары","0-ге тең"]],["Дерек өзгерсе, шартты пішімдеу...","Автоматты жаңарады",["Жойылады","Автоматты жаңарады","Файл жабылады"]]],
5:[["Айлар бойынша температура өзгерісіне қайсысы ыңғайлы?","Сызықтық",["Сызықтық","Дөңгелек","Мәтін"]],["Сыныптардың ұпайын салыстыруға?","Бағандық",["Бағандық","Дөңгелек","Уақыт"]],["Бюджет бөліктерінің үлесін көрсетуге?","Дөңгелек",["Сызықтық","Дөңгелек","Мәтін"]]],
6:[["Модель дегеніміз не?","Нақты процестің қарапайым бейнесі",["Тек сурет","Нақты процестің қарапайым бейнесі","Тек мәтін"]],["Электронды модельде диаграмма не үшін?","Нәтижені көрнекі көрсету",["Файлды жабу","Нәтижені көрнекі көрсету","Құпиясөз қою"]],["Модель жасауда қай әрекеттер бірігуі мүмкін?","Дерек, есептеу, пішімдеу, диаграмма",["Тек мәтін теру","Тек сурет салу","Дерек, есептеу, пішімдеу, диаграмма"]]]
};
let state={view:"home",lesson:1,step:0};
const app=document.querySelector("#app");
const done=()=>JSON.parse(localStorage.getItem("doneLessons")||"[]");
const saveDone=id=>{let d=done(); if(!d.includes(id))d.push(id);localStorage.setItem("doneLessons",JSON.stringify(d));};

document.addEventListener("click",e=>{
 const n=e.target.closest("[data-nav]"); if(n){state.view=n.dataset.nav;render();scrollTo(0,0)}
 const l=e.target.closest("[data-lesson]"); if(l){state.view="lesson";state.lesson=+l.dataset.lesson;state.step=0;render();scrollTo(0,0)}
 const s=e.target.closest("[data-step]"); if(s){state.step=+s.dataset.step;render();scrollTo(0,0)}
});

function render(){
 if(state.view==="home") home();
 else if(state.view==="lessons") lessonList();
 else if(state.view==="profile") profile();
 else lessonPage();
}
function home(){
 app.innerHTML=`<section class="hero"><div><span class="pill">7-сынып • 2-тоқсан</span><h1>Информатика<br><span>қызықты әрі оңай!</span></h1><p>Қысқа видеолар, түсінікті теория және қызықты интерактивті тапсырмалар арқылы электронды кестелерді меңгер.</p><button class="cta" data-nav="lessons">Сабақтарға өту →</button></div>
 <div class="hero-art"><div class="laptop"><div class="screen"><div class="mini"><b>📊 Диаграммалар</b><p>Деректі көрнекі көрсет</p></div><div class="mini"><b>🎨 Пішімдеу</b><p>Кестені әдемі жаса</p></div><div class="mini"><b>🏆 6 сабақ</b><p>Үйрен • Орында • Тексер</p></div></div></div><div class="float f1">💡 Теория</div><div class="float f2">🎥 Видео</div><div class="float f3">🧩 Тапсырма</div></div></section>`;
}
function lessonList(){
 let d=done();
 app.innerHTML=`<section class="section"><h2 class="section-title">2-тоқсан сабақтары</h2><p class="section-sub">6 сабақ • видео • теория • интерактив • тест</p><div class="lesson-grid">${lessons.map(x=>`<article class="card"><div class="card-top"><div class="icon">${x.icon}</div><span class="tag">${d.includes(x.id)?"✓ Аяқталды":"Сабақ "+x.id}</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="progress"><i style="width:${d.includes(x.id)?100:0}%"></i></div><button class="primary" data-lesson="${x.id}">${d.includes(x.id)?"Қайталау":"Бастау"} →</button></article>`).join("")}</div></section>`;
}
function lessonPage(){
 const l=lessons[state.lesson-1];
 app.innerHTML=`<div class="lesson-layout"><aside class="sidebar"><div class="side-title">${l.id}-сабақ</div>${steps.map((x,i)=>`<button class="step ${state.step===i?"active":""}" data-step="${i}">${["🏠","🎥","📖","🧩","📝"][i]} ${x}</button>`).join("")}</aside><section class="lesson-main"><div class="breadcrumb">Сабақтар › ${l.id}-сабақ</div><h2>${l.title}</h2>${stepContent(l)}</section></div>`;
 bindInteractive(l);
}
function stepContent(l){
 if(state.step===0)return `<div class="goal"><b>🎯 Сабақ мақсаты:</b> ${l.goal}</div><div class="content-box"><h3>Бүгін не үйренеміз?</h3><p>${l.desc}</p><p>Сабақ соңында шағын тест тапсырып, прогресіңді сақтай аласың.</p><button class="primary" data-step="1">Видеосабаққа өту →</button></div>`;
 if(state.step===1)return `<div class="content-box"><h3>🎥 Қысқа видеосабақ</h3><div class="video"><div><button class="play" id="playBtn">▶</button><h3>${l.title}</h3><p>1–1,5 минуттық видеоға арналған орын</p><small>Видео дайын болғанда осы блокқа MP4 немесе YouTube embed қосылады.</small></div></div><div class="note">💡 Қазір сайт толық жұмыс істейді. Видео файлдарын кейін <b>videos/lesson-${l.id}.mp4</b> ретінде қосуға болады.</div><button class="primary" data-step="2">Теорияға өту →</button></div>`;
 if(state.step===2)return `<div class="content-box"><h3>📖 Түсінікті теория</h3>${l.theory.map((p,i)=>`<p><b>${i+1}.</b> ${p}</p>`).join("")}<div class="note">⭐ Есте сақта: теорияны оқыған соң келесі бөлімде оны өзің қолданып көресің.</div><button class="primary" data-step="3">Тапсырманы орындау →</button></div>`;
 if(state.step===3)return `<div class="content-box"><h3>🧩 Интерактивті тапсырма</h3>${taskHTML(l)}<div id="taskFeedback" class="feedback"></div><br><button class="primary" data-step="4">Қорытынды тест →</button></div>`;
 return quizHTML(l);
}
function taskHTML(l){
 if(l.task==="match")return `<p>Сол жақтағы ұғымды таңда, кейін оң жақтағы дұрыс анықтаманы бас.</p><div class="match-grid"><div><div class="match-item" data-key="row">Жол</div><div class="match-item" data-key="col">Баған</div><div class="match-item" data-key="cell">Ұяшық</div></div><div><div class="dropzone" data-key="cell">Жол мен бағанның қиылысы</div><div class="dropzone" data-key="row">Көлденең орналасады</div><div class="dropzone" data-key="col">Тігінен орналасады</div></div></div>`;
 if(l.task==="cell")return `<p><b>B3</b> ұяшығын кестеден тап та бас.</p>${sheet(true)}`;
 if(l.task==="types")return `<p>Берілген мәннің дұрыс форматын таңда: <b>75%</b></p><div class="options"><button class="option" data-answer="no">Мәтін</button><button class="option" data-answer="yes">Пайыз</button><button class="option" data-answer="no">Күн</button><button class="option" data-answer="no">Уақыт</button></div>`;
 if(l.task==="conditional")return `<p>80 және одан жоғары ұпайларды ерекшелеу керек. Дұрыс ережені таңда.</p><div class="options"><button class="option" data-answer="no">Мән &lt; 50 → жасыл</button><button class="option" data-answer="yes">Мән ≥ 80 → жасыл</button><button class="option" data-answer="no">Барлық мән → қызыл</button></div>`;
 if(l.task==="chart")return `<p>Қаңтар–сәуір аралығындағы температураның өзгерісін көрсетуге ең ыңғайлы диаграмманы таңда.</p><div class="options"><button class="option" data-answer="no">Дөңгелек</button><button class="option" data-answer="yes">Сызықтық</button><button class="option" data-answer="no">Тек мәтін</button></div><div class="chart"><div class="bar" style="height:35%"><span>Қаң</span></div><div class="bar" style="height:48%"><span>Ақп</span></div><div class="bar" style="height:67%"><span>Нау</span></div><div class="bar" style="height:90%"><span>Сәу</span></div></div>`;
 return `<p><b>Мини-жоба: «Апталық шығын».</b> Дұрыс жұмыс ретін құрастыр.</p><div class="options"><button class="option" data-answer="no">Диаграмма → дерек → формат</button><button class="option" data-answer="yes">Дерек → формат → есептеу → шартты пішімдеу → диаграмма</button><button class="option" data-answer="no">Файлды жабу → дерек енгізу</button></div>`;
}
function sheet(clickable=false){
 let rows=[1,2,3,4], cols=["A","B","C","D"];
 return `<div class="fake-sheet"><table><tr><th></th>${cols.map(c=>`<th>${c}</th>`).join("")}</tr>${rows.map(r=>`<tr><th>${r}</th>${cols.map(c=>`<td class="${clickable?"clickable":""}" data-cell="${c}${r}">${c}${r}</td>`).join("")}</tr>`).join("")}</table></div>`;
}
function bindInteractive(l){
 let selected=null;
 document.querySelectorAll(".match-item").forEach(x=>x.onclick=()=>{document.querySelectorAll(".match-item").forEach(y=>y.classList.remove("selected"));x.classList.add("selected");selected=x.dataset.key});
 document.querySelectorAll(".dropzone").forEach(x=>x.onclick=()=>{if(!selected)return;let ok=x.dataset.key===selected;x.classList.add(ok?"good":"bad");feedback(ok?"✓ Дұрыс сәйкестендірдің!":"✕ Бұл жұп сәйкес емес.",ok)});
 document.querySelectorAll("[data-answer]").forEach(x=>x.onclick=()=>{let ok=x.dataset.answer==="yes";x.classList.add(ok?"good":"bad");feedback(ok?"✓ Дұрыс! Керемет!":"✕ Қайта ойланып көр.",ok)});
 document.querySelectorAll("[data-cell]").forEach(x=>x.onclick=()=>{let ok=x.dataset.cell==="B3";x.classList.add(ok?"hit":"bad");feedback(ok?"✓ B3 ұяшығын таптың!":"✕ Бұл "+x.dataset.cell+". B3-ті ізде.",ok)});
}
function feedback(t,ok){let f=document.querySelector("#taskFeedback");if(f){f.textContent=t;f.className="feedback "+(ok?"ok":"no")}}
function quizHTML(l){
 return `<div class="content-box"><h3>📝 Қорытынды тест</h3><p>3 сұраққа жауап бер. Соңында нәтижең шығады.</p><form id="quizForm">${quizBank[l.id].map((q,i)=>`<div class="quiz-q"><b>${i+1}. ${q[0]}</b><div class="options">${q[2].map(a=>`<label class="option"><input type="radio" name="q${i}" value="${a}"> ${a}</label>`).join("")}</div></div>`).join("")}<button type="submit" class="primary">Нәтижені көру</button></form><div id="quizResult"></div></div>`;
}
document.addEventListener("submit",e=>{
 if(e.target.id!=="quizForm")return;e.preventDefault();
 const l=lessons[state.lesson-1], data=new FormData(e.target);let score=0;
 quizBank[l.id].forEach((q,i)=>{if(data.get("q"+i)===q[1])score++});
 if(score>=2)saveDone(l.id);
 document.querySelector("#quizResult").innerHTML=`<div class="result"><div class="score">${score}/3</div><h3>${score===3?"🎉 Өте жақсы!":score===2?"👏 Жақсы!":"📚 Тағы бір қайталап көр!"}</h3><p>${score>=2?"Сабақ аяқталды және прогресің сақталды.":"Теорияны қайталап, тестті қайта тапсыр."}</p>${score>=2?'<button type="button" class="primary" data-nav="lessons">Келесі сабақтарға өту →</button>':""}</div>`;
});
function profile(){
 const d=done(), pct=Math.round(d.length/6*100);
 app.innerHTML=`<section class="section"><h2 class="section-title">Менің прогресім</h2><p class="section-sub">Оқу нәтижелерің осы браузерде автоматты сақталады.</p><div class="profile-card"><h3>👋 Жарайсың!</h3><div class="progress"><i style="width:${pct}%"></i></div><p><b>${pct}% аяқталды</b></p><div class="stats"><div class="stat"><strong>${d.length}/6</strong>Сабақ</div><div class="stat"><strong>${pct}%</strong>Прогресс</div><div class="stat"><strong>${d.length*3}</strong>⭐ Ұпай</div></div><br><button class="primary" data-nav="lessons">Сабақтарға өту</button></div></section>`;
}
render();
