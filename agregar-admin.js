document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario");

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,35}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,35}$/,
    id: /^\d+$/,
    telefono: /^\d{8,11}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
  };

  const campos = {
    nombre: false,
    apellido: false,
    id: false,
    telefono: false,
    correo: false,
  };

  const crearMensajeError = (input, mensaje) => {
    let errorSpan = input.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-mensaje")) {
      errorSpan = document.createElement("span");
      errorSpan.classList.add("error-mensaje");
      input.parentNode.insertBefore(errorSpan, input.nextSibling);
    }
    errorSpan.textContent = mensaje;
  };

  const eliminarMensajeError = (input) => {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains("error-mensaje")) {
      errorSpan.textContent = "";
    }
  };

  const validarCampo = (expresion, input, mensajeError) => {
    if (expresion.test(input.value.trim())) {
      input.classList.remove("input-invalido");
      input.classList.add("input-valido");
      eliminarMensajeError(input);
      campos[input.name] = true;
    } else {
      input.classList.remove("input-valido");
      input.classList.add("input-invalido");
      crearMensajeError(input, mensajeError);
      campos[input.name] = false;
    }
  };

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombre":
        validarCampo(expresiones.nombre, e.target, "El nombre debe tener entre 3 y 35 letras y solo letras y espacios");
        break;
      case "apellido":
        validarCampo(expresiones.apellido, e.target, "El apellido debe tener entre 3 y 35 letras y solo letras y espacios");
        break;
      case "id":
        validarCampo(expresiones.id, e.target, "La identificación solo debe contener números");
        break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, "El teléfono debe tener entre 8 y 11 dígitos");
        break;
      case "correo":
        validarCampo(expresiones.correo, e.target, "El correo no es válido");
        break;
    }
  };

  const inputs = form.querySelectorAll("input[type=text], input[type=number], input[type=email]");

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  form.addEventListener("submit", (e) => {
    inputs.forEach((input) => validarFormulario({ target: input }));

    if (!campos.nombre || !campos.apellido || !campos.id || !campos.telefono || !campos.correo) {
      e.preventDefault();
      alert("Por favor complete correctamente todos los campos requeridos.");
    }
  });
});


