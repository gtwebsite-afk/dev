(function(){'use strict';
const q=(s,c=document)=>c.querySelector(s), qa=(s,c=document)=>Array.from(c.querySelectorAll(s));
const progress=q('.progress span'); if(progress){window.addEventListener('scroll',()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?(d.scrollTop/max*100):0)+'%';},{passive:true});}
qa('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{qa('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const term=btn.dataset.filter;qa('[data-topic]').forEach(card=>{card.hidden=term!=='all'&&card.dataset.topic!==term;});}));
qa('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const out=q('[data-form-message]',form);if(out){out.textContent='Terima kasih. Preferensi Anda tersimpan untuk demo ini.';out.hidden=false;}form.reset();}));
const search=q('#site-search'); if(search){search.addEventListener('input',()=>{const term=search.value.toLowerCase();qa('[data-search-item]').forEach(x=>x.hidden=term&&!x.textContent.toLowerCase().includes(term));});}
qa('[data-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const target=q('#'+btn.dataset.toggle);if(target){const open=target.hasAttribute('hidden');target.toggleAttribute('hidden');btn.setAttribute('aria-expanded',String(open));}}));
})();
