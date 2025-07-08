document.addEventListener("DOMContentLoaded", function () {
    const btnCrear = document.getElementById("btn-crear");

    btnCrear.addEventListener("click", function () {
        const fecha = document.getElementById("fecha").value;
        const tema = document.getElementById("tema").value;
        const descripcion = document.getElementById("descripcion").value;

        if (fecha === "" || tema === "" || descripcion === "") {
            alert("Por favor, complete todos los campos antes de crear el reporte.");
        } else {
            alert("¡Reporte creado exitosamente!");
        }
    });
});
