// Muestra en consola la página actual
function paginaActual(nombrePagina) {
    console.log("Estás visitando la página: " + nombrePagina);
}

// Botón que muestra mensaje
function mostrarMensaje() {
    alert("¡El fútbol sudamericano es pasión eterna!");
}

// Restricción de acceso con clave
function pedirClave() {
    let clave = prompt("Ingrese la clave para acceder a esta página:");
    if (clave !== "libertadores") {
        alert("Clave incorrecta. Volviendo al inicio...");
        window.location.href = "index.html";
    }
}
//MENU PARA CELULAR
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}
//Funcion para verificar la Clave
function verificarClave() {
    let clave = document.getElementById("clave").value;
    if (clave === "libertadores") {
        document.getElementById("contenidoSecreto").style.display = "grid";
        document.querySelector(".login").style.display = "none";
    } else {
        alert("Clave incorrecta ❌");
    }
}
//Funcion para mostrar si la respuesta del quizz es correcta o incorrecta
function respuesta(boton, correcto) {
    if (correcto) {
        boton.style.background = "green";
        alert("✅ Correcto!");
    } else {
        boton.style.background = "red";
        alert("❌ Incorrecto, intente otra opción.");
    }
}
