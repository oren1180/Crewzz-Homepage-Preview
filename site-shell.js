(() => {
  const shellStyle = document.createElement('style');
  shellStyle.textContent = '.privacy-dock{position:fixed;right:12px;bottom:12px;z-index:90}.privacy-dock button{border:1px solid rgba(255,255,255,.32);background:#101719;color:#fff;border-radius:30px;padding:10px 14px;font:600 11px Manrope,Arial,sans-serif;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.18)}.footer{background:#101719;color:#fff;padding:60px clamp(22px,7vw,110px) 28px;font-family:Manrope,Arial,sans-serif}.footer-grid{display:grid;grid-template-columns:1.5fr repeat(3,1fr);gap:42px;max-width:1280px;margin:auto}.footer img{width:155px}.footer strong{display:block;margin-bottom:13px}.footer a{display:block;text-decoration:none;color:#b9c0c1;margin:7px 0}.footer-bottom{border-top:1px solid rgba(255,255,255,.12);max-width:1280px;margin:40px auto 0;padding-top:20px;color:#8e989a;font-size:12px;display:flex;justify-content:space-between;gap:30px}.shell-menu-panel{display:flex;min-height:100%;flex-direction:column;color:#fff}.shell-menu-eyebrow{margin:0 0 12px!important;color:#52cca9!important;font:700 11px/1.2 Manrope,Arial,sans-serif!important;letter-spacing:.16em!important;text-transform:uppercase}.shell-menu-panel h2{margin:0 0 22px!important;color:#fff!important;font-size:clamp(30px,3vw,48px)!important;line-height:1.02!important;letter-spacing:-.04em!important}.shell-menu-film{position:relative;display:block;margin:0 0 20px;text-decoration:none;overflow:hidden;background:#073b4c}.shell-menu-film img{display:block;width:100%!important;aspect-ratio:16/9!important;object-fit:cover!important;margin:0!important;filter:brightness(1.08)}.shell-menu-film span{position:absolute;left:50%;top:50%;display:grid;width:68px;height:68px;translate:-50% -50%;place-items:center;border-radius:50%;background:rgba(255,255,255,.94);color:#101719;font-size:22px;padding-left:3px;box-shadow:0 10px 35px rgba(0,0,0,.3)}.shell-menu-apply{align-self:flex-start;display:inline-block;margin:0 0 28px;padding:12px 0 9px;border-bottom:2px solid #52cca9;color:#fff!important;text-decoration:none!important;font:700 13px/1.2 Manrope,Arial,sans-serif;letter-spacing:.02em}.shell-menu-contact{display:grid;gap:4px;margin-top:auto;padding-top:22px;border-top:1px solid rgba(255,255,255,.15);font:500 13px/1.5 Manrope,Arial,sans-serif}.shell-menu-contact strong{margin-bottom:5px;text-transform:uppercase;letter-spacing:.08em}.shell-menu-contact a{color:#d7d7d7!important;text-decoration:none!important}.shell-menu-contact address{margin-top:5px;color:#9da7aa;font-style:normal}.shell-menu-legal{display:flex;flex-wrap:wrap;gap:5px 14px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.shell-menu-legal a{color:#aeb7b9!important;text-decoration:none!important;font:600 10px/1.4 Manrope,Arial,sans-serif!important;letter-spacing:.04em}.shell-menu-foot{display:flex;justify-content:space-between;gap:18px;margin-top:15px;color:#7f8b8e;font:500 9px/1.5 Manrope,Arial,sans-serif}.menu-aside>.shell-menu-panel{padding-bottom:28px}.journey-panel>.shell-menu-panel{min-height:auto}@media(max-width:850px){.footer-grid{grid-template-columns:1fr}.footer-bottom{display:block}.journey-panel{display:block!important}.shell-menu-panel h2{font-size:30px!important}.shell-menu-film span{width:56px;height:56px}.shell-menu-foot{display:block}.shell-menu-foot span{display:block}.menu-aside>.shell-menu-panel{padding-bottom:52px}}';
  document.head.append(shellStyle);
  const injectedMenuStyle = document.createElement('style');
  injectedMenuStyle.textContent = '.shell-injected-menu{position:fixed;inset:0;z-index:300;background:#101112;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s}.shell-injected-menu.open{opacity:1;visibility:visible}.shell-injected-menu .menu-head{display:flex;align-items:center;justify-content:space-between;padding:26px clamp(22px,5vw,72px)}.shell-injected-menu .menu-head .logo img{display:block;width:165px;height:auto}.shell-injected-menu .menu-close,.shell-menu-trigger{border:0;background:transparent;color:#fff;font:700 13px Manrope,Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;cursor:pointer}.shell-injected-menu .menu-close span{font-size:30px;margin-left:10px}.shell-injected-menu .menu-layout{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(320px,.65fr);height:calc(100vh - 100px)}.shell-injected-menu nav[aria-label="Primary navigation"]{padding:25px clamp(28px,7vw,110px) 60px;overflow:auto}.shell-injected-menu .nav-group{display:grid;grid-template-columns:165px 1fr;align-items:start;margin:0 0 26px}.shell-injected-menu .nav-group p{margin:10px 20px 0 0;color:#777;font-size:12px;text-transform:uppercase;letter-spacing:.13em}.shell-injected-menu .nav-group a{display:block;color:#fff;text-decoration:none;font:600 clamp(24px,3vw,48px)/1.12 Manrope,Arial,sans-serif;margin:0 0 11px}.shell-injected-menu .nav-group a small{display:inline-block;width:48px;color:#606265;font-size:12px}.shell-injected-menu .journey-panel{display:block;background:#1c1e20;padding:clamp(30px,5vw,72px);overflow:auto}.invite-nav .shell-menu-trigger{margin-left:18px;padding:9px 0;border-bottom:1px solid currentColor;color:#04222c}@media(max-width:850px){.shell-injected-menu .menu-layout{display:block;height:calc(100vh - 84px);overflow:auto}.shell-injected-menu nav[aria-label="Primary navigation"]{overflow:visible}.shell-injected-menu .nav-group{display:block;margin-bottom:30px}.shell-injected-menu .nav-group p{margin-bottom:10px}.shell-injected-menu .nav-group a{font-size:25px}.shell-injected-menu .journey-panel{display:block!important}}';
  document.head.append(injectedMenuStyle);
  const menuMarkup = `
    <aside class="menu shell-injected-menu" id="site-menu" aria-hidden="true" aria-label="Main menu">
      <div class="menu-head"><a class="logo" href="index.html"><img src="assets/images/crewzz-logo-dark-colored.png" alt="Crewzz"></a><button class="menu-close" type="button" aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div>
      <div class="menu-layout">
        <nav aria-label="Primary navigation">
          <div class="nav-group"><p>The Crewzz way</p><a href="how-crewzz-works.html"><small>01</small>How Crewzz Works</a></div>
          <div class="nav-group"><p>What we do</p><a href="design.html"><small>02</small>Design</a><a href="build.html"><small>03</small>Build</a><a href="estates.html#wellness"><small>04</small>Wellness + Longevity</a><a href="secure.html"><small>05</small>Safety + Security</a><a href="live.html"><small>06</small>LIVE</a></div>
          <div class="nav-group"><p>Learn</p><a href="resource-center.html"><small>07</small>Resource Center</a><a href="hack-my-home.html"><small>08</small>Hack My Home</a></div>
          <div class="nav-group"><p>Who we are</p><a href="meet.html"><small>09</small>Meet Crewzz</a><a href="founder.html"><small>10</small>About the Founder</a><a href="manifesto.html"><small>11</small>The Manifesto</a></div>
        </nav>
        <div class="journey-panel"></div>
      </div>
    </aside>`;
  const footerMarkup = `
    <footer class="footer"><div class="footer-grid"><div><img src="assets/images/crewzz-logo-dark-colored.png" alt="Crewzz"><p>Design. Build. Live. Different.</p></div><div><strong>Company</strong><a href="how-crewzz-works.html">How Crewzz Works</a><a href="meet.html">Meet Crewzz</a><a href="founder.html">About the Founder</a><a href="manifesto.html">The Manifesto</a></div><div><strong>Resources</strong><a href="resource-center.html">Resource Center</a><a href="hack-my-home.html">Hack My Home</a><a href="contact.html">Contact Crewzz</a></div><div><strong>Legal</strong><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a><a href="cookie-policy.html">Cookie Policy</a><a href="accessibility.html">Accessibility</a><a href="disclaimer.html">Disclosures</a></div></div><div class="footer-bottom"><span>© 2026 Crewzz Inc. All rights reserved.</span><span>2310 NE 195th St, Miami, FL 33180</span></div></footer>`;

  let injectedMenu = false;
  if (!document.querySelector('.menu')) {
    let menuButton = document.querySelector('.menu-button');
    if (!menuButton && document.querySelector('.invite-nav-inner')) {
      menuButton = document.createElement('button');
      menuButton.className = 'menu-button shell-menu-trigger';
      menuButton.type = 'button';
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-controls', 'site-menu');
      menuButton.textContent = 'Menu';
      document.querySelector('.invite-nav-inner').append(menuButton);
    }
    if (menuButton) {
      const shellAnchor = document.querySelector('.header, .invite-nav');
      shellAnchor?.insertAdjacentHTML('afterend', menuMarkup);
      injectedMenu = true;
    }
  }
  if (!document.querySelector('footer')) document.body.insertAdjacentHTML('beforeend', footerMarkup);

  const journeyMarkup = `<div class="shell-menu-panel">
    <p class="shell-menu-eyebrow">Start your journey</p>
    <h2>Ready to Experience Construction Differently?</h2>
    <a class="shell-menu-film" href="meet.html" aria-label="Watch the Crewzz introduction">
      <img src="assets/images/03-stewardship-concept.png" alt="Crewzz team guiding homeowners through a residential project">
      <span aria-hidden="true">▶</span>
    </a>
    <a class="shell-menu-apply" href="index.html#project-fit">See If Your Project Is a Fit</a>
    <div class="shell-menu-contact"><strong>Get in touch</strong><a href="tel:+18443090999">+1 844 309 0999</a><a href="mailto:info@crewzz.com">info@crewzz.com</a><address>2310 NE 195th St<br>Miami, FL 33180</address></div>
    <nav class="shell-menu-legal" aria-label="Legal information"><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a><a href="cookie-policy.html">Cookie Policy</a><a href="accessibility.html">Accessibility</a><a href="disclaimer.html">Disclosures</a></nav>
    <div class="shell-menu-foot"><span>© 2026 Crewzz Inc.</span><span>Design. Build. Live. Different.</span></div>
  </div>`;

  document.querySelectorAll('.journey-panel, .menu-aside').forEach((panel) => {
    panel.innerHTML = journeyMarkup;
  });

  const localRoutes = new Map([
    ['https://crewzz.com/privacy-policy/', 'privacy-policy.html'],
    ['https://crewzz.com/terms-of-service/', 'terms.html'],
    ['https://crewzz.com/accessibility-statement/', 'accessibility.html'],
    ['https://crewzz.com/hack-my-home/', 'hack-my-home.html'],
    ['https://www.crewzz.com/hack-my-home/', 'hack-my-home.html'],
    ['https://crewzz.com/our-story/', 'founder.html']
  ]);

  document.querySelectorAll('a[href]').forEach((link) => {
    const replacement = localRoutes.get(link.getAttribute('href'));
    if (replacement) link.setAttribute('href', replacement);
  });

  document.querySelectorAll('.future').forEach((item) => {
    if (!/manifesto/i.test(item.textContent)) return;
    const link = document.createElement('a');
    link.href = 'manifesto.html';
    link.innerHTML = item.innerHTML.replace(/<em>[\s\S]*?<\/em>/i, '');
    item.replaceWith(link);
  });

  document.querySelectorAll('footer span').forEach((item) => {
    if (/manifesto/i.test(item.textContent)) {
      const link = document.createElement('a');
      link.href = 'manifesto.html';
      link.textContent = 'The Manifesto';
      item.replaceWith(link);
    }
    if (/cookie policy/i.test(item.textContent)) {
      const link = document.createElement('a');
      link.href = 'cookie-policy.html';
      link.textContent = 'Cookie Policy';
      item.replaceWith(link);
    }
  });

  document.querySelectorAll('a[href="index.html#project-fit"]').forEach((link) => {
    if (/contact/i.test(link.textContent)) link.href = 'contact.html';
  });

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    if (/8889024947/.test(link.href)) {
      link.href = 'tel:+18443090999';
      link.textContent = '+1 844 309 0999';
    }
  });

  if (!document.querySelector('.privacy-dock')) {
    const dock = document.createElement('div');
    dock.className = 'privacy-dock';
    dock.innerHTML = '<button type="button" aria-label="Open privacy choices">Privacy choices</button>';
    document.body.append(dock);
    dock.querySelector('button').addEventListener('click', () => {
      window.location.href = 'cookie-policy.html#choices';
    });
  }

  const menu = document.querySelector('.menu');
  const open = document.querySelector('.menu-button');
  const close = document.querySelector('.menu-close');
  if (injectedMenu && menu && open && close && !open.dataset.shellReady) {
    open.dataset.shellReady = 'true';
    let priorFocus;
    const setMenu = (isOpen) => {
      priorFocus = isOpen ? document.activeElement : priorFocus;
      menu.classList.toggle('open', isOpen);
      menu.setAttribute('aria-hidden', String(!isOpen));
      open.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('locked', isOpen);
      if (isOpen) close.focus();
      else priorFocus?.focus();
    };
    open.addEventListener('click', () => setMenu(true));
    close.addEventListener('click', () => setMenu(false));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }
})();
