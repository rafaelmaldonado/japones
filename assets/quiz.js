// Reusable recall-quiz widget shared across lessons.
// Markup: <div class="quiz" data-quiz='[{"prompt":"あ","answer":"a","options":["a","i","u","e"]}]'></div>
// Renders one question at a time, gives immediate feedback, tracks score. Retrieval practice.
document.querySelectorAll('.quiz[data-quiz]').forEach(function (root) {
  var questions = JSON.parse(root.getAttribute('data-quiz'));
  var i = 0, correct = 0, answered = false;

  var promptEl = document.createElement('div'); promptEl.className = 'prompt';
  var optsEl = document.createElement('div'); optsEl.className = 'options';
  var fbEl = document.createElement('div'); fbEl.className = 'feedback';
  var scoreEl = document.createElement('div'); scoreEl.className = 'score';
  root.append(promptEl, optsEl, fbEl, scoreEl);

  function render() {
    answered = false;
    var q = questions[i];
    promptEl.textContent = q.prompt;
    fbEl.textContent = '';
    optsEl.innerHTML = '';
    q.options.forEach(function (opt) {
      var b = document.createElement('button');
      b.className = 'opt'; b.textContent = opt;
      b.onclick = function () { choose(b, opt, q.answer); };
      optsEl.appendChild(b);
    });
    scoreEl.textContent = 'Question ' + (i + 1) + ' of ' + questions.length + ' · Score: ' + correct;
  }

  function choose(btn, opt, answer) {
    if (answered) return;
    answered = true;
    if (opt === answer) {
      btn.classList.add('correct'); correct++;
      fbEl.textContent = '✓ Correct!'; fbEl.style.color = 'var(--good)';
    } else {
      btn.classList.add('wrong');
      fbEl.textContent = '✗ It was "' + answer + '"'; fbEl.style.color = 'var(--bad)';
      Array.from(optsEl.children).forEach(function (c) {
        if (c.textContent === answer) c.classList.add('correct');
      });
    }
    setTimeout(function () {
      i++;
      if (i < questions.length) render();
      else finish();
    }, 1100);
  }

  function finish() {
    promptEl.textContent = '🎉';
    optsEl.innerHTML = '';
    fbEl.textContent = 'Done! ' + correct + ' / ' + questions.length + ' correct.';
    fbEl.style.color = 'var(--ink)';
    scoreEl.textContent = correct === questions.length
      ? 'Perfect — you recalled them all from memory.'
      : 'Refresh the page to try again for a perfect score.';
  }

  render();
});
