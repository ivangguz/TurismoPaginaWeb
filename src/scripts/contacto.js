var numeroWhatsApp = "2221208255";
var mensajeWhatsApp = encodeURIComponent("Buen dia, quisiera obtener mas informacion");

function llamar(){
    window.location.href="tel:"+numeroWhatsApp;
}

function abrirChatWhatsApp() {
    var url = 'https://api.whatsapp.com/send?phone=' + numeroWhatsApp + '&text=' + mensajeWhatsApp;
    window.open(url, '_blank');
}

function enviarCorreo(){
    window.location.href = 'mailto:ivangguz@gmail.com';
}
  
function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var especialidad = document.getElementById('especialidad').value;
    var descripcion = document.getElementById('descripcion').value;

    // Crear el mensaje a enviar
    var mensaje = `Hola, soy ${nombre} ${apellido}. Estoy interesado en ${especialidad}. Descripción: ${descripcion}.`;

    // Reemplazar espacios por %20 para codificar el mensaje correctamente
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Crear la URL para WhatsApp con el número de teléfono (puedes cambiar el número a tu preferencia)
    var url = `https://wa.me/2211031410?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva ventana
    window.open(url, '_blank');
}