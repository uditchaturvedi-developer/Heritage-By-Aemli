:root{
  --rose:#C0396B; --rose-dark:#9E2A56; --green:#1F4E3D; --gold:#B8893B;
  --ink:#2B2230; --blush:#F7E7EC; --ivory:#FCFAF7; --paper:#fff;
  --muted:#7A6E78; --line:#ECE3E7;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  --maxw:1280px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:var(--sans);color:var(--ink);background:var(--ivory);line-height:1.65;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer}
h1,h2,h3,h4{font-family:var(--serif);font-weight:600;line-height:1.1;margin:0}
.container{max-width:var(--maxw);margin:0 auto;padding:0 28px}
.kicker{font-family:var(--sans);letter-spacing:.32em;text-transform:uppercase;font-size:11px;font-weight:600;color:var(--rose)}
.num{font-family:var(--serif);font-style:italic;font-size:15px;color:var(--gold)}
.skip{position:absolute;left:-999px;top:0;background:var(--ink);color:#fff;padding:10px 16px;z-index:300}
.skip:focus{left:12px;top:12px}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--gold);outline-offset:2px}

/* ANNOUNCEMENT */
.announce{background:var(--ink);color:#fff;font-size:12.5px;text-align:center;padding:9px 16px;position:relative;letter-spacing:.02em}
.announce b{color:var(--gold)}
.announce button{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:0;color:#fff;font-size:16px;opacity:.7}
.announce button:hover{opacity:1}

/* HEADER */
header.site{position:sticky;top:0;z-index:100;transition:.3s;border-bottom:1px solid transparent}
header.site.top{background:transparent}
header.site.solid{background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-color:var(--line);box-shadow:0 8px 30px rgba(43,34,48,.07)}
.bar{display:flex;align-items:center;gap:18px;padding:14px 0}
.logo{display:flex;align-items:center;gap:10px}
.logo svg{width:44px;height:44px;flex:0 0 auto}
.logo .word{font-family:var(--serif);font-size:23px;font-weight:700;line-height:1}
.logo .word small{display:block;font-family:var(--sans);font-size:9px;letter-spacing:.3em;color:var(--rose);font-weight:600;text-transform:uppercase}
.search{flex:1;display:flex;align-items:center;gap:8px;border-radius:999px;padding:10px 18px;max-width:520px;transition:.3s}
header.top .search{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4)}
header.solid .search{background:var(--blush);border:1px solid var(--line)}
.search input{border:0;background:none;outline:none;flex:1;font-size:14px}
header.top .search input,header.top .search svg{color:#fff}
header.solid .search input,header.solid .search svg{color:var(--ink)}
.icons{display:flex;align-items:center;gap:6px;margin-left:auto}
.icon-btn{position:relative;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;transition:.2s}
header.top .icon-btn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.4);color:#fff}
header.solid .icon-btn{background:#fff;border:1px solid var(--line);color:var(--ink)}
.icon-btn:hover{border-color:var(--rose)!important;color:var(--rose)!important}
.icon-btn .badge{position:absolute;top:-3px;right:-3px;background:var(--rose);color:#fff;font-size:10px;font-weight:700;min-width:18px;height:18px;border-radius:9px;display:grid;place-items:center;padding:0 4px}
.wa-btn{display:inline-flex;align-items:center;gap:8px;background:var(--green);color:#fff;border:0;border-radius:999px;padding:11px 18px;font-weight:600;font-size:13px;transition:.2s}
.wa-btn:hover{background:#163a2e}
.hamburger{display:none}
nav.main{border-top:1px solid transparent;transition:.3s}
header.solid nav.main{border-color:var(--line)}
.nav-inner{display:flex;gap:2px;align-items:center;padding:2px 0}
.nav-link{padding:15px 16px;font-size:13.5px;font-weight:600;transition:.2s}
header.top .nav-link{color:rgba(255,255,255,.92)}
header.solid .nav-link{color:var(--ink)}
.nav-link:hover,.nav-link.active{color:var(--rose)!important}
.has-mega{position:static}
.mega{position:absolute;left:0;right:0;top:100%;background:#fff;border-top:1px solid var(--line);box-shadow:0 18px 50px rgba(43,34,48,.14);padding:30px 0;display:none;z-index:90}
.has-mega:hover .mega,.has-mega:focus-within .mega{display:block}
.mega-grid{display:grid;grid-template-columns:repeat(4,1fr) 1.1fr;gap:30px}
.mega h4{font-family:var(--sans);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--rose);margin:0 0 12px}
.mega a{display:block;padding:6px 0;color:var(--muted);font-size:14px}
.mega a:hover{color:var(--ink)}
.mega .feat{background-size:cover;background-position:center;color:#fff;border-radius:14px;padding:20px;display:flex;flex-direction:column;justify-content:flex-end;min-height:210px;position:relative;overflow:hidden}
.mega .feat::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.55))}
.mega .feat span{position:relative;font-family:var(--serif);font-size:21px;font-weight:600}
.mega .feat small{position:relative;font-family:var(--sans);font-size:12px;opacity:.9}

/* HERO */
.hero{position:relative;min-height:90vh;display:flex;align-items:center;color:#fff;background-size:cover;background-position:center top;overflow:hidden}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,rgba(33,22,30,.82) 0%,rgba(33,22,30,.45) 42%,rgba(33,22,30,.05) 75%)}
.hero .inner{position:relative;z-index:2;padding:90px 0;max-width:640px}
.hero .kicker{color:var(--gold)}
.hero h1{font-size:clamp(44px,7vw,96px);color:#fff;margin:14px 0;font-weight:600}
.hero h1 em{font-style:italic;color:var(--blush);font-weight:500}
.hero p{font-size:18px;max-width:460px;opacity:.95;margin:0 0 30px;font-weight:300}
.hero .cta{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:15px 30px;font-weight:600;font-size:14.5px;border:1.5px solid transparent;transition:.25s}
.btn-primary{background:var(--rose);color:#fff}
.btn-primary:hover{background:var(--rose-dark)}
.btn-ghost{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.65)}
.btn-ghost:hover{background:rgba(255,255,255,.22)}
.btn-outline{background:#fff;color:var(--ink);border-color:var(--line)}
.btn-outline:hover{border-color:var(--rose);color:var(--rose)}
.btn-block{width:100%}
.btn:disabled{opacity:.5;cursor:not-allowed}
.side-label{position:absolute;right:26px;top:50%;transform:translateY(-50%) rotate(90deg);transform-origin:right center;font-family:var(--sans);font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.7);z-index:2}
.scrollcue{position:absolute;left:28px;bottom:26px;z-index:2;font-family:var(--sans);font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.7);display:flex;align-items:center;gap:10px}
.scrollcue::before{content:"";width:40px;height:1px;background:rgba(255,255,255,.6)}

/* SECTIONS */
.ed{padding:96px 0}
.ed-head{max-width:720px;margin:0 auto 48px;text-align:center}
.ed-head h2{font-size:clamp(34px,5vw,58px);margin:12px 0}
.ed-head p{color:var(--muted);font-size:16px}
.manifesto{display:grid;grid-template-columns:1.3fr .9fr;gap:50px;align-items:center}
.manifesto .big{font-family:var(--serif);font-size:clamp(30px,4vw,52px);line-height:1.18;font-weight:500}
.manifesto .big em{font-style:italic;color:var(--rose)}
.manifesto .side p{color:var(--muted);margin:0 0 18px}
.manifesto .side .drop::first-letter{font-family:var(--serif);font-size:64px;float:left;line-height:.8;padding:6px 12px 0 0;color:var(--rose)}

/* OCCASION */
.occasion{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:230px;gap:14px}
.occ{position:relative;border-radius:16px;overflow:hidden;display:flex;align-items:flex-end;color:#fff;background-size:cover;background-position:center}
.occ::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.62))}
.occ .meta{position:relative;z-index:2;padding:18px}
.occ .meta .num{display:block;margin-bottom:4px}
.occ .meta b{font-family:var(--serif);font-size:23px;font-weight:600;display:block}
.occ .meta small{font-family:var(--sans);font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.85}
.occ.big{grid-column:span 3;grid-row:span 2}
.occ.wide{grid-column:span 3}
.occ.sm{grid-column:span 2}

/* BAND */
.band{position:relative;min-height:460px;display:flex;align-items:center;color:#fff;background-size:cover;background-position:center;overflow:hidden}
.band::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(31,78,61,.85),rgba(31,78,61,.25))}
.band .inner{position:relative;z-index:2;max-width:560px;padding:70px 0}
.band h2{font-size:clamp(34px,5vw,60px);color:#fff;margin:12px 0}
.band p{opacity:.95;font-weight:300;font-size:17px;margin:0 0 26px}

/* SPOTLIGHT */
.spotlight{display:grid;grid-template-columns:1.05fr .95fr;gap:0;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(43,34,48,.10)}
.spotlight .ph{background-size:cover;background-position:center;min-height:560px}
.spotlight .info{padding:60px 56px;display:flex;flex-direction:column;justify-content:center}
.spotlight .info .coll{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.spotlight .info h3{font-size:clamp(30px,3.6vw,46px);margin:10px 0}
.spotlight .stars{display:flex;align-items:center;gap:6px;color:var(--gold);font-size:13px;margin:6px 0 18px}
.spotlight .stars b{color:var(--ink)}
.price-row{display:flex;align-items:baseline;gap:10px;margin-bottom:6px;flex-wrap:wrap}
.price{font-size:26px;font-weight:700}
.mrp{font-size:15px;color:var(--muted);text-decoration:line-through}
.off{font-size:13px;font-weight:700;color:var(--rose)}
.emi{font-size:12px;color:var(--muted);margin-bottom:22px}
.spec{list-style:none;padding:0;margin:0 0 26px;border-top:1px solid var(--line)}
.spec li{padding:11px 0;border-bottom:1px solid var(--line);color:var(--muted);font-size:14px;display:flex;gap:10px}
.spec li svg{flex:0 0 auto;color:var(--rose)}
.spotlight .cta{display:flex;gap:12px;flex-wrap:wrap}

/* PRODUCT GRID + CARD */
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.card{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;transition:.22s;display:flex;flex-direction:column}
.card:hover{box-shadow:0 14px 36px rgba(43,34,48,.10);transform:translateY(-4px)}
.card .media{position:relative;aspect-ratio:3/4;background:var(--blush);overflow:hidden}
.card .media img{width:100%;height:100%;object-fit:cover;transition:.5s}
.card:hover .media img{transform:scale(1.06)}
.badge{position:absolute;top:12px;left:12px;background:var(--rose);color:#fff;font-size:10.5px;font-weight:700;padding:5px 11px;border-radius:999px;letter-spacing:.04em}
.media-actions{position:absolute;top:12px;right:12px;display:flex;flex-direction:column;gap:8px;opacity:0;transform:translateY(-6px);transition:.2s}
.card:hover .media-actions{opacity:1;transform:none}
.round{width:38px;height:38px;border-radius:50%;background:#fff;border:0;display:grid;place-items:center;box-shadow:0 6px 18px rgba(0,0,0,.12);color:var(--ink)}
.round:hover{color:var(--rose)}
.round.active{color:var(--rose)}
.quick{position:absolute;left:12px;right:12px;bottom:12px;background:#fff;color:var(--ink);border:0;border-radius:999px;padding:11px;font-weight:600;font-size:13px;opacity:0;transform:translateY(8px);transition:.2s}
.card:hover .quick{opacity:1;transform:none}
.card .body{padding:15px 16px 17px;display:flex;flex-direction:column;gap:6px;flex:1}
.coll{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.name{font-family:var(--serif);font-size:18.5px;font-weight:600;line-height:1.2}
.stars{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted)}
.stars svg{color:var(--gold)}
.price-row{display:flex;align-items:baseline;gap:8px;margin-top:2px}
.price{font-size:18px;font-weight:700}
.mrp{font-size:13px;color:var(--muted);text-decoration:line-through}
.off{font-size:12px;font-weight:700;color:var(--rose)}
.emi{font-size:11px;color:var(--muted)}
.add{margin-top:auto;background:var(--ink);color:#fff;border:0;border-radius:999px;padding:11px;font-weight:600;font-size:13px;transition:.2s}
.add:hover{background:var(--rose)}

/* COLOUR / TRUST / REVIEWS / LOOKBOOK (home) */
.colour{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.swatch{border-radius:16px;overflow:hidden;background:#fff;border:1px solid var(--line)}
.swatch .chip{height:220px;display:flex;align-items:flex-end;padding:18px;color:#fff}
.swatch .chip b{font-family:var(--serif);font-size:24px;font-weight:600}
.swatch .txt{padding:20px}.swatch .txt p{color:var(--muted);font-size:14px;margin:0}
.trust{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;text-align:center}
.trust .t{background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px 12px}
.trust .t svg{color:var(--rose);width:30px;height:30px;margin-bottom:8px}
.trust .t b{display:block;font-size:13.5px}.trust .t small{color:var(--muted);font-size:12px}
.reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.rev{background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px}
.rev .stars{margin-bottom:14px;color:var(--gold)}
.rev .q{font-family:var(--serif);font-size:22px;line-height:1.32;font-weight:500;margin:0 0 16px}
.rev .who{font-size:13px;color:var(--muted)}.rev .who b{color:var(--ink)}
.lookbook{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.look{position:relative;aspect-ratio:3/4;border-radius:14px;overflow:hidden;background-size:cover;background-position:center}
.look::after{content:"";position:absolute;inset:0;background:rgba(33,22,30,0);transition:.3s}
.look:hover::after{background:rgba(33,22,30,.2)}
.look .cap{position:absolute;left:14px;bottom:14px;color:#fff;z-index:2;font-family:var(--sans);font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:0;transition:.3s}
.look:hover .cap{opacity:1}
.help{background:var(--blush);border-radius:22px;padding:60px;text-align:center}
.help h2{font-size:clamp(30px,4vw,48px)}.help p{color:var(--muted);max-width:520px;margin:14px auto 24px}
.news{background:var(--green);color:#fff;border-radius:22px;padding:60px;text-align:center;margin:0 28px}
.news h2{color:#fff}.news p{opacity:.9;max-width:460px;margin:12px auto 22px}
.news form{display:flex;gap:10px;max-width:460px;margin:0 auto;flex-wrap:wrap;justify-content:center}
.news input{flex:1;min-width:220px;border:0;border-radius:999px;padding:15px 18px;font-size:14px}
.news .btn-primary{background:var(--rose)}

/* ===== SHOP / PLP ===== */
.shop-hero{padding:54px 0 30px;text-align:center;background:var(--blush)}
.shop-hero h1{font-size:clamp(34px,5vw,56px)}
.shop-layout{display:grid;grid-template-columns:250px 1fr;gap:34px;padding:40px 0}
.filters{position:sticky;top:120px;align-self:start}
.filters h4{font-family:var(--sans);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--rose);margin:22px 0 10px;border-bottom:1px solid var(--line);padding-bottom:8px}
.filters h4:first-child{margin-top:0}
.filters label{display:flex;align-items:center;gap:9px;padding:6px 0;font-size:14px;color:var(--muted);cursor:pointer}
.filters input[type=checkbox]{accent-color:var(--rose);width:16px;height:16px}
.filters .clear{margin-top:18px;background:none;border:0;color:var(--rose);font-weight:600;font-size:13px;cursor:pointer;padding:0}
.toolbar{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px;flex-wrap:wrap}
.toolbar .count{color:var(--muted);font-size:14px}
.toolbar select{padding:10px 14px;border-radius:999px;border:1px solid var(--line);background:#fff;font-family:inherit;font-size:14px}
.pagination{display:flex;justify-content:center;gap:8px;margin-top:40px}
.pagination button{min-width:42px;height:42px;border-radius:10px;border:1px solid var(--line);background:#fff;font-weight:600;cursor:pointer}
.pagination button.active{background:var(--rose);color:#fff;border-color:var(--rose)}
.empty{text-align:center;padding:80px 20px;color:var(--muted)}

/* ===== PDP ===== */
.pdp{display:grid;grid-template-columns:1.05fr .95fr;gap:50px;padding:46px 0;align-items:start}
.gallery .main-img{border-radius:18px;overflow:hidden;aspect-ratio:3/4;background:var(--blush)}
.gallery .main-img img{width:100%;height:100%;object-fit:cover}
.thumbs{display:flex;gap:10px;margin-top:12px}
.thumbs img{width:74px;height:96px;object-fit:cover;border-radius:10px;border:2px solid transparent;cursor:pointer}
.thumbs img.active{border-color:var(--rose)}
.pdp-info .coll{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.pdp-info h1{font-size:clamp(30px,4vw,46px);margin:10px 0}
.pdp-info .stars{display:flex;align-items:center;gap:8px;color:var(--gold);margin:8px 0 16px}
.pdp-info .stars b{color:var(--ink)}
.size-row{margin:18px 0}
.size-row .lbl{font-size:13px;font-weight:600;margin-bottom:8px;display:flex;justify-content:space-between}
.size-row .lbl a{color:var(--rose);font-weight:600}
.sizes{display:flex;gap:8px;flex-wrap:wrap}
.sizes button{min-width:48px;height:44px;border-radius:10px;border:1px solid var(--line);background:#fff;font-weight:600;cursor:pointer}
.sizes button.active{border-color:var(--rose);background:var(--rose);color:#fff}
.sizes button:disabled{opacity:.35;cursor:not-allowed;text-decoration:line-through}
.pdp-cta{display:flex;gap:12px;margin:22px 0;flex-wrap:wrap}
.qty{display:flex;align-items:center;gap:0;border:1px solid var(--line);border-radius:999px;overflow:hidden}
.qty button{width:42px;height:46px;border:0;background:#fff;font-size:18px;cursor:pointer}
.qty span{min-width:44px;text-align:center;font-weight:600}
.acc{margin-top:24px;border-top:1px solid var(--line)}
.acc details{border-bottom:1px solid var(--line);padding:14px 0}
.acc summary{cursor:pointer;font-weight:600;font-size:15px;list-style:none}
.acc summary::-webkit-details-marker{display:none}
.acc p{color:var(--muted);font-size:14px;margin:10px 0 0}
.related{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:20px}
.related .name{font-size:16px}
.sticky-buy{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid var(--line);box-shadow:0 -8px 30px rgba(0,0,0,.08);z-index:90;display:none;align-items:center;gap:14px;padding:12px 28px}
.sticky-buy.show{display:flex}
.sticky-buy img{width:48px;height:60px;object-fit:cover;border-radius:8px}
.sticky-buy .si-name{font-family:var(--serif);font-size:16px;font-weight:600}
.sticky-buy .si-price{font-weight:700}
.sticky-buy .btn{margin-left:auto}

/* ===== CART / WISHLIST ===== */
.cart-layout{display:grid;grid-template-columns:1fr 360px;gap:40px;padding:40px 0;align-items:start}
.cart-list{display:flex;flex-direction:column;gap:18px}
.cart-item{display:grid;grid-template-columns:120px 1fr auto;gap:18px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px;align-items:center}
.cart-item img{width:120px;height:150px;object-fit:cover;border-radius:10px}
.cart-item .ci-name{font-family:var(--serif);font-size:19px;font-weight:600}
.cart-item .ci-meta{color:var(--muted);font-size:13px;margin:4px 0}
.cart-item .ci-price{font-weight:700;font-size:16px}
.cart-item .ci-actions{display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.remove{background:none;border:0;color:var(--rose);font-size:13px;cursor:pointer;font-weight:600}
.summary{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;position:sticky;top:120px}
.summary h3{font-size:22px;margin-bottom:16px}
.summary .row{display:flex;justify-content:space-between;padding:9px 0;color:var(--muted);font-size:14px}
.summary .row.total{border-top:1px solid var(--line);margin-top:8px;padding-top:14px;color:var(--ink);font-weight:700;font-size:17px}
.summary .free{color:var(--green);font-weight:600}
.empty-box{text-align:center;padding:70px 20px;color:var(--muted)}
.empty-box .btn{margin-top:18px}

/* ===== AUTH ===== */
.auth-wrap{display:flex;justify-content:center;padding:70px 20px}
.auth-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:44px;width:100%;max-width:440px;box-shadow:0 20px 60px rgba(43,34,48,.08)}
.auth-card h1{font-size:36px;text-align:center;margin-bottom:6px}
.auth-card .sub{text-align:center;color:var(--muted);font-size:14px;margin-bottom:26px}
.field{margin-bottom:16px}
.field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field input{width:100%;padding:13px 16px;border:1px solid var(--line);border-radius:12px;font-family:inherit;font-size:14px}
.field input:focus{outline:none;border-color:var(--rose)}
.auth-card .btn{margin-top:8px}
.auth-alt{text-align:center;margin-top:18px;font-size:14px;color:var(--muted)}
.auth-alt a{color:var(--rose);font-weight:600}
.auth-msg{text-align:center;font-size:13px;margin-top:12px;min-height:18px}
.auth-msg.err{color:#C0392B}.auth-msg.ok{color:var(--green)}
.account-card{max-width:560px}
.account-card .prof{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.account-card .avatar{width:64px;height:64px;border-radius:50%;background:var(--rose);color:#fff;display:grid;place-items:center;font-family:var(--serif);font-size:28px;font-weight:700}
.account-card .ord{background:var(--blush);border-radius:12px;padding:16px;color:var(--muted);font-size:14px;margin-top:14px}

/* ===== FOOTER ===== */
footer.site{background:#fff;border-top:1px solid var(--line);padding:60px 0 26px;margin-top:96px}
.foot-grid{display:grid;grid-template-columns:1.5fr repeat(3,1fr) 1.3fr;gap:30px}
.foot-grid h4{font-family:var(--sans);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--rose);margin:0 0 14px}
.foot-grid a{display:block;color:var(--muted);padding:5px 0;font-size:14px}
.foot-grid a:hover{color:var(--ink)}
.foot-about p{color:var(--muted);font-size:14px}
.foot-social{display:flex;gap:10px;margin-top:14px}
.foot-social a{width:40px;height:40px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;color:var(--ink)}
.foot-social a:hover{border-color:var(--rose);color:var(--rose)}
.pay{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.pay span{background:var(--blush);border:1px solid var(--line);border-radius:8px;padding:6px 10px;font-size:11px;font-weight:600;color:var(--muted)}
.foot-bottom{border-top:1px solid var(--line);margin-top:36px;padding-top:18px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;color:var(--muted);font-size:13px}

/* MOBILE NAV + TOAST + MODAL */
.mobnav{display:none;position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid var(--line);z-index:120;justify-content:space-around;padding:8px 0;box-shadow:0 -6px 20px rgba(0,0,0,.06)}
.mobnav a{display:flex;flex-direction:column;align-items:center;gap:3px;font-size:11px;color:var(--muted)}
.mobnav a svg{width:22px;height:22px}
.mobnav a.active,.mobnav a:hover{color:var(--rose)}
.toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--ink);color:#fff;padding:13px 22px;border-radius:999px;font-size:14px;font-weight:600;opacity:0;pointer-events:none;transition:.3s;z-index:300;box-shadow:0 18px 50px rgba(43,34,48,.14)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.modal{position:fixed;inset:0;background:rgba(43,34,48,.55);display:none;place-items:center;z-index:200;padding:20px}
.modal.show{display:grid}
.modal-box{background:#fff;border-radius:18px;max-width:760px;width:100%;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;max-height:90vh}
.modal-box img{width:100%;height:100%;object-fit:cover}
.modal-info{padding:28px;overflow:auto}
.modal-info .price-row{margin:10px 0}
.modal-info ul{margin:12px 0;padding-left:18px;color:var(--muted);font-size:14px}
.modal-close{position:absolute;top:14px;right:18px;background:#fff;border:0;border-radius:50%;width:36px;height:36px;font-size:18px;box-shadow:0 6px 18px rgba(0,0,0,.12);z-index:3}

@media(max-width:1024px){
  .occasion{grid-template-columns:repeat(4,1fr)}
  .occ.big{grid-column:span 2;grid-row:span 2}.occ.wide{grid-column:span 2}.occ.sm{grid-column:span 2}
  .trust,.grid,.related{grid-template-columns:repeat(3,1fr)}
  .reviews{grid-template-columns:repeat(2,1fr)}
  .spotlight{grid-template-columns:1fr}.spotlight .ph{min-height:380px}
  .cart-layout{grid-template-columns:1fr}.summary{position:static}
  .foot-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:760px){
  .search{display:none}.wa-btn span{display:none}.hamburger{display:grid}
  nav.main,.nav-inner{display:none}
  .manifesto{grid-template-columns:1fr;gap:24px}
  .occasion{grid-template-columns:repeat(2,1fr)}
  .occ.big,.occ.wide,.occ.sm{grid-column:span 2;grid-row:auto}
  .grid,.related{grid-template-columns:repeat(2,1fr);gap:14px}
  .lookbook{grid-template-columns:repeat(2,1fr)}
  .trust{grid-template-columns:repeat(2,1fr)}
  .reviews,.colour{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
  .mobnav{display:flex}body{padding-bottom:64px}
  .ed{padding:60px 0}.side-label,.scrollcue{display:none}
  .help,.news{margin:0 14px;padding:36px 22px}
  .shop-layout{grid-template-columns:1fr}.filters{position:static;display:none}
  .pdp{grid-template-columns:1fr;gap:26px}
  .sticky-buy .si-name{font-size:14px}
  .cart-item{grid-template-columns:90px 1fr;}.cart-item img{width:90px;height:112px}
  .cart-item .ci-actions{grid-column:1/-1;flex-direction:row;justify-content:space-between;align-items:center}
  .modal-box{grid-template-columns:1fr;max-height:85vh}.modal-box img{aspect-ratio:3/4;max-height:240px}
}
