try {
    let numero = "hola";

    if (isNaN(numero)) {
        throw new Error("Error al introducir un número");
    }

} catch (error) {
    console.log("Error 1:", error.message);
    alert("Debes introducir un número válido");
}


try {
    let opcion = 5;

    if (opcion != 1 && opcion != 2) {
        throw new Error("Opción incorrecta");
    }

} catch (error) {
    console.log("Error 2:", error.message);
    alert("La opción seleccionada no existe");
}
