# Sitio web · Nicolás Olivares Moraga — Asesor Banmédica

Sitio estático, sin compilación. Todos los archivos van en la **raíz del repositorio** (sin carpetas).

## Archivos

- `index.html` — página principal (portada con textos rotativos, cómo funciona, calculadora, planes por perfil, casos reales, certificaciones, preguntas frecuentes, contacto)
- `calculadora.html` — comparador completo con valores base del tarifario
- `agenda.html` — reserva de horas online o presencial (lunes a domingo, 08:00–00:00); confirma por WhatsApp
- `support.js`, `styles.css`, `ds-bundle.js` — necesarios para que las páginas funcionen
- `foto-ejecutiva.jpeg`, `fachada-banmedica.jpeg`, `og-portada.jpg` — imágenes
- `cert-*.jpg` — certificaciones (imagen con marca de agua, solo visualización en la página; los PDF originales no se publican)
- `tarifario.pdf` — referencia interna (no está enlazado)
- `robots.txt`, `sitemap.xml`, `.nojekyll` — SEO y GitHub Pages

## Subir a GitHub

1. Borra del repositorio los archivos antiguos que ya no aparecen en esta lista (por ejemplo `image-slot.js`, `banmedica.png`, `portada-banmedica.png`).
2. Sube todos estos archivos a la raíz y haz commit.
3. Si usas GitHub Pages: Settings → Pages → Branch `main` / carpeta `/ (root)`.

## Datos editables

- WhatsApp: `56994754618` · Correo: `Nolivares@banmedica.cl` · Instagram: `nico.asesorias`
- Valor UF: busca `39500` en `index.html` y `calculadora.html`
- Dominio SEO: busca `olivares-asesoria.cl` en `index.html`, `robots.txt` y `sitemap.xml`

## Notas

- La agenda no bloquea horas automáticamente: cada reserva llega por WhatsApp y tú la confirmas.
- Los valores de la calculadora son estimaciones; la cotización formal se emite aparte.
