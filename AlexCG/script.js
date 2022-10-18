

let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");

let contador = 0;

boton.addEventListener("click", function() {

        if(contador == 0) {
            enlaces.classNAme = ("enlaces dos");
            contador = 1;

        }else{
            enlaces.classlist.remove("dos");
            enlaces.className = ("enlaces uno");
            contador = 0;
        }
});