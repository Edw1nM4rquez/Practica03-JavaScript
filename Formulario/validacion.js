function validarCamposObligatorios() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if (elemento.id == 'cedula') {
             elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCedula").style.color = "red"


          }
		     
             bandera = true;

             if (elemento.id == 'nombres') {
                nombres = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombres").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeNombres").style.color = "red"
            }

            if (elemento.id == 'apellidos') {
                apellidos = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellidos").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeApellidos").style.color = "red"
            }
            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeDireccion").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeDireccion").style.color = "red"
            }
            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeTelefono").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeTelefono").style.color = "red"
            }
            if (elemento.id == 'fechaNacimiento') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeFecha").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeFecha").style.color = "red"
            }
            if (elemento.id == 'correo') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCorreo").style.color = "red"
            }


        }
    }

    if (bandera) { 
        alert(' SE DAO LA PAGINA WEB!')
        return false;
    } else {
        return true;
    }

}