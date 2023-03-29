function validarDatos() {
    window.event.preventDefault();
  
    if (document.form.nombre.value == "") {
      alert("Campo nombre es obligatorio");
      document.form.nombre.focus();
    } else if (document.form.email.value == "") {
      alert("Campo e-mail es obligatorio");
      document.form.email.focus();
    } else if (document.form.asunto.value == "") {
      alert("Campo Asunto es obligatorio");
      document.form.asunto.focus();
    } else if (
      document.form.mensaje.value == "" ||
      document.form.mensaje.value.length <= 50
    ) {
      alert(
        "Campo Mensaje es obligatorio y debe contener máximo 50 carateres"
      );
      document.form.mensaje.focus();
    } else if (
      document.form.email.value.indexOf("@") == -1 ||
      document.form.email.value.indexOf(".") == -1
    ) {
      alert("e-mail inválido");
    }
  
    if (document.form.checkValidity()) {
      enviarCorreo();
    }
  }
  
  document.querySelector("form").addEventListener("submit", validarDatos);
  
  function enviarCorreo() {
    // Obtener los valores del formulario
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;
  
    // Construir el mensaje de correo electrónico
    var body = "Nombre: " + nombre + "\n";
    body += "Email: " + email + "\n";
    body += "Asunto: " + asunto + "\n";
    body += "Mensaje: " + mensaje;
  
    // Crear una nueva ventana de correo electrónico
    var link =
      "mailto:christian264@hotmail.com?subject=" +
      encodeURIComponent(asunto) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = link;
  }