/**
 * ===================================================================
 * VANEXIA - CONFIGURACIÓN DE CONTACTO POR WHATSAPP
 * ===================================================================
 * Para cambiar el número de WhatsApp o el mensaje predeterminado,
 * simplemente modificá los valores de este objeto:
 */
const VANEXIA_CONFIG = {
  // 1. TU NÚMERO DE TELÉFONO:
  // Escribí el número en formato internacional, sin signos +, guiones ni espacios.
  whatsappNumber: "5492974110228",

  // 2. MENSAJE PREDETERMINADO:
  // Este es el mensaje con el que el cliente iniciará la conversación contigo:
  defaultMessage: "Hola Vane! Vi la web de Vanexia y quiero saber más sobre cómo optimizar el análisis de datos de mi negocio.",
};

// ===================================================================
// LÓGICA DE INICIALIZACIÓN
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupWhatsAppLinks();
  setupSmoothScroll();
});

/**
 * Conecta todos los botones y enlaces de WhatsApp al número configurado
 */
function setupWhatsAppLinks() {
  const cleanNumber = VANEXIA_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(VANEXIA_CONFIG.defaultMessage);
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  // Seleccionar todos los elementos con atributo data-action="whatsapp" o clase "whatsapp-btn"
  const waButtons = document.querySelectorAll('[data-action="whatsapp"], .whatsapp-btn');
  
  waButtons.forEach((btn) => {
    btn.setAttribute("href", waUrl);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

/**
 * Desplazamiento suave para enlaces ancla internos
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#" && targetId !== "#whatsapp") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}
