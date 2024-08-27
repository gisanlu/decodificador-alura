let mensajeUsuario = document.getElementById("caja-de-texto").value;


function compararLetras(arrayMensaje, arrayVocales) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["i", "ufat"],
    ];

    stringEncriptado = stringEncriptado.toLowerCase();
}

compararLetras(caracteresMensaje, vocales);



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

    

    /*Si la letra está en la lista de vocal, usar, de lo contrario, no hacerlo
    for (let i = 0; i < vocal.length; i++) {
        const vocalComparar = vocal[i];
        if (mensajeSeparado === vocalComparar) {
            let elementos = mensajeCodifcado.push(vocal[i]);
            console.log(elementos);
        }
    }*/

    return;
}
