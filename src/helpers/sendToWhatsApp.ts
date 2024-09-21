export function sendToWhatsApp(message = 'Olá, gostaria de saber mais sobre os serviços da Max B.i.'): void {
    const whatsappUrl = `https://wa.me/557399629569?text=${message}`;
    window.open(whatsappUrl, '_blank');
}