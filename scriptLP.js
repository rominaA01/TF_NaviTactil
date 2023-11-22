
function Res1(){
    document.querySelector(".resenia3").style.display = "none";
    document.querySelector(".resenia4").style.display = "none";

    document.querySelector('.resenia1').style.display = "block";
    document.querySelector('.resenia2').style.display = "block";
}

function Res2(){
    document.querySelector(".resenia1").style.display = "none";
    document.querySelector(".resenia2").style.display = "none";

    document.querySelector('.resenia3').style.display = "block";
    document.querySelector('.resenia4').style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    function abrirFormulario() {
        var formulario = document.querySelector(".formulario");
        var fondoOscuro = document.createElement("div");
        fondoOscuro.className = "fondo-oscuro";
        document.body.appendChild(fondoOscuro);
        formulario.classList.add("abierto");

        fondoOscuro.addEventListener("click", function() {
            formulario.classList.remove("abierto");
            fondoOscuro.style.display = "none";
            document.body.removeChild(fondoOscuro);
        });
    }

    function cerrarFormulario() {
        var formulario = document.querySelector(".formulario");
        var fondoOscuro = document.querySelector(".fondo-oscuro");
        formulario.classList.remove("abierto");
        fondoOscuro.style.display = "none";
        document.body.removeChild(fondoOscuro); 
    }

    document.querySelector(".BtnRegistro").addEventListener("click", abrirFormulario);
    document.querySelector(".cerrar").addEventListener("click", cerrarFormulario);
    
});

function toggleChatbox() {
    var chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "none") ? "block" : "none";
}

function enviarMensaje() {
    // Obtener el mensaje del input
    var mensaje = document.getElementById("mensajeInput").value;

    // Mostrar un mensaje de confirmación
    alert("Mensaje enviado: " + mensaje);

    // Limpiar el input después de enviar el mensaje
    document.getElementById("mensajeInput").value = "";
}

