function abrirReporte() {
  const checkboxes = document.querySelectorAll("input[name='reporte']");
  let seleccionados = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      seleccionados.push(checkbox.value);
    }
  });

  if (seleccionados.length === 0) {
    alert("No ha seleccionado ningún reporte.");
  } else if (seleccionados.length > 1) {
    alert("Favor de seleccionar solo un reporte");
  } else {
    window.open(seleccionados[0], "_blank");
  }
}
