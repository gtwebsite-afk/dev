(() => {
  const storageKey='kilatara_fest_favorites';
  const getFav=()=>{try{return JSON.parse(localStorage.getItem(storageKey)||'[]')}catch{return[]}};
  const setFav=(v)=>localStorage.setItem(storageKey,JSON.stringify(v));
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});}
  let activeDay='all', activeStage='all';
  const applySchedule=()=>document.querySelectorAll('.schedule-table tr[data-day]').forEach(row=>{row.hidden=(activeDay!=='all'&&row.dataset.day!==activeDay)||(activeStage!=='all'&&row.dataset.stage!==activeStage);});
  document.querySelectorAll('.schedule-controls button[data-day]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.schedule-controls button[data-day]').forEach(b=>b.setAttribute('aria-pressed','false'));btn.setAttribute('aria-pressed','true');activeDay=btn.dataset.day;applySchedule();
  }));
  document.querySelectorAll('.schedule-controls button[data-stage]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.schedule-controls button[data-stage]').forEach(b=>b.setAttribute('aria-pressed','false'));btn.setAttribute('aria-pressed','true');activeStage=btn.dataset.stage;applySchedule();
  }));
  const fav=getFav();document.querySelectorAll('.favorite[data-artist]').forEach(btn=>{const id=btn.dataset.artist;const active=fav.includes(id);btn.setAttribute('aria-pressed',String(active));btn.textContent=active?'★ Disimpan':'☆ Simpan';btn.addEventListener('click',()=>{const f=getFav();const i=f.indexOf(id);if(i>=0)f.splice(i,1);else f.push(id);setFav(f);const on=f.includes(id);btn.setAttribute('aria-pressed',String(on));btn.textContent=on?'★ Disimpan':'☆ Simpan';});});
  document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const out=form.querySelector('[data-feedback]');if(out){out.textContent='Tersimpan sebagai demo lokal. Tim KILATARA akan menindaklanjuti di dunia nyata.';out.focus();}}));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{const value=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed','false'));btn.setAttribute('aria-pressed','true');document.querySelectorAll('[data-filter-item]').forEach(item=>item.hidden=value!=='all'&&item.dataset.filterItem!==value);}));
})();
