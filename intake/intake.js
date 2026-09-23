/* intake.js — collects a Business Operations form and posts it to /.netlify/functions/intake.
   The page's <form> carries data-kind (quote | onboarding), data-service (clarity | operations | build)
   and data-service-name. Each question is a .q with data-q (the question text). */
(function () {
  var form = document.querySelector('form[data-kind]');
  if (!form) return;
  var btn = form.querySelector('button[type=submit]');
  var err = form.querySelector('.err');
  var done = document.querySelector('.done');

  function showError(msg) { err.textContent = msg; err.classList.add('show'); err.scrollIntoView({ behavior: 'smooth', block: 'center' }); }

  function collect() {
    var answers = [];
    form.querySelectorAll('.q[data-q]').forEach(function (q) {
      var label = q.getAttribute('data-q');
      var val = '';
      var checks = q.querySelectorAll('input[type=checkbox]:checked');
      var radio = q.querySelector('input[type=radio]:checked');
      var field = q.querySelector('textarea, input[type=text], input[type=url]');
      if (checks.length) { val = Array.prototype.map.call(checks, function (c) { return c.value; }).join('; '); }
      else if (radio) { val = radio.value; }
      else if (field) { val = field.value.trim(); }
      answers.push({ q: label, a: val });
    });
    return answers;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.classList.remove('show');
    var name = form.querySelector('[name=name]');
    var business = form.querySelector('[name=business]');
    var email = form.querySelector('[name=email]');
    var ok = true;
    [name, business, email].forEach(function (f) {
      f.classList.remove('invalid');
      if (!f.value.trim() || (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value.trim()))) { f.classList.add('invalid'); ok = false; }
    });
    if (!ok) { showError('Add your name, business name and a working email so I can reply.'); return; }

    var payload = {
      kind: form.getAttribute('data-kind'),
      service: form.getAttribute('data-service'),
      serviceName: form.getAttribute('data-service-name'),
      name: name.value.trim(),
      business: business.value.trim(),
      email: email.value.trim(),
      answers: collect(),
      website: form.querySelector('[name=website]') ? form.querySelector('[name=website]').value : '',
      page: location.pathname
    };

    btn.disabled = true; var old = btn.textContent; btn.textContent = 'Sending';
    fetch('/.netlify/functions/intake', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (!res.ok || !res.body || !res.body.success) { throw new Error((res.body && res.body.error) || 'send failed'); }
        form.style.display = 'none';
        done.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(function () {
        btn.disabled = false; btn.textContent = old;
        showError('That did not go through. Try once more, or email your answers to theintentionaltea@gmail.com and I will take it from there.');
      });
  });
})();
