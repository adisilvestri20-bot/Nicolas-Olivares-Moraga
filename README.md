# Sitio web · Nicolás Olivares Moraga — Planes de salud Banmédica

Sitio estático de una sola carpeta. No necesita servidor, base de datos ni compilación:
basta subir **todos** los archivos de esta carpeta al mismo nivel en tu hosting.

## Archivos

| Archivo | Qué es |
| --- | --- |
| index.html | Página principal: portada, presentación, servicios, 3 pasos, casos, cotiza gratis, preguntas frecuentes y contacto |
| calculadora.html | Comparador / calculadora de valor del 7% con los valores base del tarifario |
| styles.css | Hoja de estilos (tokens de color, tipografías y componentes) |
| support.js | Runtime que monta las páginas |
| ds-bundle.js | Complemento del sistema de diseño |
| image-slot.js | Soporte del marco de la foto ejecutiva |
| portada-banmedica.png | Foto de fondo de la portada |
| banmedica.png | Logo Banmédica usado sobre la sección de servicios |
| foto-ejecutiva.jpeg | Tu foto ejecutiva |
| tarifario.pdf | Tarifario Santiago 01/09/2026 (referencia interna, no se muestra en el sitio) |

## Cómo publicarlo

1. Sube todos los archivos juntos, sin crear subcarpetas.
2. Verifica que `index.html` quede en la raíz del dominio.
3. Listo: `https://tudominio.cl/` abre la portada y `https://tudominio.cl/calculadora.html` el comparador.

Funciona igual en Netlify (arrastrar la carpeta), Vercel, GitHub Pages, cPanel o cualquier hosting con FTP.

## Datos que puedes editar sin tocar el diseño

- **WhatsApp:** busca `56994754618` y reemplázalo por otro número (formato internacional, sin + ni espacios).
- **Correo:** busca `Nolivares@banmedica.cl`.
- **Valor de la UF:** busca `39500` en `calculadora.html` y actualízalo cuando cambie.
- **Foto ejecutiva:** reemplaza `foto-ejecutiva.jpeg` conservando el mismo nombre.
- **Testimonios y los 3 pasos:** están como texto directo en `index.html`.

## Pendientes conocidos

- Los testimonios de la sección "Casos reales" son de ejemplo: reemplázalos por los reales.
- El formulario "Cotiza gratis" no envía correos: abre WhatsApp con los datos ya escritos.
- Los valores de la calculadora son estimaciones (valor base real × factor aproximado); la cotización formal se emite aparte.
