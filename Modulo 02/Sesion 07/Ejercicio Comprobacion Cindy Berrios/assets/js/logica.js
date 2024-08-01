//var numero1, numero2, resultado;

//numero1 = prompt("Ingrese un numero");
//numero2 = prompt("Ingrese otro numero");

//numero1=parseInt(numero1);
//numero2=parseInt(numero2);

//resultado = numero1 + numero2;

//alert("El resultado de la suma es: " +numero1+ " + " +numero2+ " = " +resultado);


document.getElementById("compararNumerosForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = "";

    // Comparar los números y generar el mensaje
    if (numero1 > numero2) {
        resultado = numero1 + " es mayor que " + numero2;
    } else if (numero1 < numero2) {
        resultado = numero2 + " es mayor que " + numero1;
    } else {
        resultado = "Ambos números son iguales";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `<div class="alert alert-info">${resultado}</div>`;
});