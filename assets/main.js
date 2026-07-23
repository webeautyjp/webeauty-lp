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

/* =========================================================
   アクセス計測（Google Analytics 4）＋ コンバージョン計測
   ※ 下の GA_ID を、田中さんのGA4「測定ID」(G-から始まる)に
     差し替えるだけで計測が始まります。空/プレースホルダのままなら何もしません。
   ========================================================= */
(function(){
  var GA_ID = 'G-8HEF34YG1C'; // WEBEAUTY GA4 測定ID
  var enabled = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';

  if(enabled){
    var s=document.createElement('script');
    s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
    document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  function track(name, params){
    if(enabled && window.gtag){ gtag('event', name, params||{}); }
  }
  /* LINE・電話クリックをコンバージョンとして計測 */
  document.addEventListener('click', function(e){
    var a=e.target.closest && e.target.closest('a');
    if(!a) return;
    var href=a.getAttribute('href')||'';
    if(href.indexOf('lin.ee')>-1 || href.indexOf('line.me')>-1){
      track('cta_line_click', {location: a.className||'', page: location.pathname});
    } else if(href.indexOf('tel:')===0){
      track('cta_tel_click', {location: a.className||'', page: location.pathname});
    }
  }, true);
})();
