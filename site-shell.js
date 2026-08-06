(() => {
  const shellStyle = document.createElement('style');
  shellStyle.textContent = '.privacy-dock{position:fixed;right:12px;bottom:12px;z-index:90}.privacy-dock button{border:1px solid rgba(255,255,255,.32);background:#101719;color:#fff;border-radius:30px;padding:10px 14px;font:600 11px Manrope,Arial,sans-serif;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.18)}.footer{background:#101719;color:#fff;padding:60px clamp(22px,7vw,110px) 28px;font-family:Manrope,Arial,sans-serif}.footer-grid{display:grid;grid-template-columns:1.5fr repeat(3,1fr);gap:42px;max-width:1280px;margin:auto}.footer img{width:155px}.footer strong{display:block;margin-bottom:13px}.footer a{display:block;text-decoration:none;color:#b9c0c1;margin:7px 0}.footer-bottom{border-top:1px solid rgba(255,255,255,.12);max-width:1280px;margin:40px auto 0;padding-top:20px;color:#8e989a;font-size:12px;display:flex;justify-content:space-between;gap:30px}@media(max-width:850px){.footer-grid{grid-template-columns:1fr}.footer-bottom{display:block}}';
  document.head.append(shellStyle);
  const menuMarkup = `
    <aside class="menu" id="site-menu" aria-hidden="true" aria-label="Main menu">
      <div class="menu-head"><a class="logo" href="index.html"><img src="assets/images/crewzz-logo-dark-colored.png" alt="Crewzz"></a><button class="menu-close" type="button" aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div>
      <div class="menu-layout">
        <nav aria-label="Primary navigation">
          <div class="nav-group"><p>The Crewzz way</p><a href="how-crewzz-works.html"><small>01</small>How Crewzz Works</a></div>
          <div class="nav-group"><p>What we do</p><a href="design.html"><small>02</small>Design</a><a href="build.html"><small>03</small>Build</a><a href="estates.html#wellness"><small>04</small>Wellness + Longevity</a><a href="secure.html"><small>05</small>Safety + Security</a><a href="live.html"><small>06</small>LIVE</a></div>
          <div class="nav-group"><p>Learn</p><a href="resource-center.html"><small>07</small>Resource Center</a><a href="hack-my-home.html"><small>08</small>Hack My Home</a></div>
          <div class="nav-group"><p>Who we are</p><a href="meet.html"><small>09</small>Meet Crewzz</a><a href="founder.html"><small>10</small>About the Founder</a><a href="manifesto.html"><small>11</small>The Manifesto</a></div>
        </nav>
        <div class="journey-panel"><p class="eyebrow">Start your journey</p><h2>Ready to approach your project with greater clarity?</h2><img src="assets/images/03-stewardship-concept.png" alt="Crewzz team guiding homeowners through a residential project"><a class="apply" href="index.html#project-fit">See If Your Project Is a Fit</a><div class="contact"><strong>Get in touch</strong><a href="tel:+18443090999">+1 844 309 0999</a><a href="mailto:info@crewzz.com">info@crewzz.com</a></div></div>
      </div>
    </aside>`;
  const footerMarkup = `
    <footer class="footer"><div class="footer-grid"><div><img src="assets/images/crewzz-logo-dark-colored.png" alt="Crewzz"><p>Design. Build. Live. Different.</p></div><div><strong>Company</strong><a href="how-crewzz-works.html">How Crewzz Works</a><a href="meet.html">Meet Crewzz</a><a href="founder.html">About the Founder</a><a href="manifesto.html">The Manifesto</a></div><div><strong>Resources</strong><a href="resource-center.html">Resource Center</a><a href="hack-my-home.html">Hack My Home</a><a href="contact.html">Contact Crewzz</a></div><div><strong>Legal</strong><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a><a href="cookie-policy.html">Cookie Policy</a><a href="accessibility.html">Accessibility</a><a href="disclaimer.html">Disclosures</a></div></div><div class="footer-bottom"><span>© 2026 Crewzz Inc. All rights reserved.</span><span>2310 NE 195th St, Miami, FL 33180</span></div></footer>`;

  let injectedMenu = false;
  if (!document.querySelector('.menu') && document.querySelector('.menu-button')) {
    document.querySelector('.header').insertAdjacentHTML('afterend', menuMarkup);
    injectedMenu = true;
  }
  if (!document.querySelector('footer')) document.body.insertAdjacentHTML('beforeend', footerMarkup);

  const localRoutes = new Map([
    ['https://crewzz.com/privacy-policy/', 'privacy-policy.html'],
    ['https://crewzz.com/terms-of-service/', 'terms.html'],
    ['https://crewzz.com/accessibility-statement/', 'accessibility.html'],
    ['https://crewzz.com/hack-my-home/', 'hack-my-home.html'],
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
