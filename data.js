/* ===== Heritage By Aemli — shared UI: chrome, toast, quick view ===== */
(function(){
  const S = window.Store;
  const HEADER = `
  <div class="announce" id="announce">🪡 Complimentary shipping above ₹2,999 · Easy 7-day returns &nbsp;|&nbsp; New readers save ₹100 with code <b>AEMLI100</b><button aria-label="Dismiss" onclick="document.getElementById('announce').remove()">×</button></div>
  <header class="site top" id="header">
    <div class="container">
      <div class="bar">
        <button class="icon-btn hamburger" aria-label="Menu" onclick="AEMLI_UI.toggleMenu()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
        <a class="logo" href="index.html" aria-label="Heritage By Aemli home">
          <svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#C0396B"/><g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M50 30 C40 38 40 52 50 60 C60 52 60 38 50 30Z"/><path d="M50 60 C42 54 34 58 36 66 C44 68 50 66 50 60Z"/><path d="M50 60 C58 54 66 58 64 66 C56 68 50 66 50 60Z"/><path d="M50 60 V78"/></g><circle cx="50" cy="50" r="3" fill="#fff"/></svg>
          <span class="word">Heritage By Aemli<small>Celebrate in Craft</small></span>
        </a>
        <form class="search" role="search" onsubmit="AEMLI_UI.search(event)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          <input type="search" id="q" placeholder="Search anarkali, green, wedding guest…" aria-label="Search products" />
        </form>
        <div class="icons">
          <a class="icon-btn" id="accLink" href="login.html" aria-label="Account"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></a>
          <a class="icon-btn" href="wishlist.html" aria-label="Wishlist"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9C1 9 3 5 7 5c2 0 3 1 5 3 2-2 3-3 5-3 4 0 6 4 4.5 7C19 16.5 12 21 12 21z"/></svg><span class="badge" id="wishCount">0</span></a>
          <a class="icon-btn" href="cart.html" aria-label="Cart"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-2 9H8L6 3H3"/><circle cx="10" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg><span class="badge" id="cartCount">0</span></a>
          <a class="wa-btn" href="https://wa.me/917770946463" aria-label="Chat on WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.3-5.2-4.5-.2-.2-1.5-2-1.5-3.8 0-1.8 1-2.7 1.3-3.1.3-.4.7-.4.9-.4h.7c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.4-.1.6.2.3.9 1.4 1.8 2.3 1.3 1.1 2.2 1.5 2.5 1.7.2.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.2.1.3.2.3.4 0 .1.1.8-.1 1.4z"/></svg><span>Style Me</span></a>
        </div>
      </div>
      <nav class="main" aria-label="Primary">
        <div class="nav-inner container" style="padding-left:0;padding-right:0">
          <div class="has-mega">
            <a class="nav-link" href="shop.html">Shop ▾</a>
            <div class="mega"><div class="container mega-grid">
              <div><h4>By Style</h4><a href="shop.html">Anarkali Sets</a><a href="shop.html">Angrakha Sets</a><a href="shop.html">Suit Sets</a><a href="shop.html">Skirt Sets</a><a href="shop.html">Co-ord Sets</a><a href="shop.html">Lehengas</a><a href="shop.html">Indo-Western</a></div>
              <div><h4>By Occasion</h4><a href="shop.html?occasion=Festive">Festive</a><a href="shop.html?occasion=Wedding%20Guest">Wedding Guest</a><a href="shop.html?occasion=Engagement">Engagement</a><a href="shop.html?occasion=Office">Office</a><a href="shop.html?occasion=Family%20Functions">Family Functions</a></div>
              <div><h4>By Fabric</h4><a href="shop.html">Cotton</a><a href="shop.html">Muslin</a><a href="shop.html">Silk Tissue</a><a href="shop.html">Organza</a><a href="shop.html">Taffeta</a></div>
              <div><h4>By Color</h4><a href="shop.html?color=Rose">Rose / Pink</a><a href="shop.html?color=Green">Green</a><a href="shop.html?color=Blue">Blue</a><a href="shop.html?color=Lavender">Lavender</a><a href="shop.html?color=Gold">Gold</a><a href="shop.html?color=Black">Black</a></div>
              <a class="feat" href="shop.html" style="background-image:url('prod05.jpg')"><span>The Heritage Collection</span><small>Curated occasion edits →</small></a>
            </div></div>
          </div>
          <a class="nav-link" href="shop.html">New Arrivals</a>
          <a class="nav-link" href="shop.html">Anarkali</a>
          <a class="nav-link" href="shop.html">Suit Sets</a>
          <a class="nav-link" href="shop.html">Occasion Wear</a>
          <a class="nav-link" href="index.html#story">Our Story</a>
          <a class="nav-link" href="index.html#help">Help</a>
        </div>
      </nav>
    </div>
  </header>`;

  const FOOTER = `
  <footer class="site">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-about">
          <a class="logo" href="index.html" style="margin-bottom:14px"><svg viewBox="0 0 100 100" width="40" height="40" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#C0396B"/><g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M50 30 C40 38 40 52 50 60 C60 52 60 38 50 30Z"/><path d="M50 60 C42 54 34 58 36 66 C44 68 50 66 50 60Z"/><path d="M50 60 C58 54 66 58 64 66 C56 68 50 66 50 60Z"/></g></svg><span class="word" style="font-size:19px">Heritage By Aemli<small>Celebrate in Craft</small></span></a>
          <p>Handcrafted Indian ethnic wear for women — anarkali, angrakha &amp; suit sets for every celebration. Made in India, finished by hand.</p>
          <div class="foot-social">
            <a href="https://www.instagram.com/heritage_by_aemli" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/></svg></a>
            <a href="https://www.pinterest.com/heritage_by_aemli/" aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7c-2 0-3.5 1.5-3.5 3.5 0 1 .5 2 1.5 2.3M12 7c2 0 3.5 1.5 3.5 3.5M9.5 17l1.5-6"/></svg></a>
            <a href="https://wa.me/917770946463" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/></svg></a>
          </div>
        </div>
        <div><h4>Shop</h4><a href="shop.html">Anarkali Sets</a><a href="shop.html">Angrakha Sets</a><a href="shop.html">Suit Sets</a><a href="shop.html">Skirt Sets</a><a href="shop.html">New Arrivals</a><a href="shop.html">The Heritage Collection</a></div>
        <div><h4>Company</h4><a href="index.html#story">Our Story</a><a href="index.html#story">Journal</a><a href="index.html#story">Careers</a><a href="index.html#story">Press</a><a href="index.html#story">Sustainability</a></div>
        <div><h4>Support</h4><a href="index.html#help">Help Center</a><a href="cart.html">Size Guide</a><a href="index.html#help">Shipping</a><a href="cart.html">Returns</a><a href="index.html#help">Contact</a></div>
        <div><h4>We Accept</h4><div class="pay"><span>UPI</span><span>Visa</span><span>Mastercard</span><span>COD</span><span>EMI</span></div><p style="color:var(--muted);font-size:13px;margin-top:12px">Free shipping above ₹2,999 · Secure encrypted payments</p></div>
      </div>
      <div class="foot-bottom"><span>© 2026 Heritage By Aemli · Visko Textile Industries. All rights reserved.</span><span><a href="index.html#story">Privacy</a> · <a href="index.html#story">Terms</a> · <a href="index.html#story">Refunds</a></span></div>
    </div>
  </footer>
  <nav class="mobnav" aria-label="Mobile">
    <a href="index.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>Home</a>
    <a href="shop.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>Shop</a>
    <a href="wishlist.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9C1 9 3 5 7 5c2 0 3 1 5 3 2-2 3-3 5-3 4 0 6 4 4.5 7C19 16.5 12 21 12 21z"/></svg>Wish</a>
    <a href="cart.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-2 9H8L6 3H3"/><circle cx="10" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>Cart</a>
    <a href="account.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>Account</a>
  </nav>`;

  const star = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .5-5.3 4.6 1.7 6.9L12 17.8 5.6 20.5l1.7-6.9L2 9l7-.5z"/></svg>';
  function starsHTML(r){ return star.repeat(Math.round(r)) + ' <b style="color:var(--ink)">'+r.toFixed(1)+'</b>'; }

  function productCard(p){
    const off = S.discount(p), emi = S.emi(p), wish = S.inWishlist(p.id);
    return `<article class="card"><div class="media"><span class="badge">${p.badge}</span>
      <div class="media-actions">
        <button class="round ${wish?'active':''}" aria-label="Wishlist" onclick="AEMLI_UI.toggleWish(${p.id},this)">${heart(wish)}</button>
        <button class="round" aria-label="Quick view" onclick="AEMLI_UI.openQuickView(${p.id})"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></button>
      </div>
      <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
      <button class="quick" onclick="AEMLI_UI.openQuickView(${p.id})">Quick View</button>
    </div>
    <div class="body"><span class="coll">${p.collection}</span><a class="name" href="product.html?id=${p.id}">${p.name}</a>
      <span class="stars">${starsHTML(p.rating)} <span>(${p.reviews})</span></span>
      <div class="price-row"><span class="price">${S.formatINR(p.price)}</span><span class="mrp">${S.formatINR(p.mrp)}</span><span class="off">${off}% OFF</span></div>
      <span class="emi">No Cost EMI from ${S.formatINR(emi)}/mo</span>
      <button class="add" onclick="AEMLI_UI.addFromCard(${p.id})">Add to Cart</button>
    </div></article>`;
  }
  function heart(on){ return `<svg width="18" height="18" viewBox="0 0 24 24" fill="${on?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9C1 9 3 5 7 5c2 0 3 1 5 3 2-2 3-3 5-3 4 0 6 4 4.5 7C19 16.5 12 21 12 21z"/></svg>`; }

  function toast(msg){ let t=document.getElementById('toast'); if(!t){t=document.createElement('div');t.className='toast';t.id='toast';document.body.appendChild(t);} t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2600); }

  function updateHeader(){
    const cc=document.getElementById('cartCount'), wc=document.getElementById('wishCount');
    if(cc) cc.textContent=S.cartCount(); if(wc) wc.textContent=S.wishCount();
    const acc=document.getElementById('accLink');
    if(acc) acc.href = S.isLoggedIn() ? 'account.html' : 'login.html';
    document.querySelectorAll('.mobnav a').forEach(a=>{ if(a.getAttribute('href')==='account.html' && !S.isLoggedIn()) a.setAttribute('href','login.html'); });
  }

  function openQuickView(id){
    const p=S.byId(id); if(!p) return;
    let m=document.getElementById('aemliModal');
    if(!m){ m=document.createElement('div'); m.className='modal'; m.id='aemliModal'; m.innerHTML='<div class="modal-box"><button class="modal-close" aria-label="Close" onclick="document.getElementById(\'aemliModal\').classList.remove(\'show\')">×</button><img id="mV" src="" alt=""><div class="modal-info" id="mI"></div></div>';
      m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show');}); document.body.appendChild(m); }
    document.getElementById('mV').src=p.img; document.getElementById('mV').alt=p.name;
    document.getElementById('mI').innerHTML=`
      <p class="coll">${p.collection}</p><h3>${p.name}</h3>
      <div class="stars">${starsHTML(p.rating)} <span>(${p.reviews})</span></div>
      <div class="price-row"><span class="price">${S.formatINR(p.price)}</span><span class="mrp">${S.formatINR(p.mrp)}</span><span class="off">${S.discount(p)}% OFF</span></div>
      <p class="emi">No Cost EMI from ${S.formatINR(S.emi(p))}/mo</p>
      <ul><li>3-piece set: kurta, dupatta &amp; bottom</li><li>Hand-finished artisan detailing</li><li>Breathable premium fabric</li></ul>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="AEMLI_UI.addFromCard(${p.id});document.getElementById('aemliModal').classList.remove('show')">Add to Cart</button>
        <a class="btn btn-outline" href="product.html?id=${p.id}" onclick="document.getElementById('aemliModal').classList.remove('show')">View Details</a>
      </div>`;
    m.classList.add('show');
  }

  function addFromCard(id){ S.addToCart(id,'M',1); toast('Added to bag ✿'); }
  function toggleWish(id,el){ const on=S.toggleWishlist(id); el.classList.toggle('active',on); el.innerHTML=heart(on); toast(on?'Saved to wishlist ♡':'Removed from wishlist'); }
  function search(e){ e.preventDefault(); const v=document.getElementById('q').value.trim(); location.href='shop.html?q='+encodeURIComponent(v); }
  function toggleMenu(){
    let m=document.getElementById('mobileMenu');
    if(!m){ m=document.createElement('div'); m.id='mobileMenu'; m.style.cssText='position:fixed;inset:0;background:rgba(43,34,48,.96);z-index:200;display:flex;flex-direction:column;justify-content:center;gap:6px;padding:30px';
      m.innerHTML='<button onclick="AEMLI_UI.toggleMenu()" style="position:absolute;top:20px;right:24px;background:none;border:0;color:#fff;font-size:30px">×</button>'+
      ['index.html','shop.html','wishlist.html','cart.html','account.html','login.html','register.html'].map(h=>{
        const t={ 'index.html':'Home','shop.html':'Shop','wishlist.html':'Wishlist','cart.html':'Cart','account.html':'Account','login.html':'Login','register.html':'Register'}[h];
        return `<a href="${h}" style="color:#fff;font-family:var(--serif);font-size:30px;padding:12px 0">${t}</a>`; }).join('');
      m.addEventListener('click',e=>{if(e.target===m)m.remove();}); document.body.appendChild(m);
    } else { m.remove(); }
  }

  // header scroll state
  function onScroll(){ const h=document.getElementById('header'); if(!h) return; if(scrollY>40){h.classList.add('solid');h.classList.remove('top');}else{h.classList.add('top');h.classList.remove('solid');} }

  function mount(){
    const sh=document.getElementById('siteHeader'); if(sh) sh.outerHTML=HEADER;
    const sf=document.getElementById('siteFooter'); if(sf) sf.outerHTML=FOOTER;
    updateHeader();
    onScroll(); addEventListener('scroll',onScroll);
    document.addEventListener('aemli:update',updateHeader);
    // active nav
    const page=document.body.getAttribute('data-page');
    if(page){ document.querySelectorAll('.nav-link').forEach(a=>{ if(a.getAttribute('href')===page+'.html') a.classList.add('active'); }); }
  }

  window.AEMLI_UI={ productCard, toast, updateHeader, openQuickView, addFromCard, toggleWish, search, toggleMenu, mount, starsHTML, heart };
  document.addEventListener('DOMContentLoaded', mount);
})();
