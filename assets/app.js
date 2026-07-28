const entries = [
 {title:'Protocoles obstétriques',desc:'PDF',url:'protocoles/obstetrique/index.html'},
 {title:'Protocoles gynécologiques',desc:'PDF',url:'protocoles/gynecologie/index.html'},
 {title:'EPF OMS',desc:'Calculateur',url:'calculateurs.html#epf'},
 {title:'Doppler',desc:'Calculateur',url:'calculateurs.html#doppler'},
 {title:'Discordance gémellaire',desc:'Calculateur',url:'calculateurs.html#discordance'},
 {title:'Calcul du terme',desc:'Calculateur',url:'calculateurs.html#terme'},
 {title:'CRAT',desc:'Outil externe',url:'https://www.lecrat.fr/'},
 {title:'FMF',desc:'Outil externe',url:'https://fetalmedicine.org/'}
];
const search=document.getElementById('search');
const box=document.getElementById('search-results');
const list=document.getElementById('results-list');
if(search){
 search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase();
  if(!q){box.classList.add('hidden');list.innerHTML='';return;}
  const found=entries.filter(x=>(x.title+' '+x.desc).toLowerCase().includes(q));
  list.innerHTML=found.length?found.map(x=>`<a class="result" href="${x.url}"><strong>${x.title}</strong><small>${x.desc}</small></a>`).join(''):'<p>Aucun résultat.</p>';
  box.classList.remove('hidden');
 });
}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
