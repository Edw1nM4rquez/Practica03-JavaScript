function validarCamposObligatorios() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if (elemento.id == 'cedula') {
               // elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCedula").style.color = "red"


          }
		     //elemento.style.border = "1px red solid"
            bandera = true;

        }
    }

    if (bandera) {
        alert(' ¡SE DAÑO LA PAGINA WEB!')
        return false;
    } else {
        return true;
    }

}