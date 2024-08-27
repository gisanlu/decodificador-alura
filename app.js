let mensajeUsuario = document.getElementById("caja-de-texto");
let mostrarMensaje = document.getElementById("mensaje_codificado");

function btnencriptarMensaje() {
    const textoEncriptado = encripta(mensajeUsuario.value);
    mostrarMensaje.value = textoEncriptado;
    mensajeUsuario.value = "";
    mostrarMensaje.style.backgroundImage = "none";
}

function encripta(stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }

    return stringEncriptado;
}

function btndesencriptarMensaje() {
    const textoEncriptado = desencripta(mensajeUsuario.value);
    mostrarMensaje.value = textoEncriptado;
    mensajeUsuario.value = "";
}

function desencripta(stringDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }

    return stringDesencriptado;
}

/*
function encriptarMensaje() {
    //obtiene el mensaje y lo "separa" para que sea procesado

    let caracteresMensaje = [];

    let mensajeCodificado = [];

    //este for sirve para convertir en elementos de un array (caracteresMensaje) el texto ingresado por el usuario
    for (let i = 0; i < mensajeUsuario.length; i++) {
        caracteresMensaje.push(mensajeUsuario[i]);
    }
    console.log(caracteresMensaje);

    //crear función para hacer la comparación

    //Si la letra está en la lista de vocal, usar, de lo contrario, no hacerlo
    for (let i = 0; i < vocal.length; i++) {
        const vocalComparar = vocal[i];
        if (mensajeSeparado === vocalComparar) {
            let elementos = mensajeCodifcado.push(vocal[i]);
            console.log(elementos);
        }
    }*/
