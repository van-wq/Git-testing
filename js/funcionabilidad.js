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
