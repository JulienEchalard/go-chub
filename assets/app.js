
const entries=[
 ['Protocoles obstétriques','protocoles/obstetrique/index.html','PDF'],
 ['Protocoles gynécologiques','protocoles/gynecologie/index.html','PDF'],
 ['EPF et biométries OMS','calculateurs.html#oms','Calculateur'],
 ['Doppler','calculateurs.html#doppler','Calculateur'],
 ['Discordance gémellaire','calculateurs.html#discordance','Calculateur'],
 ['Calcul du terme','calculateurs.html#terme','Calculateur'],
 ['CRAT','https://www.lecrat.fr/','Outil externe'],
 ['FMF','https://fetalmedicine.org/','Outil externe']
];
const q=document.querySelector('#search'),box=document.querySelector('#search-results'),list=document.querySelector('#result-list');
if(q){q.addEventListener('input',()=>{const s=q.value.trim().toLowerCase();if(!s){box.classList.add('hidden');return}
const f=entries.filter(e=>(e[0]+' '+e[2]).toLowerCase().includes(s));list.innerHTML=f.length?f.map(e=>`<a class="pdf-item" href="${e[1]}"><span><strong>${e[0]}</strong><br><small>${e[2]}</small></span><span>›</span></a>`).join(''):'<p>Aucun résultat.</p>';box.classList.remove('hidden')})}
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(()=>{})}
