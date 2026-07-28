// Substitui o bloco <style>...</style> no index.html pelo CSS compilado mais recente.
// Executado automaticamente após `npm run build:css`.

const fs = require('fs');
const path = require('path');

const htmlFiles = ['index.html', 'politica-de-privacidade.html'];
const cssPath = path.join(__dirname, '../css/styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

for (const filename of htmlFiles) {
  const htmlPath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(htmlPath)) continue;

  let html = fs.readFileSync(htmlPath, 'utf8');

  // Substitui bloco <style>...</style> existente (CSS inline Tailwind)
  const styleRegex = /<!-- Tailwind CSS \(inline[^>]*\) -->\s*<style>[\s\S]*?<\/style>/;

  if (styleRegex.test(html)) {
    html = html.replace(
      styleRegex,
      `<!-- Tailwind CSS (inline - evita request render-blocking) -->\n    <style>${css}</style>`
    );
    fs.writeFileSync(htmlPath, html);
    console.log(`✓ CSS inlineado em ${filename}`);
  } else {
    console.warn(`⚠ Bloco <style> não encontrado em ${filename}`);
  }
}
