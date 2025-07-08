document.addEventListener("DOMContentLoaded", function (){
    const boton= document.getElementById("btn-publicar");
    const textarea = document.getElementById("add-noticia");

    boton.addEventListener("click", function() {
        const noticia = textarea.value.trim();

        if (noticia ===""){
            alert ("Favor de escribir una noticia antes de publicar.");
        } else{
            alert ("Noticia publicada exitosamente");
            textarea.value="";
        }
    });
});
