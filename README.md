# Aprende Japonés 🇯🇵

Curso personal de japonés en sesiones cortas. Metas: **sostener una conversación** y **escribir cartas**.

## Ver el curso

Publicado con **GitHub Pages**: abre `index.html` (la portada con el índice de
lecciones y la barra de progreso).

## Publicar en GitHub Pages

1. Sube esta carpeta al repo:
   ```bash
   git init
   git add .
   git commit -m "Curso de japonés: lección 1"
   git branch -M main
   git remote add origin https://github.com/rafaelmaldonado/japones.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Branch: `main` / root** → Save.
3. Tu curso quedará en `https://rafaelmaldonado.github.io/japones/`.

Todas las rutas son relativas, así que funciona igual en local y en Pages.

## Estructura

- `index.html` — portada con índice y progreso.
- `lessons/` — lecciones (HTML autónomo).
- `reference/` — material de consulta (tabla de kana).
- `assets/` — estilos y componentes compartidos (`style.css`, `quiz.js`, `speak.js`, `course.js`).
