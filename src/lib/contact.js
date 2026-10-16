export const WHATSAPP_NUMBER = '593992672980';
const DEFAULT_MESSAGE = 'Hola LanLabs. Quiero conversar sobre una solución para mi negocio.';

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
