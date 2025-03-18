document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("miFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let nombre = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("message").value.trim();
        let mensajeError = document.getElementById("mensajeError");

        mensajeError.style.display = "none";
        mensajeError.innerText = "";

        if (nombre === "" || email === "" || mensaje === "") {
            mensajeError.style.display = "block";
            mensajeError.innerText = "Todos los campos son obligatorios.";
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajeError.style.display = "block";
            mensajeError.innerText = "Por favor, ingresa un email válido.";
            return;
        }

        alert("Formulario enviado correctamente.");
        this.submit();
    });
});
