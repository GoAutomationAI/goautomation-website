/* Cookie consent for goautomation.ai
 *
 * Non-essential tags (Meta Pixel, LinkedIn Insight Tag) are loaded ONLY after
 * the visitor accepts. Nothing marketing-related touches the page before that.
 *
 * Each page declares what it needs before loading this file, e.g.
 *   <script>window.GA_CONSENT = { metaLead: true, linkedin: true };</script>
 *   <script src="consent.js"></script>
 *
 * The stored choice can be changed from any element carrying
 * data-cookie-settings.
 */
(function () {
  'use strict';

  var STORE   = 'ga-cookie-consent';         /* "accepted" | "declined" */
  var META_ID = '1987469928639044';
  var LI_ID   = '5285914';
  var cfg     = window.GA_CONSENT || {};

  function read()   { try { return localStorage.getItem(STORE); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(STORE, v); } catch (e) {} }

  /* ---------- tag loading (never called without consent) ---------- */

  var loaded = false;

  function loadTags() {
    if (loaded) { return; }
    loaded = true;

    /* Meta Pixel */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_ID);
    window.fbq('track', 'PageView');
    if (cfg.metaLead) { window.fbq('track', 'Lead'); }

    /* LinkedIn Insight Tag */
    if (cfg.linkedin) {
      window._linkedin_partner_id = LI_ID;
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(LI_ID);
      (function (l) {
        if (!l) {
          window.lintrk = function (a, b) { window.lintrk.q.push([a, b]); };
          window.lintrk.q = [];
        }
        var s = document.getElementsByTagName('script')[0];
        var b = document.createElement('script');
        b.type = 'text/javascript';
        b.async = true;
        b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    }
  }

  /* ---------- banner ---------- */

  var CSS = [
    '#ga-cc{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;',
    'background:#0B1F3A;color:#fff;border-top:2px solid #00C47A;',
    "font-family:'Inter',system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.6;",
    'box-shadow:0 -6px 28px rgba(0,0,0,.28)}',
    '#ga-cc[hidden]{display:none}',
    '#ga-cc .ga-cc-in{max-width:1100px;margin:0 auto;padding:18px 22px;',
    'display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap}',
    '#ga-cc p{margin:0;max-width:70ch;color:rgba(255,255,255,.9)}',
    '#ga-cc a{color:#00C47A;text-decoration:underline}',
    '#ga-cc .ga-cc-btns{display:flex;gap:10px;flex-shrink:0}',
    /* Accept and Decline are deliberately identical in size, weight and
       solidity. ICO guidance requires the reject option to be as prominent
       as accept, so neither is a ghost/outline button. */
    '#ga-cc button{font:inherit;font-size:14px;font-weight:700;cursor:pointer;',
    'border-radius:999px;padding:12px 28px;min-width:140px;border:2px solid transparent;',
    'background:#fff;color:#0B1F3A}',
    '#ga-cc button[data-cc="accept"]{background:#00C47A;color:#052e21}',
    '#ga-cc button:hover{opacity:.88}',
    '#ga-cc button:focus-visible{outline:3px solid #fff;outline-offset:3px}',
    '@media(max-width:620px){#ga-cc .ga-cc-in{padding:16px;gap:14px}',
    '#ga-cc .ga-cc-btns{width:100%}#ga-cc button{flex:1}}'
  ].join('');

  var banner = null;

  function build() {
    if (banner) { return banner; }

    var style = document.createElement('style');
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);

    banner = document.createElement('div');
    banner.id = 'ga-cc';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie choices');
    banner.innerHTML =
      '<div class="ga-cc-in">' +
        '<p>We use essential cookies to make this site work. With your permission we would ' +
        'also like to set Meta and LinkedIn cookies to measure how well our advertising ' +
        'performs. You can change your mind at any time. ' +
        '<a href="cookie-policy.html">Read our Cookie Policy</a>.</p>' +
        '<div class="ga-cc-btns">' +
          '<button type="button" data-cc="decline">Decline</button>' +
          '<button type="button" data-cc="accept">Accept</button>' +
        '</div>' +
      '</div>';

    banner.addEventListener('click', function (ev) {
      var choice = ev.target.getAttribute && ev.target.getAttribute('data-cc');
      if (!choice) { return; }
      write(choice === 'accept' ? 'accepted' : 'declined');
      hide();
      if (choice === 'accept') { loadTags(); }
    });

    document.body.appendChild(banner);
    return banner;
  }

  function show() {
    var el = build();
    el.hidden = false;
    var accept = el.querySelector('button[data-cc="accept"]');
    if (accept) { accept.focus(); }
  }

  function hide() {
    if (banner) { banner.hidden = true; }
  }

  /* ---------- wiring ---------- */

  function start() {
    var choice = read();

    if (choice === 'accepted') {
      loadTags();
    } else if (choice !== 'declined') {
      show();                    /* no decision recorded yet */
    }

    var links = document.querySelectorAll('[data-cookie-settings]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (ev) {
        ev.preventDefault();
        show();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
