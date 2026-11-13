
(function(){
  const root = document.getElementById('go-root');
  const msg = t => { root.innerHTML = '<p class="go-msg"><b style="color:#59C181">GO AUTOMATION</b><br><br>' + t + '</p>'; };
  const BODY = "<div class=\"mab\">\n  <header class=\"mab-head go-band\" id=\"summary\">\n    <div class=\"go-brand\"><svg class=\"go-logo\" viewBox=\"0 0 100 100\" role=\"img\" aria-label=\"Go Automation logo\"><path d=\"M0 50A50 50 0 0 1 50 0A50 50 0 0 1 100 50A50 50 0 0 1 50 100H0Z\" fill=\"#59C181\"/><text x=\"50\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Poppins, 'Work Sans', Arial, sans-serif\" font-weight=\"700\" font-size=\"38\" fill=\"#FFFFFF\">GO</text></svg><div class=\"go-word\"><span class=\"go-wordmark\">GO AUTOMATION</span><span class=\"go-tagline\">AI-Powered Automation Solutions</span></div></div>\n    <div class=\"mab-eyebrow\">__CLIENT__ \u00b7 WhatsApp outreach report</div>\n    <h1 class=\"mab-title\">Weekly outreach results</h1>\n    <span class=\"mab-week\" data-draw=\"week-label\" data-source=\"report\" data-field=\"label\" data-row=\"0\">\u2014</span>\n    <p class=\"mab-lede\" data-read lang=\"en-GB\">Since the campaign started we have messaged <b data-draw=\"k-contacted\" data-source=\"kpi\" data-field=\"contacted\" data-row=\"0\">\u2014</b> __CLIENT_SHORT__ customers. <b data-draw=\"k-replied\" data-source=\"kpi\" data-field=\"replied\" data-row=\"0\">\u2014</b> replied (<b data-draw=\"k-reply-rate\" data-source=\"kpi\" data-field=\"reply_rate\" data-row=\"0\">\u2014</b>) and <b data-draw=\"k-booked\" data-source=\"kpi\" data-field=\"booked\" data-row=\"0\">\u2014</b> have booked a __REVIEW__. This week <b data-draw=\"k-w-booked\" data-source=\"kpi\" data-field=\"week_booked\" data-row=\"0\">\u2014</b> more were booked. <b data-draw=\"k-neg\" data-source=\"kpi\" data-field=\"negative\" data-row=\"0\">\u2014</b> conversations in total were negative (<b data-draw=\"k-neg-rate\" data-source=\"kpi\" data-field=\"negative_rate\" data-row=\"0\">\u2014</b> of everyone messaged), and <b data-draw=\"k-ai\" data-source=\"kpi\" data-field=\"ai_objections\" data-row=\"0\">\u2014</b> of those were objections to AI. <b data-draw=\"k-ho\" data-source=\"kpi\" data-field=\"handovers\" data-row=\"0\">\u2014</b> customers (<b data-draw=\"k-ho-rate-msg\" data-source=\"kpi\" data-field=\"handover_rate_msg\" data-row=\"0\">\u2014</b>) were passed to a person.</p>\n    <div class=\"go-small\">Every reply in the __CLIENT__ GHL account is read and recorded for this report. Updated every Monday morning.</div>\n  </header>\n\n  <section class=\"mab-tiles\" id=\"headline\">\n    <div class=\"mab-tile\" id=\"tile-contacted\">\n      <span class=\"mab-tile-label\">Customers messaged</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-contacted\" data-source=\"kpi\" data-field=\"contacted\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-week\">This week <b data-draw=\"t-w-contacted\" data-source=\"kpi\" data-field=\"week_contacted\" data-row=\"0\">\u2014</b></span>\n    </div>\n    <div class=\"mab-tile good\" id=\"tile-replied\">\n      <span class=\"mab-tile-label\">Replied</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-replied\" data-source=\"kpi\" data-field=\"replied\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-reply-rate\" data-source=\"kpi\" data-field=\"reply_rate\" data-row=\"0\">\u2014</b> response rate</span>\n      <span class=\"mab-tile-week\">This week <b data-draw=\"t-w-replied\" data-source=\"kpi\" data-field=\"week_replied\" data-row=\"0\">\u2014</b></span>\n    </div>\n    <div class=\"mab-tile good\" id=\"tile-booked\">\n      <span class=\"mab-tile-label\">Reviews booked</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-booked\" data-source=\"kpi\" data-field=\"booked\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-booked-rate\" data-source=\"kpi\" data-field=\"booked_rate\" data-row=\"0\">\u2014</b> of customers messaged</span>\n      <span class=\"mab-tile-week\">This week <b data-draw=\"t-w-booked\" data-source=\"kpi\" data-field=\"week_booked\" data-row=\"0\">\u2014</b></span>\n    </div>\n    <div class=\"mab-tile\" id=\"tile-engaged\">\n      <span class=\"mab-tile-label\">Engaged, not booked yet</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-engaged\" data-source=\"kpi\" data-field=\"engaged\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\">Talking, asked for a later date or checking with a partner</span>\n    </div>\n    <div class=\"mab-tile\" id=\"tile-happy\">\n      <span class=\"mab-tile-label\">Checked in, happy with cover</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-happy\" data-source=\"kpi\" data-field=\"happy\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\">Annual check-in done, details confirmed</span>\n    </div>\n    <div class=\"mab-tile watch\" id=\"tile-negative\">\n      <span class=\"mab-tile-label\">Negative conversations</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-neg\" data-source=\"kpi\" data-field=\"negative\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-neg-rate\" data-source=\"kpi\" data-field=\"negative_rate\" data-row=\"0\">\u2014</b> of customers messaged</span>\n      <span class=\"mab-tile-week\">This week <b data-draw=\"t-w-neg\" data-source=\"kpi\" data-field=\"week_negative\" data-row=\"0\">\u2014</b></span>\n    </div>\n    <div class=\"mab-tile watch\" id=\"tile-ai\">\n      <span class=\"mab-tile-label\">Objected to AI</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-ai\" data-source=\"kpi\" data-field=\"ai_objections\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-ai-rate\" data-source=\"kpi\" data-field=\"ai_rate\" data-row=\"0\">\u2014</b> of customers messaged</span>\n    </div>\n    <div class=\"mab-tile\" id=\"tile-handover\">\n      <span class=\"mab-tile-label\">Passed to a person</span>\n      <span class=\"mab-tile-num\" data-draw=\"t-ho\" data-source=\"kpi\" data-field=\"handovers\" data-row=\"0\">\u2014</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-ho-rate-msg\" data-source=\"kpi\" data-field=\"handover_rate_msg\" data-row=\"0\">\u2014</b> of customers messaged</span>\n      <span class=\"mab-tile-sub\"><b data-draw=\"t-ho-rate\" data-source=\"kpi\" data-field=\"handover_rate\" data-row=\"0\">\u2014</b> of customers who replied</span>\n      <span class=\"mab-tile-week\">This week <b data-draw=\"t-w-ho\" data-source=\"kpi\" data-field=\"week_handovers\" data-row=\"0\">\u2014</b></span>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"trend\">\n    <h2>Week by week</h2>\n    <p class=\"mab-p\">Each row is one week, Monday to Sunday. The running totals above add every week together.</p>\n    <div class=\"mab-tablewrap\">\n      <table class=\"mab-table\" id=\"weeks-table\" data-source=\"by_week\" data-row-key=\"week\">\n        <thead><tr><th data-field=\"week\">Week starting</th><th class=\"num\" data-field=\"contacted\">Messaged</th><th class=\"num\" data-field=\"replied\">Replies</th><th class=\"num\" data-field=\"booked\">Booked</th><th class=\"num\" data-field=\"negative\">Negative</th></tr></thead>\n        <tbody data-draw=\"week-rows\"></tbody>\n      </table>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"outcomes\">\n    <h2>What happened to everyone who replied</h2>\n    <p class=\"mab-p\">Bookings and live conversations sit alongside customers who confirmed their cover is still right for them. That check-in is part of the service too. Negative replies are a small share.</p>\n    <div class=\"mab-card\">\n      <div class=\"mab-chart\" data-draw=\"c-outcomes\" data-source=\"outcomes\" role=\"img\" aria-label=\"Outcome of each conversation where the customer replied\"></div>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"campaigns\">\n    <h2>Results by list</h2>\n    <div class=\"mab-tablewrap\">\n      <table class=\"mab-table\" id=\"campaign-table\" data-source=\"by_campaign\" data-row-key=\"campaign\">\n        <thead><tr><th data-field=\"campaign\">List</th><th class=\"num\" data-field=\"contacted\">Messaged</th><th class=\"num\" data-field=\"replied\">Replied</th><th class=\"num\" data-field=\"reply_rate\">Reply rate</th><th class=\"num\" data-field=\"booked\">Booked</th></tr></thead>\n        <tbody data-draw=\"campaign-rows\"></tbody>\n      </table>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"followups\">\n    <h2>The follow-up messages are doing the work</h2>\n    <p class=\"mab-p\"><b data-draw=\"k-after-bump\" data-source=\"kpi\" data-field=\"after_bump\" data-row=\"0\">\u2014</b> customers (<b data-draw=\"k-after-bump-rate\" data-source=\"kpi\" data-field=\"after_bump_rate\" data-row=\"0\">\u2014</b> of those who replied) only answered after a follow-up message.</p>\n    <div class=\"mab-grid2\">\n      <div class=\"mab-card\" id=\"reply-stage\">\n        <h3>Which message they replied to</h3>\n        <div class=\"mab-chart\" data-draw=\"c-reply-stage\" data-source=\"reply_stage\" role=\"img\" aria-label=\"Customers who first replied after each message in the sequence\"></div>\n      </div>\n      <div class=\"mab-card\" id=\"waiting\">\n        <h3>No reply yet, by last message sent</h3>\n        <div class=\"mab-chart\" data-draw=\"c-waiting\" data-source=\"waiting\" role=\"img\" aria-label=\"Customers with no reply yet, by the last message they were sent\"></div>\n        <span class=\"mab-muted\">Customers who have had the final message have finished the sequence.</span>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"negatives\">\n    <h2>Negative conversations, and why they happened</h2>\n    <p class=\"mab-p\">We read every negative reply and record the cause, so each one can be acted on.</p>\n    <div class=\"mab-grid2\">\n      <div class=\"mab-card\" id=\"neg-causes\">\n        <h3>Causes</h3>\n        <div class=\"mab-chart\" data-draw=\"c-neg-causes\" data-source=\"neg_causes\" role=\"img\" aria-label=\"Negative conversations grouped by cause\"></div>\n      </div>\n      <div class=\"mab-card\" id=\"ai-mentions\">\n        <h3>Every conversation where AI came up</h3>\n        <div class=\"mab-chart\" data-draw=\"c-ai\" data-source=\"ai_mix\" role=\"img\" aria-label=\"Conversations that mentioned AI, by how the customer reacted\"></div>\n      </div>\n    </div>\n    <div class=\"mab-tablewrap\">\n      <table class=\"mab-table\" id=\"neg-log\" data-source=\"negatives\" data-row-key=\"customer\">\n        <thead><tr><th data-field=\"customer\">Customer</th><th data-field=\"date\">Date</th><th data-field=\"type\">Type</th><th data-field=\"cause\">Cause</th><th data-field=\"what_they_said\">What they said</th><th data-field=\"what_happened_next\">What happened next</th></tr></thead>\n        <tbody data-draw=\"neg-rows\"></tbody>\n      </table>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"handovers\">\n    <h2>Passed to a person, and why</h2>\n    <p class=\"mab-p\">When a customer needs something the AI shouldn't handle, it hands the conversation to a person and the adviser is told. We read each one and record the reason. <span id=\"ho-booked-wrap\" hidden><b data-draw=\"k-ho-booked\" data-source=\"kpi\" data-field=\"handovers_booked\" data-row=\"0\">\u2014</b> of these customers went on to book anyway.</span></p>\n    <div class=\"mab-grid2\">\n      <div class=\"mab-card\" id=\"handover-reasons\">\n        <h3>Reasons</h3>\n        <div class=\"mab-chart\" data-draw=\"c-handover-reasons\" data-source=\"handover_reasons\" role=\"img\" aria-label=\"Conversations passed to a person, grouped by reason\"></div>\n      </div>\n      <div class=\"mab-tablewrap\">\n        <table class=\"mab-table\" id=\"handover-table\" data-source=\"handover_reasons\" data-row-key=\"reason\">\n          <thead><tr><th data-field=\"reason\">Reason</th><th class=\"num\" data-field=\"customers\">Total</th><th class=\"num\" data-field=\"this_week\">This week</th><th class=\"num\" data-field=\"then_booked\" id=\"ho-booked-th\" hidden>Then booked</th></tr></thead>\n          <tbody data-draw=\"handover-rows\"></tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"mab-sec\" id=\"bookings\">\n    <h2>Bookings</h2>\n    <div class=\"mab-grid2\">\n      <div class=\"mab-card\" id=\"booked-by-adviser\">\n        <h3>Booked by adviser</h3>\n        <div class=\"mab-chart\" data-draw=\"c-adviser\" data-source=\"by_adviser\" role=\"img\" aria-label=\"Reviews booked for each adviser\"></div>\n      </div>\n      <div class=\"mab-card\" id=\"appt-month\">\n        <h3>When the appointments are</h3>\n        <div class=\"mab-chart\" data-draw=\"c-appt-month\" data-source=\"appt_month\" role=\"img\" aria-label=\"Booked appointments by month\"></div>\n      </div>\n    </div>\n  </section>\n\n  <details class=\"mab-notes\" id=\"notes\">\n    <summary>How this report is made</summary>\n    <ul>\n      <li>Customers counted: everyone who received the first outreach message from James since the campaign started. Go Automation test contacts are excluded.</li>\n      <li>This week means Monday to Sunday. Messaged counts first messages sent that week, replies count customers whose first reply came that week, and booked counts bookings made that week.</li>\n      <li>Booked: the customer received a booking confirmation from James. Reviews booked directly by an adviser are not counted here.</li>\n      <li>Every reply is read by a person and given one outcome. Negative means the customer was annoyed, complained, refused to continue or asked us to stop. A polite \u201cno thanks\u201d or \u201calready covered\u201d is not counted as negative.</li>\n      <li>Objected to AI means the customer said they did not want to deal with AI or a bot. Asking whether it is AI and then carrying on is not counted as an objection.</li>\n      <li>Passed to a person: the AI told the customer it was passing them to their adviser or the team (for example they asked for a call, wanted an evening or weekend appointment, or asked something only an adviser can answer). Counted once per customer, at the first handover.</li>\n      <li>Customer names in the negative log are shown as first name plus a short reference.</li>\n    </ul>\n  </details>\n\n  <footer class=\"go-foot\" id=\"footer\">\n    <div class=\"go-brand\"><svg class=\"go-logo\" viewBox=\"0 0 100 100\" role=\"img\" aria-label=\"Go Automation logo\"><path d=\"M0 50A50 50 0 0 1 50 0A50 50 0 0 1 100 50A50 50 0 0 1 50 100H0Z\" fill=\"#59C181\"/><text x=\"50\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Poppins, 'Work Sans', Arial, sans-serif\" font-weight=\"700\" font-size=\"38\" fill=\"#FFFFFF\">GO</text></svg><div class=\"go-word\"><span class=\"go-wordmark\">GO AUTOMATION</span><span class=\"go-tagline\">AI-Powered Automation Solutions</span></div></div>\n    <div class=\"go-foot-details\"><b>Prepared for __CLIENT__ by Go Automation AI Ltd \u00b7 www.goautomation.ai</b><span>Suite A4, Skylon Court, Coldnose Road, Rotherwas, Hereford, HR2 6JS \u00b7 Company No. 14400611</span></div>\n  </footer>\n</div>\n";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
  async function main() {
    const k = location.hash.slice(1);
    if (!k) return msg('This report link is incomplete. Please use the full link your account manager sent you.');
    const slug = location.pathname.split('/').pop().replace(/\.html$/, '');
    let txt;
    try { const r = await fetch('/reports-data/' + slug + '.txt?v=' + Date.now(), {cache: 'no-store'}); if (!r.ok) throw 0; txt = (await r.text()).trim(); }
    catch (e) { return msg('This report is not available yet. Please try again later.'); }
    let data;
    try {
      const b = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
      const kb = b(k.replace(/-/g,'+').replace(/_/g,'/') + '='.repeat((4 - k.length % 4) % 4));
      const raw = b(txt);
      const key = await crypto.subtle.importKey('raw', kb, 'AES-GCM', false, ['decrypt']);
      const plain = await crypto.subtle.decrypt({name: 'AES-GCM', iv: raw.slice(0, 12)}, key, raw.slice(12));
      data = JSON.parse(await new Response(new Blob([plain]).stream().pipeThrough(new DecompressionStream('deflate'))).text());
    } catch (e) { return msg('This report link is not valid. Please use the full link your account manager sent you.'); }
    const m = data.meta;
    let html = BODY.split('__CLIENT_SHORT__').join(esc(m.customer_word || m.client)).split('__CLIENT__').join(esc(m.client)).split('__REVIEW__').join(esc(m.review_name || 'review'));
    html = html.split('from James').join('from ' + esc(m.bot_name || 'James'));
    (m.page_replace || []).forEach(([a, b]) => { html = html.split(a).join(b); });
    document.title = m.client + ' Outreach Report';
    
    window.__GO_DATA__ = data.data;
    root.innerHTML = html;
    runShim(); runReport(); window.__goRunAll();
  }
  function runShim(){ 
(function(){
  const RAW = window.__GO_DATA__ || {};
  const calcs = {}, draws = {}, cache = {};
  function get(id) {
    if (RAW.__calc && RAW.__calc[id]) return {status: 'ok', data: RAW.__calc[id]};
    if (RAW[id]) { const d = RAW[id].slice(); d.columns = RAW[id].length ? Object.keys(RAW[id][0]) : []; return {status: 'ok', data: d}; }
    if (calcs[id]) { if (!(id in cache)) cache[id] = calcs[id].fn(...calcs[id].inputs.map(i => get(i).data)); return {status: 'ok', data: cache[id]}; }
    return {status: 'missing', data: []};
  }
  function run(name) { document.querySelectorAll('[data-draw="' + name + '"]').forEach(el => { try { draws[name](el); } catch (e) { console.error(name, e); } }); }
  window.dash = {
    data: get, calc: (id, spec) => { calcs[id] = spec; }, loader: () => {}, onData: (fn) => fn(),
    draw: (name, fn) => { if (fn) draws[name] = typeof fn === 'function' ? fn : (el => fn.update ? fn.update(el, fn.mount && fn.mount(el)) : null); else run(name); },
    colors: ['var(--go-green)'], params: () => ({}), setParams: () => {}, resetParams: () => {}, setLink: () => {}, refresh: () => {}
  };
  let w = window.innerWidth;
  window.__goRunAll = () => Object.keys(draws).forEach(run);
  window.addEventListener('resize', () => { if (Math.abs(window.innerWidth - w) > 20) { w = window.innerWidth; Object.keys(draws).forEach(run); } });
})();
 }
  function runReport(){ 
(function(){
  const pct = (a,b) => b ? a/b : 0;
  const STAGES = ['First message','Bump 1','Bump 2','Bump 3','Final message'];
  const NEG = o => o === 'Negative: objected to AI' || o === 'Negative: other';
  const inWeek = (d, r) => !!d && d >= r.week_start && d <= r.week_end;
  dash.calc('kpi', {
    title: 'Headline figures', description: 'Campaign-to-date totals and this week\'s figures, from the per-customer file.',
    inputs: ['contacts', 'report'],
    fn: (contacts, report) => {
      const r = report[0] || {week_start: '', week_end: ''};
      const n = contacts.length;
      const replied = contacts.filter(c => c.replied === 'yes').length;
      const booked = contacts.filter(c => c.outcome === 'Booked').length;
      const ai = contacts.filter(c => c.outcome === 'Negative: objected to AI').length;
      const neg = contacts.filter(c => NEG(c.outcome)).length;
      const afterBump = contacts.filter(c => c.replied === 'yes' && c.reply_after && c.reply_after !== 'First message').length;
      return [{contacted: n, replied, reply_rate: pct(replied, n), booked, booked_rate: pct(booked, n),
        engaged: contacts.filter(c => c.outcome === 'Engaged, not booked yet').length,
        happy: contacts.filter(c => c.outcome === 'Checked in, happy with current cover').length,
        negative: neg, negative_rate: pct(neg, n), ai_objections: ai, ai_rate: pct(ai, n),
        after_bump: afterBump, after_bump_rate: pct(afterBump, replied),
        week_contacted: contacts.filter(c => inWeek(c.first_message_date, r)).length,
        week_replied: contacts.filter(c => inWeek(c.first_reply_date, r)).length,
        week_booked: contacts.filter(c => c.outcome === 'Booked' && inWeek(c.booked_on, r)).length,
        week_negative: contacts.filter(c => NEG(c.outcome) && inWeek(c.negative_on, r)).length}];
    }
  });
  dash.calc('by_week', {
    title: 'Week by week', description: 'Customers messaged, first replies, bookings and negatives in each Monday-to-Sunday week.',
    inputs: ['contacts'],
    fn: (contacts) => {
      const wk = d => d ? d3.utcMonday.floor(new Date(d + 'T00:00:00Z')).toISOString().slice(0, 10) : null;
      const m = new Map();
      const add = (k, f) => { if (!k) return; if (!m.has(k)) m.set(k, {week: k, contacted: 0, replied: 0, booked: 0, negative: 0}); m.get(k)[f]++; };
      contacts.forEach(c => { add(wk(c.first_message_date), 'contacted'); add(wk(c.first_reply_date), 'replied');
        if (c.outcome === 'Booked') add(wk(c.booked_on), 'booked'); if (NEG(c.outcome)) add(wk(c.negative_on), 'negative'); });
      return Array.from(m.values()).sort((a, b) => d3.descending(a.week, b.week));
    }
  });
  dash.calc('outcomes', {
    title: 'Outcome of each reply', description: 'Customers who replied, counted by the outcome we recorded.',
    inputs: ['contacts'],
    fn: (contacts) => {
      const order = ['Booked','Engaged, not booked yet','Checked in, happy with current cover','Not needed yet','Already covered, sold or with an adviser','Already sorted, sold or with an adviser','Declined politely','Replied, no clear answer yet','Negative: other','Negative: objected to AI'];
      const r = contacts.filter(c => c.replied === 'yes');
      return order.map(o => ({outcome: o, customers: r.filter(c => c.outcome === o).length})).filter(x => x.customers > 0 || !['Checked in, happy with current cover','Not needed yet','Already covered, sold or with an adviser','Already sorted, sold or with an adviser'].includes(x.outcome));
    }
  });
  dash.calc('by_campaign', {
    title: 'Results by list', description: 'Messaged, replied and booked for each outreach list.',
    inputs: ['contacts'],
    fn: (contacts) => Array.from(d3.group(contacts, c => c.campaign), ([campaign, rows]) => {
      const replied = rows.filter(c => c.replied === 'yes').length;
      return {campaign, contacted: rows.length, replied, reply_rate: pct(replied, rows.length), booked: rows.filter(c => c.outcome === 'Booked').length};
    }).sort((a, b) => b.contacted - a.contacted)
  });
  dash.calc('reply_stage', {
    title: 'Message customers first replied to', description: 'For customers who replied: the last outreach message they had been sent before their first reply.',
    inputs: ['contacts'],
    fn: (contacts) => STAGES.map(s => ({message: s, customers: contacts.filter(c => c.reply_after === s).length}))
  });
  dash.calc('waiting', {
    title: 'No reply yet, by last message', description: 'Customers who have not replied, by the furthest message they have been sent.',
    inputs: ['contacts'],
    fn: (contacts) => STAGES.map(s => ({message: s, customers: contacts.filter(c => c.replied === 'no' && c.furthest_message === s).length}))
  });
  dash.calc('neg_causes', {
    title: 'Negative conversations by cause', description: 'Rows of the negative log counted by cause, with AI objections grouped together.',
    inputs: ['negatives'],
    fn: (negatives) => Array.from(d3.rollup(negatives, v => v.length, r => r.type === 'Objected to AI' ? 'Objected to AI' : r.cause), ([cause, customers]) => ({cause, customers})).sort((a, b) => b.customers - a.customers)
  });
  dash.calc('ai_mix', {
    title: 'Conversations where AI came up', description: 'Every conversation where the customer mentioned AI, a bot or automation, by how they reacted.',
    inputs: ['ai_mentions'],
    fn: (ai_mentions) => ['Objected to AI','Asked or noticed, carried on','Noticed, declined for another reason'].map(r => ({reaction: r, customers: ai_mentions.filter(a => a.reaction === r).length}))
  });
  dash.calc('by_adviser', {
    title: 'Booked by adviser', description: 'Bookings counted by the adviser named in the booking confirmation.',
    inputs: ['contacts'],
    fn: (contacts) => Array.from(d3.rollup(contacts.filter(c => c.outcome === 'Booked'), v => v.length, c => c.adviser || 'Not named'), ([adviser, booked]) => ({adviser, booked})).sort((a, b) => b.booked - a.booked)
  });
  dash.calc('appt_month', {
    title: 'Booked appointments by month', description: 'Month of each booked review appointment.',
    inputs: ['contacts'],
    fn: (contacts) => Array.from(d3.rollup(contacts.filter(c => c.outcome === 'Booked' && c.appointment_date), v => v.length, c => c.appointment_date.slice(0, 7)), ([month, appointments]) => ({month, appointments})).sort((a, b) => d3.ascending(a.month, b.month))
  });

  const fInt = d3.format(','), fPct = d3.format('.0%'), fPct1 = d3.format('.1%');
  dash.draw('week-label', (el) => { const r = dash.data('report'); el.textContent = (r.status === 'ok' && r.data[0]) ? r.data[0].label : '—'; });
  const kpiField = (name, field, fmt) => dash.draw(name, (el) => {
    const k = dash.data('kpi');
    el.textContent = (k.status === 'ok' && k.data && k.data[0]) ? fmt(k.data[0][field]) : '—';
  });
  [['k-contacted','contacted',fInt],['k-replied','replied',fInt],['k-reply-rate','reply_rate',fPct],['k-booked','booked',fInt],['k-w-booked','week_booked',fInt],['k-neg','negative',fInt],['k-neg-rate','negative_rate',fPct1],['k-ai','ai_objections',fInt],['k-after-bump','after_bump',fInt],['k-after-bump-rate','after_bump_rate',fPct],
   ['t-contacted','contacted',fInt],['t-w-contacted','week_contacted',fInt],['t-replied','replied',fInt],['t-reply-rate','reply_rate',fPct],['t-w-replied','week_replied',fInt],['t-booked','booked',fInt],['t-booked-rate','booked_rate',fPct],['t-w-booked','week_booked',fInt],['t-engaged','engaged',fInt],['t-happy','happy',fInt],['t-neg','negative',fInt],['t-neg-rate','negative_rate',fPct1],['t-w-neg','week_negative',fInt],['t-ai','ai_objections',fInt],['t-ai-rate','ai_rate',fPct1],['t-ho','handovers',fInt],['t-ho-rate','handover_rate',fPct],['t-ho-rate-msg','handover_rate_msg',fPct1],['k-ho','handovers',fInt],['k-ho-rate-msg','handover_rate_msg',fPct1],['t-w-ho','week_handovers',fInt],['k-ho-booked','handovers_booked',fInt]
  ].forEach(([n,f,fmt]) => kpiField(n,f,fmt));

  window.goHBar = function(el, id, labelKey, valueKey, opts) {
    opts = opts || {};
    const s = dash.data(id);
    el.replaceChildren();
    if (s.status !== 'ok' || !Array.isArray(s.data)) { el.textContent = s.status === 'error' ? 'Failed to load' : '—'; return; }
    const rows = s.data;
    if (!rows.length) { el.textContent = 'None yet'; return; }
    const lab = (r) => opts.label ? opts.label(r) : r[labelKey];
    const W = Math.max(260, el.clientWidth || 320), barH = 22, gap = 8;
    const svg = d3.select(el).append('svg').attr('role','img').attr('aria-label', el.getAttribute('aria-label') || '');
    const tmp = svg.append('g'); let labW = 0;
    rows.forEach(r => { const t = tmp.append('text').text(lab(r)); labW = Math.max(labW, t.node().getComputedTextLength()); });
    tmp.remove();
    labW = Math.min(labW + 10, W * 0.55);
    const valW = 64, H = rows.length * (barH + gap);
    svg.attr('viewBox', `0 0 ${W} ${H}`).attr('height', H);
    const x = d3.scaleLinear().domain([0, d3.max(rows, r => +r[valueKey]) || 1]).range([0, W - labW - valW]);
    const fmtv = d => opts.fmt ? opts.fmt(d) : fInt(+d[valueKey]);
    const tip = d3.select(el).append('div').attr('class','mab-tip').style('display','none');
    const g = svg.selectAll('g.row').data(rows).join('g').attr('class','row').attr('transform', (d,i) => `translate(0,${i*(barH+gap)})`);
    g.append('text').attr('x', labW - 10).attr('y', barH/2).attr('dy','0.35em').attr('text-anchor','end').text(d => lab(d));
    g.append('rect').attr('x', labW).attr('y', 0).attr('height', barH).attr('rx', 3).attr('width', d => Math.max(1, x(+d[valueKey])))
      .style('fill', d => (opts.color ? opts.color(d) : 'var(--go-green)'));
    g.append('text').attr('class','val').attr('x', d => labW + x(+d[valueKey]) + 6).attr('y', barH/2).attr('dy','0.35em').text(fmtv);
    g.append('rect').attr('x',0).attr('y',0).attr('width',W).attr('height',barH).style('fill','transparent')
      .on('pointerenter pointermove', (ev, d) => { const [mx, my] = d3.pointer(ev, el);
        tip.style('display', null).text(`${lab(d)}: ${fmtv(d)}`).style('left', Math.min(mx + 12, el.clientWidth - 200) + 'px').style('top', (my + 12) + 'px'); })
      .on('pointerleave', () => tip.style('display','none'));
  };
  const neutral = 'var(--cds-chart-muted)', crit = 'var(--cds-chart-status-critical)';
  dash.draw('c-outcomes', (el) => {
    const tot = (dash.data('outcomes').data || []).reduce((a,r) => a + r.customers, 0);
    goHBar(el, 'outcomes', 'outcome', 'customers', {
      color: d => d.outcome.startsWith('Negative') ? crit : (d.outcome === 'Booked' || d.outcome.startsWith('Engaged') || d.outcome.startsWith('Checked')) ? 'var(--go-green)' : neutral,
      fmt: d => `${fInt(d.customers)} (${fPct(tot ? d.customers/tot : 0)})` });
  });
  dash.draw('c-reply-stage', (el) => goHBar(el, 'reply_stage', 'message', 'customers', { color: d => d.message === 'First message' ? neutral : 'var(--go-green)' }));
  dash.draw('c-waiting', (el) => goHBar(el, 'waiting', 'message', 'customers', { color: d => d.message === 'Final message' ? neutral : 'var(--go-green)' }));
  dash.draw('c-neg-causes', (el) => goHBar(el, 'neg_causes', 'cause', 'customers', { color: d => d.cause === 'Objected to AI' ? crit : neutral }));
  dash.draw('c-ai', (el) => goHBar(el, 'ai_mix', 'reaction', 'customers', { color: d => d.reaction === 'Objected to AI' ? crit : neutral }));
  dash.draw('c-handover-reasons', (el) => goHBar(el, 'handover_reasons', 'reason', 'customers', { color: d => /did not want AI/.test(d.reason) ? crit : 'var(--go-green)' }));
  dash.draw('c-adviser', (el) => goHBar(el, 'by_adviser', 'adviser', 'booked', {}));
  dash.draw('c-appt-month', (el) => goHBar(el, 'appt_month', 'month', 'appointments', { label: d => d3.utcFormat('%B %Y')(new Date(d.month + '-01T00:00:00Z')) }));

  const td = (t, cls) => { const c = document.createElement('td'); if (cls) c.className = cls; c.textContent = t; return c; };
  const fDay = d => d ? d3.utcFormat('%a %-d %b')(new Date(d + 'T00:00:00Z')) : '';
  dash.draw('week-rows', (tb) => {
    const s = dash.data('by_week'); tb.replaceChildren(); if (s.status !== 'ok' || !Array.isArray(s.data)) return;
    s.data.forEach(r => { const tr = document.createElement('tr'); tr.dataset.key = r.week;
      tr.append(td(fDay(r.week)), td(fInt(r.contacted),'num'), td(fInt(r.replied),'num'), td(fInt(r.booked),'num'), td(fInt(r.negative),'num')); tb.appendChild(tr); });
  });
  dash.draw('campaign-rows', (tb) => {
    const s = dash.data('by_campaign'); tb.replaceChildren(); if (s.status !== 'ok' || !Array.isArray(s.data)) return;
    s.data.forEach(r => { const tr = document.createElement('tr');
      tr.append(td(r.campaign), td(fInt(r.contacted),'num'), td(fInt(r.replied),'num'), td(fPct(r.reply_rate),'num'), td(fInt(r.booked),'num')); tb.appendChild(tr); });
  });
  dash.draw('handover-rows', (tb) => {
    const s = dash.data('handover_reasons'); tb.replaceChildren(); if (s.status !== 'ok' || !Array.isArray(s.data)) return;
    if (!s.data.length) { const tr = document.createElement('tr'); const c = td('None yet'); c.colSpan = 4; tr.appendChild(c); tb.appendChild(tr); return; }
    const anyBooked = s.data.some(r => r.then_booked > 0);
    const th = document.getElementById('ho-booked-th'); if (th) th.hidden = !anyBooked;
    const wrap = document.getElementById('ho-booked-wrap'); if (wrap) wrap.hidden = !anyBooked;
    s.data.forEach(r => { const tr = document.createElement('tr');
      tr.append(td(r.reason), td(fInt(r.customers),'num'), td(fInt(r.this_week),'num'));
      if (anyBooked) tr.append(td(fInt(r.then_booked),'num')); tb.appendChild(tr); });
  });
  dash.draw('neg-rows', (tb) => {
    const s = dash.data('negatives'); tb.replaceChildren(); if (s.status !== 'ok') return;
    s.data.forEach(r => { const tr = document.createElement('tr');
      const typeCell = document.createElement('td'); const pill = document.createElement('span');
      pill.className = 'mab-pill ' + (r.type === 'Objected to AI' ? 'ai' : 'other'); pill.textContent = r.type; typeCell.appendChild(pill);
      tr.append(td(r.customer), td(fDay(r.date)), typeCell, td(r.cause), td('“' + r.what_they_said + '”', 'quote'), td(r.what_happened_next)); tb.appendChild(tr); });
  });
})();
 }
  main();
})();
