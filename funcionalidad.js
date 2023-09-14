// Declaración de variables globales
var operador_a = "";
var operador_b = "";
var operacion = "";

function init() {
    // Obtenemos los botones por su ID
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicador");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    uno.onclick = function (e) {
        resultado.textContent += "1";
    }
    dos.onclick = function (e) {
        resultado.textContent += "2";
    }
    tres.onclick = function (e) {
        resultado.textContent += "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent += "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent += "5";
    }
    seis.onclick = function (e) {
        resultado.textContent += "6";
    }
    siete.onclick = function (e) {
        resultado.textContent += "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent += "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent += "9";
    }
    cero.onclick = function (e) {
        resultado.textContent += "0";
    }

    reset.onclick = function (e) {
        borrar();
    }

    suma.onclick = function (e) {
        operador_a = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        operador_a = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operador_a = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operador_a = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    // Evento para calcular
    igual.onclick = function (e) {
        operador_b = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function borrar() {
    resultado.textContent = "";
    operador_a = "";
    operador_b = "";
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operador_a) + parseFloat(operador_b);
            break;
        case "-":
            res = parseFloat(operador_a) - parseFloat(operador_b);
            break;
        case "*":
            res = parseFloat(operador_a) * parseFloat(operador_b);
            break;
        case "/":
            if (parseFloat(operador_b) !== 0) {
                res = parseFloat(operador_a) / parseFloat(operador_b);
            } else {
                alert("No se puede dividir por cero.");
                borrar();
                return;
            }
            break;
        default:
            alert("Operación no válida");
            borrar();
            return;
    }
    borrar();
    resultado.textContent = res;
}
init();
