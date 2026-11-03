/*
 * Seguimiento de conversiones para Google Ads (olivares-asesoria.cl)
 *
 * Mide tres acciones:
 *   - whatsapp: clic en cualquier enlace a WhatsApp
 *   - telefono: clic en cualquier enlace "tel:"
 *   - reserva:  envío de la agenda (la página abre WhatsApp con window.open)
 *
 * Mientras ID esté vacío no se carga nada de Google y el sitio funciona igual.
 *
 * Para activarlo:
 *   1. Pega en ID el identificador de Google Ads, por ejemplo "AW-1234567890".
 *   2. En Google Ads crea una conversión de tipo "Sitio web" por cada acción
 *      y pega su "ID/etiqueta" (por ejemplo "AW-1234567890/AbCdEfGh") abajo.
 */
(function () {
  var ID = "AW-18552826390";
  var CONVERSIONES = {
    whatsapp: "",
    telefono: "",
    reserva: ""
  };

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  if (ID) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ID);
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", ID);
  }

  var enviados = {};
  function medir(nombre) {
    // Evita contar dos veces el mismo evento en menos de 2 segundos.
    var ahora = Date.now();
    if (enviados[nombre] && ahora - enviados[nombre] < 2000) return;
    enviados[nombre] = ahora;
    try {
      gtag("event", nombre);
      if (ID && CONVERSIONES[nombre]) {
        gtag("event", "conversion", { send_to: CONVERSIONES[nombre] });
      }
    } catch (e) { /* el seguimiento nunca debe romper el sitio */ }
  }

  // Clics en enlaces. Se escucha en el documento porque los enlaces los
  // genera la página al cargar.
  document.addEventListener("click", function (ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!el) return;
    var href = el.getAttribute("href") || "";
    if (href.indexOf("tel:") === 0) {
      medir("telefono");
    } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
      medir("whatsapp");
    }
  }, true);

  // La reserva de la agenda abre WhatsApp con window.open al enviar.
  var abrir = window.open;
  window.open = function (url) {
    try {
      if (typeof url === "string" && /^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(url)) {
        medir("reserva");
      }
    } catch (e) { /* ignorar */ }
    return abrir.apply(window, arguments);
  };
})();
