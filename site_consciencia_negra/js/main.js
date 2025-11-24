
// js/main.js - toggle theme and simple filter for personalities
document.addEventListener('DOMContentLoaded', function(){
  const themeToggle = document.getElementById('themeToggle');
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', now);
      localStorage.setItem('theme', now);
    });
    const saved = localStorage.getItem('theme');
    if(saved) document.documentElement.setAttribute('data-theme', saved);
  }

  // simple filter on personalidades page
  const filterInput = document.getElementById('filterInput');
  if(filterInput){
    filterInput.addEventListener('input', (e)=>{
      const q = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.person-item');
      items.forEach(it=>{
        const txt = it.textContent.toLowerCase();
        it.style.display = txt.includes(q) ? '' : 'none';
      });
    });
  }

  // keyboard: skip to main
  const skip = document.querySelector('.skip-link');
  if(skip) skip.addEventListener('click', ()=> document.getElementById('main').focus());
});
