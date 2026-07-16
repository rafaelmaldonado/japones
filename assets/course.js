// Fuente única de la estructura del curso. La usan index.html y la barra de progreso.
// "status": "done" = publicada; "next" = próxima a crear; "locked" = aún no creada.
// Camino completo hacia las metas: sostener conversación + escribir cartas.
window.COURSE = {
  title: "Aprende Japonés",
  units: [
    {
      unit: 1, name: "Fundamentos de escritura", goal: "Leer y escribir kana",
      lessons: [
        { n: 1, file: "lessons/0001-las-cinco-vocales.html", title: "Las cinco vocales", desc: "あ い う え お", status: "done" },
        { n: 2, file: "lessons/0002-columna-k.html", title: "Columna K", desc: "か き く け こ", status: "done" },
        { n: 3, file: "#", title: "Columna S", desc: "さ し す せ そ", status: "next" },
        { n: 4, file: "#", title: "Columna T", desc: "た ち つ て と", status: "locked" },
        { n: 5, file: "#", title: "Columna N", desc: "な に ぬ ね の", status: "locked" },
        { n: 6, file: "#", title: "Columna H", desc: "は ひ ふ へ ほ", status: "locked" },
        { n: 7, file: "#", title: "Columnas M · Y", desc: "ま… や ゆ よ", status: "locked" },
        { n: 8, file: "#", title: "Columnas R · W · N", desc: "ら… わ を ん", status: "locked" },
        { n: 9, file: "#", title: "Sonidos con dakuten", desc: "が ざ だ ば ぱ", status: "locked" },
        { n: 10, file: "#", title: "Katakana", desc: "El silabario para palabras extranjeras", status: "locked" }
      ]
    },
    {
      unit: 2, name: "Frases de supervivencia", goal: "Presentarse y ser cortés",
      lessons: [
        { n: 11, file: "#", title: "Saludos", desc: "こんにちは, ありがとう…", status: "locked" },
        { n: 12, file: "#", title: "Presentarse", desc: "はじめまして, 私は…です", status: "locked" },
        { n: 13, file: "#", title: "Cortesía básica", desc: "por favor, perdón, sí/no", status: "locked" }
      ]
    },
    {
      unit: 3, name: "Gramática básica", goal: "Formar frases",
      lessons: [
        { n: 14, file: "#", title: "Orden de la frase (SOV)", desc: "Sujeto-Objeto-Verbo", status: "locked" },
        { n: 15, file: "#", title: "Partícula は", desc: "El tema de la frase", status: "locked" },
        { n: 16, file: "#", title: "Partículas を y に", desc: "Objeto y destino", status: "locked" },
        { n: 17, file: "#", title: "です / ます", desc: "Forma cortés", status: "locked" }
      ]
    },
    {
      unit: 4, name: "Vocabulario temático", goal: "Ampliar palabras",
      lessons: [
        { n: 18, file: "#", title: "Números", desc: "1–100", status: "locked" },
        { n: 19, file: "#", title: "Familia", desc: "家族", status: "locked" },
        { n: 20, file: "#", title: "Tiempo y días", desc: "hoy, mañana, días", status: "locked" },
        { n: 21, file: "#", title: "Verbos comunes", desc: "ir, comer, hacer…", status: "locked" }
      ]
    },
    {
      unit: 5, name: "Conversación", goal: "META 1: sostener una conversación",
      lessons: [
        { n: 22, file: "#", title: "Hacer preguntas", desc: "¿qué? ¿dónde? ¿cuándo?", status: "locked" },
        { n: 23, file: "#", title: "Diálogo: en un café", desc: "pedir, pagar", status: "locked" },
        { n: 24, file: "#", title: "Diálogo: conocer a alguien", desc: "charla informal", status: "locked" },
        { n: 25, file: "#", title: "Práctica libre de conversación", desc: "role-play conmigo", status: "locked" }
      ]
    },
    {
      unit: 6, name: "Kanji esencial", goal: "Leer y escribir textos",
      lessons: [
        { n: 26, file: "#", title: "Qué es el kanji", desc: "significado + lecturas", status: "locked" },
        { n: 27, file: "#", title: "Kanji de números y días", desc: "一 二 三 日 月…", status: "locked" },
        { n: 28, file: "#", title: "Kanji cotidianos", desc: "人 大 小 上 下…", status: "locked" }
      ]
    },
    {
      unit: 7, name: "Escribir cartas", goal: "META 2: escribir cartas",
      lessons: [
        { n: 29, file: "#", title: "Estructura de una carta", desc: "拝啓 … 敬具", status: "locked" },
        { n: 30, file: "#", title: "Saludos de estación", desc: "fórmulas de apertura", status: "locked" },
        { n: 31, file: "#", title: "Escribe tu primera carta", desc: "carta corta a un amigo", status: "locked" }
      ]
    }
  ]
};

// Lista plana de todas las lecciones.
window.COURSE.allLessons = function () {
  return window.COURSE.units.reduce(function (acc, u) { return acc.concat(u.lessons); }, []);
};

// Progreso = lecciones terminadas / total.
window.COURSE.progress = function () {
  var all = window.COURSE.allLessons();
  var done = all.filter(function (l) { return l.status === "done"; }).length;
  return { done: done, total: all.length, pct: Math.round((done / all.length) * 100) };
};

// Pinta una barra de progreso dentro del elemento dado.
window.COURSE.renderProgress = function (el) {
  if (!el) return;
  var p = window.COURSE.progress();
  el.innerHTML =
    '<div class="label">Progreso del curso · ' + p.done + ' de ' + p.total + ' lecciones</div>' +
    '<div class="track"><div class="fill" style="width:' + p.pct + '%"></div></div>';
};
