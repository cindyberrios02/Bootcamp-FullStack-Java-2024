document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const img = document.getElementById('img');
    const caja3 = document.getElementById('caja3');

    // Mostrar y ocultar el segundo texto al pasar el mouse
    text1.addEventListener('mouseover', function () {
        text2.style.display = 'block';
    });

    text1.addEventListener('mouseout', function () {
        text2.style.display = 'none';
    });

    // Agrandar y reducir la imagen al hacer clic
    img.addEventListener('click', function () {
        img.style.transform = 'scale(2)';
    });

    img.addEventListener('mouseout', function () {
        img.style.transform = 'scale(1)';
    });

    // Inicializar una variable de estado para rastrear si el texto está agrandado
    let textoAgrandado = false;

    caja3.addEventListener('dblclick', function () {
        // Invertir el estado
        textoAgrandado = !textoAgrandado;

        // Aplicar el estilo según el estado
        if (textoAgrandado) {
            caja3.querySelector('p').style.fontSize = '2rem';
        } else {
            caja3.querySelector('p').style.fontSize = '1rem'; // O cualquier otro tamaño que desees
        }
    });



});
