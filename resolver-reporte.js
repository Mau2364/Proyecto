document.addEventListener("DOMContentLoaded", function () {
    const btnResolver = document.getElementById("btn-resolver");
    const fechaInput = document.getElementById("fecha");
    const resolucionTextarea = document.getElementById("resolución");

    btnResolver.addEventListener("click", function (e) {
        const fecha = fechaInput.value.trim();
        const resolucion = resolucionTextarea.value.trim();

        if (fecha === "" || resolucion === "") {
            alert("Por favor, complete todos los campos antes de marcar como resuelto.");
            e.preventDefault(); 
            return;
        }

        alert("Reporte marcado como resuelto.");
    });
});
