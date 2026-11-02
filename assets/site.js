/* EEE Club of HSTU — shared header, footer and small interactions */
(function () {
  document.documentElement.classList.add('js');

  var NAV = [
    { label: 'Home', href: 'index.html', key: 'home' },
    { label: 'About', key: 'about', items: [
      ['Our story', 'about.html', 'Who we are and how we work'],
      ['History', 'history.html', 'From one lab bench to six wings'],
      ['Leadership', 'leadership.html', 'Executive, alumni and taskforce'],
      ['Advisory panel', 'advisory.html', 'The teachers who guide the club'],
      ['Constitution', 'constitution.html', 'The rules of our circuit']
    ] },
    { label: 'Events', key: 'events', items: [
      ['Upcoming', 'events.html', 'Workshops, talks and competitions'],
      ['Volt Rush 2026', 'event.html', 'Our flagship robotics sprint'],
      ['Archive', 'archive.html', 'Every event we have run'],
      ['Notices', 'notices.html', 'Deadlines and announcements']
    ] },
    { label: 'Content', key: 'content', items: [
      ['Blog', 'blog.html', 'Tutorials, recaps and opinions'],
      ['Pulse magazine', 'magazine.html', 'Our member-made magazine'],
      ['Resources', 'resources.html', 'Notes, datasheets and code'],
      ['Gallery', 'gallery.html', 'Moments in high voltage']
    ] },
    { label: 'Verify', key: 'verify', items: [
      ['Certificate', 'verify.html', 'Check a certificate ID'],
      ['Membership', 'verify.html#membership', 'Confirm an active member']
    ] },
    { label: 'Contact', key: 'contact', items: [
      ['Contact us', 'contact.html', 'Send us a message'],
      ['Location', 'contact.html#map', 'Find the EEE building'],
      ['FAQ', 'contact.html#faq', 'Questions, answered']
    ] }
  ];

  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var section = document.body.getAttribute('data-section') || '';
  var CARET = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var LOGO = '<a href="index.html" class="logo"><img src="assets/logo.png" alt="EEE Club of HSTU logo" width="48" height="48"><span style="display:flex;flex-direction:column;gap:2px"><span style="font-size:18px;font-weight:500">EEE Club</span><span class="m" style="font-size:10px;color:#8A8F98">HSTU · Dinajpur</span></span></a>';

  function isCurrent(href) { return href.split('#')[0].toLowerCase() === page; }

  function header() {
    var desk = NAV.map(function (n, i) {
      var on = n.key === section || (n.key === 'home' && page === 'index.html');
      if (!n.items) return '<div class="nav-item"><a class="navlink' + (on ? ' on' : '') + '" href="' + n.href + '"' + (on ? ' aria-current="page"' : '') + '>' + n.label + '</a></div>';
      var links = n.items.map(function (it, j) {
        var cur = isCurrent(it[1]) && it[1].indexOf('#') < 0;
        return '<a href="' + it[1] + '"' + (cur ? ' class="on" aria-current="page"' : '') + '><span class="n">0' + (j + 1) + '</span><span><b>' + it[0] + '</b><small>' + it[2] + '</small></span></a>';
      }).join('');
      return '<div class="nav-item"><button class="navlink' + (on ? ' on' : '') + '" type="button" aria-haspopup="true" aria-expanded="false">' + n.label + CARET + '</button><div class="dd" role="menu" aria-label="' + n.label + '">' + links + '</div></div>';
    }).join('');

    var mob = NAV.map(function (n) {
      if (!n.items) return '<a class="solo" href="' + n.href + '">' + n.label + '</a>';
      var open = n.key === section ? ' open' : '';
      return '<details' + open + '><summary>' + n.label + '</summary><div class="sub">' + n.items.map(function (it) {
        return '<a href="' + it[1] + '"' + (isCurrent(it[1]) && it[1].indexOf('#') < 0 ? ' class="on"' : '') + '>' + it[0] + '</a>';
      }).join('') + '</div></details>';
    }).join('');

    return '<header class="site wrap">' + LOGO +
      '<nav class="nav" aria-label="Main">' + desk + '</nav>' +
      '<div style="display:flex;align-items:center;gap:10px"><a class="btn sm' + (section === 'join' ? ' dark' : '') + '" href="join.html">Join us</a>' +
      '<button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F3F2EE" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 9h16M4 15h10"/></svg></button></div>' +
      '</header>' +
      '<div class="mnav" id="mnav" role="dialog" aria-modal="true" aria-label="Menu"><div class="wrap">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;padding:20px 0">' + LOGO +
      '<button class="menu-close" type="button" aria-label="Close menu" style="width:48px;height:48px;border-radius:999px;border:0;background:#F3F2EE;cursor:pointer;display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08090B" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<nav aria-label="Mobile">' + mob + '</nav>' +
      '<div style="margin-top:32px"><a class="btn" href="join.html">Join the club</a></div></div></div>';
  }

  function col(title, links) {
    return '<div style="display:flex;flex-direction:column;gap:12px;font-size:15px"><span class="m v">' + title + '</span>' +
      links.map(function (l) { return '<a href="' + l[1] + '" style="color:#F3F2EE;text-decoration:none">' + l[0] + '</a>'; }).join('') + '</div>';
  }

  function footer() {
    return '<footer style="background:#08090B;padding-top:96px;overflow:hidden;border-top:1px solid #1C1F25"><div class="wrap">' +
      '<div style="display:flex;flex-wrap:wrap;gap:64px;justify-content:space-between">' +
      '<form class="pulse-form" style="flex:0 1 440px" novalidate>' +
      '<div style="font-size:44px;font-weight:500;letter-spacing:-.03em;line-height:1.05">Get the monthly Pulse.</div>' +
      '<p style="margin:14px 0 0;font-size:16px;line-height:1.55;color:#8A8F98">Events, opportunities and lab notes — one email a month.</p>' +
      '<label for="pulse-email" class="m" style="display:block;margin-top:24px;color:#8A8F98">Email</label>' +
      '<div style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:6px 6px 6px 22px;border-radius:999px;background:#111317;border:1px solid #262A31">' +
      '<input id="pulse-email" type="email" required placeholder="you@student.hstu.ac.bd" style="flex:1;min-width:0;background:transparent;border:0;color:#F3F2EE;font:inherit;font-size:16px;outline:none">' +
      '<button type="submit" aria-label="Subscribe" style="width:48px;height:48px;border:0;border-radius:999px;background:#D7FF3D;cursor:pointer;display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08090B" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></button></div>' +
      '<p class="pulse-msg m" role="status" style="margin:12px 0 0;color:#D7FF3D;min-height:16px"></p></form>' +
      '<div style="flex:1 1 560px;display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:32px">' +
      col('About', [['Our story', 'about.html'], ['History', 'history.html'], ['Leadership', 'leadership.html'], ['Advisory panel', 'advisory.html'], ['Constitution', 'constitution.html']]) +
      col('Events', [['Upcoming', 'events.html'], ['Volt Rush 2026', 'event.html'], ['Archive', 'archive.html'], ['Notices', 'notices.html']]) +
      col('Content', [['Blog', 'blog.html'], ['Pulse magazine', 'magazine.html'], ['Resources', 'resources.html'], ['Gallery', 'gallery.html']]) +
      col('Club', [['Join', 'join.html'], ['Verify', 'verify.html'], ['Contact', 'contact.html'], ['Sitemap', 'sitemap.html']]) +
      '</div></div>' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;margin-top:72px;padding-top:24px;border-top:1px solid #262A31">' +
      '<div class="m" style="display:flex;flex-wrap:wrap;gap:24px"><a href="https://facebook.com">Facebook ↗</a><a href="https://instagram.com">Instagram ↗</a><a href="https://linkedin.com">LinkedIn ↗</a><a href="https://youtube.com">YouTube ↗</a></div>' +
      '<span class="m demo-note">Demo site · names, dates &amp; numbers are sample data</span>' +
      '<span class="m mu">© 2026 EEE Club of HSTU</span></div></div>' +
      '<div aria-hidden="true" style="margin-top:40px;text-align:center;font-size:22vw;line-height:.78;font-weight:700;letter-spacing:-.06em;color:#15181D;white-space:nowrap;height:17vw;overflow:hidden">EEE CLUB</div></footer>';
  }

  var h = document.getElementById('site-header');
  if (h) h.outerHTML = header();
  var f = document.getElementById('site-footer');
  if (f) f.outerHTML = footer();

  // desktop dropdowns: keyboard + touch
  document.querySelectorAll('.nav-item > button').forEach(function (b) {
    var item = b.parentNode;
    b.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
      if (open) { var first = item.querySelector('.dd a'); if (first) first.focus(); }
    });
    item.addEventListener('mouseenter', function () { b.setAttribute('aria-expanded', 'true'); });
    item.addEventListener('mouseleave', function () { b.setAttribute('aria-expanded', 'false'); item.classList.remove('open'); });
    item.addEventListener('keydown', function (e) { if (e.key === 'Escape') { item.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); b.focus(); } });
  });

  // mobile menu
  var mnav = document.getElementById('mnav');
  var openBtn = document.querySelector('.menu-btn');
  function setMenu(open) {
    if (!mnav) return;
    mnav.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', open);
    if (open) { var c = mnav.querySelector('.menu-close'); if (c) c.focus(); } else if (openBtn) openBtn.focus();
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (mnav) {
    mnav.querySelector('.menu-close').addEventListener('click', function () { setMenu(false); });
    mnav.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  }

  // newsletter (demo)
  document.querySelectorAll('.pulse-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input'), msg = form.querySelector('.pulse-msg');
      msg.textContent = /.+@.+\..+/.test(input.value) ? 'You’re subscribed. See you in the next Pulse.' : 'Enter a valid email address.';
      msg.style.color = /.+@.+\..+/.test(input.value) ? '#D7FF3D' : '#FF5A1F';
    });
  });

  // tabs: <div data-tabs> with .tab[data-panel] buttons and [data-panel-id] panels
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    function show(id) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', t.getAttribute('data-panel') === id); });
      document.querySelectorAll('[data-panel-id]').forEach(function (p) {
        if (p.getAttribute('data-group') === group.getAttribute('data-tabs')) p.hidden = p.getAttribute('data-panel-id') !== id;
      });
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.getAttribute('data-panel')); history.replaceState(null, '', '#' + t.getAttribute('data-panel')); }); });
    var fromHash = location.hash.slice(1);
    var initial = Array.prototype.some.call(tabs, function (t) { return t.getAttribute('data-panel') === fromHash; }) ? fromHash : tabs[0].getAttribute('data-panel');
    show(initial);
  });

  // filters: <div data-filter="name"> chips with data-value; items with data-name="a b"
  document.querySelectorAll('[data-filter]').forEach(function (bar) {
    var name = bar.getAttribute('data-filter');
    var chips = bar.querySelectorAll('.chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var v = c.getAttribute('data-value');
        chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c); });
        document.querySelectorAll('[data-' + name + ']').forEach(function (el) {
          el.hidden = !(v === 'all' || (' ' + el.getAttribute('data-' + name) + ' ').indexOf(' ' + v + ' ') > -1);
        });
      });
    });
  });

  // live text search: <input data-search="selector">
  document.querySelectorAll('[data-search]').forEach(function (input) {
    var sel = input.getAttribute('data-search');
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      document.querySelectorAll(sel).forEach(function (el) { el.hidden = q && el.textContent.toLowerCase().indexOf(q) < 0; });
    });
  });

  // countdown: <div data-countdown="2026-11-14T10:00:00+06:00"> with [data-unit=d|h|m|s]
  document.querySelectorAll('[data-countdown]').forEach(function (el) {
    var target = new Date(el.getAttribute('data-countdown')).getTime();
    function tick() {
      var d = Math.max(0, target - Date.now());
      var parts = { d: Math.floor(d / 864e5), h: Math.floor(d / 36e5) % 24, m: Math.floor(d / 6e4) % 60, s: Math.floor(d / 1e3) % 60 };
      el.querySelectorAll('[data-unit]').forEach(function (u) { u.textContent = String(parts[u.getAttribute('data-unit')]).padStart(2, '0'); });
    }
    tick(); setInterval(tick, 1000);
  });

  // scroll reveal
  var rv = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });
})();
