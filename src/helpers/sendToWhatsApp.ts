export function sendToWhatsApp(message = 'Olá, gostaria de saber mais sobre os serviços da Max B.i.'): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://web.whatsapp.com/send?phone='5573999335493'&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}