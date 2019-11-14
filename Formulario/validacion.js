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
            bandera = true;

        }

    }

    
    if (bandera) { 
        alert(' CAMPOS VACIOS! Rellenar los campos')
        return false;
    } else {
            return true;
            }
}

function ValidarLetras(event, label, elemento) {
    let span = document.getElementById(label);
    let letra = event.which || event.keyCode;

    if (letra >= 65 && letra <= 90 || letra >= 97 && letra <= 122 || letra == 32 || letra == 8 || letra == 16) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese letras"
        span.style.display = "block"
        span.style.color = "orange"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 1)
        elemento.value = frase
    }

    let wordCount = elemento.value.trim().replace(/\s+/gi, ' ').split(' ').length;

    if (wordCount > 2) {
        span.innerHTML = "Ingrese solo dos nombres"
        span.style.display = "block"
        span.style.color = "orange"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 2)
        elemento.value = frase
    }
}

function ValidarNumeros(event, label, elemento) {
    let span = document.getElementById(label);
    let numero = event.which || event.keyCode;

    if (numero >= 48 && numero <= 57) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese caracteres numericos"
        span.style.color = "orange"
        span.style.display = "block"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad
    }

    if (elemento.value.length === 10) {
        validar(label, elemento);
    }
}

