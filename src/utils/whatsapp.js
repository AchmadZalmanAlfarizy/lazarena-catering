// WhatsApp Configuration
// Updated business WhatsApp number
export const WHATSAPP_NUMBER = "628999268988";

export const generateWhatsAppMessage = (formData) => {
  const {
    fullName,
    whatsappNumber,
    eventDate,
    cateringType,
    portions,
    eventLocation,
    additionalNotes,
  } = formData;

  const message = `Halo La Zarena! 👋

Saya ingin memesan catering dengan detail berikut:

👤 *Nama*: ${fullName}
📱 *No. WhatsApp*: ${whatsappNumber}
🍽️ *Jenis Catering*: ${cateringType}
👥 *Jumlah Porsi*: ${portions} porsi
📅 *Tanggal Acara*: ${eventDate}
📍 *Lokasi Acara*: ${eventLocation}
${additionalNotes ? `📝 *Catatan Tambahan*: ${additionalNotes}` : ''}

Mohon informasi lebih lanjut mengenai ketersediaan jadwal dan harga. Terima kasih! 🙏`;

  return message;
};

export const openWhatsApp = (formData) => {
  const message = generateWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openWhatsAppMenu = (menuItem) => {
  const message = `Halo La Zarena! 👋

Saya tertarik untuk memesan / menanyakan menu berikut:
🍽️ *Menu*: ${menuItem.name}
💰 *Estimasi Harga*: ${menuItem.price}
📝 *Deskripsi*: ${menuItem.description}

Mohon informasi ketersediaan tanggal, minimum order, dan opsi custom. Terima kasih! 🙏`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openWhatsAppPackage = (pkg) => {
  const message = `Halo La Zarena! 👋

Saya tertarik untuk memesan paket catering:
🍱 *Paket*: ${pkg.name} (${pkg.price})
📋 *Komposisi*: ${pkg.contents}

Mohon info ketersediaan tanggal dan cara pemesanannya. Terima kasih! 🙏`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
