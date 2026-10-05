// Update these once with your real details — every button/link in the app reads from here.

export const WHATSAPP_NUMBER = "+234 911 308 6234";
const WHATSAPP_DIGITS = "2349113086234";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent("Hi Ola, I'd like to order")}`;
export const PHONE_LINK = "tel:+2349113086234";
export const EMAIL = "hello@OlaKitchen.com";

/** WhatsApp link pre-filled with a specific dish name — used on orderable dish cards. */
export const whatsappOrderLink = (itemName: string) =>
  `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(`Hi Ola, I'd like to order ${itemName}`)}`;
