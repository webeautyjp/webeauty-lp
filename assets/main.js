/* WEBEAUTY LP 共通スクリプト（軽量・依存なし） */
(function(){
  var header = document.querySelector('.site-header');
  var onScroll = function(){
    if(!header) return;
    if(window.scrollY > 60){ header.classList.add('scrolled'); }
    else{ header.classList.remove('scrolled'); }
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* モバイルメニュー */
  var burger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.mobile-nav');
  if(burger && drawer){
    burger.addEventListener('click', function(){
      drawer.classList.toggle('open');
      document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        drawer.classList.remove('open');
        document.body.style.overflow='';
      });
    });
  }

  /* スクロールで表示アニメーション */
  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.12});
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('in'); });
  }

  /* 現在の年をフッターに */
  var y = document.querySelector('[data-year]');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
