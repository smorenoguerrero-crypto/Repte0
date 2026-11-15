function calcular() {
    // 1. Obtener el texto del input y el elemento donde mostraremos el mensaje
    const entrada = document.getElementById("entrada").value;
    const pantalla = document.getElementById("pantalla");

    // 2. Expresión regular (soporta signos, decimales y espacios opcionales)
    const patron = /^\s*([+-]?\d+(?:\.\d+)?)\s*([\+\-\*/])\s*([+-]?\d+(?:\.\d+)?)\s*$/;

    // 3. Comprobar si la entrada coincide con el patrón
    const coincidencia = entrada.match(patron);

    if (!coincidencia) {
        pantalla.style.color = "red";
        pantalla.textContent = "[CodiError2] Error de sintaxis: Formato inválido (usa 'a op b').";
        return;
    }

    // 4. Extraer los valores capturados (el índice 0 es toda la cadena)
    const a = parseFloat(coincidencia[1]);
    const operador = coincidencia[2];
    const b = parseFloat(coincidencia[3]);
    let resultado;

    // 5. Realizar la operación y controlar la división por cero
    switch (operador) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            if (b === 0) {
                pantalla.style.color = "red";
                pantalla.textContent = "[CodiError2] Error matemático: No se puede dividir entre cero.";
                return;
            }
            resultado = a / b;
            break;
    }

    // 6. Mostrar el resultado final
    pantalla.style.color = "green";
    pantalla.textContent = `Resultado: ${resultado}`;
}
