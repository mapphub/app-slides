(function(){
  try{ MiniApps.shell&&MiniApps.shell('setChrome',{topBar:false,bottomBar:false}); }catch(e){}
  const slides=[{t:'Слайд 1',b:'Добро пожаловать'},{t:'Слайд 2',b:'Без +server.js'},{t:'Слайд 3',b:'MiniApps API'}];
  let i=0;
  function show(){ document.getElementById('title').textContent=slides[i].t; document.getElementById('body').textContent=slides[i].b; }
  document.getElementById('prev').onclick=()=>{ i=(i+slides.length-1)%slides.length; show(); };
  document.getElementById('next').onclick=()=>{ i=(i+1)%slides.length; show(); };
  show();
})();
