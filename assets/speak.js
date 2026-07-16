// Pronunciación con la voz del navegador. Botones con data-say="<texto>".
// Intenta usar una voz japonesa si está disponible; si no, lee el texto igual.
document.querySelectorAll('button.say[data-say]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (!('speechSynthesis' in window)) { alert('Tu navegador no soporta audio de voz.'); return; }
    var u = new SpeechSynthesisUtterance(btn.getAttribute('data-say'));
    var jp = speechSynthesis.getVoices().find(function (v) { return v.lang && v.lang.indexOf('ja') === 0; });
    if (jp) u.voice = jp;
    u.lang = 'ja-JP';
    u.rate = 0.8;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  });
});
