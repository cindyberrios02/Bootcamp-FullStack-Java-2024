document.getElementById("mainMenuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let mainOption = document.getElementById("mainOption").value;

    switch (mainOption) {
        case '1':
            $('#boletasPagosModal').modal('show');
            break;
        case '2':
            $('#senalLlamadasModal').modal('show');
            break;
        case '3':
            $('#ofertaComercialModal').modal('show');
            break;
        case '4':
            $('#otrasConsultasModal').modal('show');
            break;
        default:
            alert("Opción no válida, por favor intenta de nuevo.");
    }
});

// Manejo de formulario de Boletas y Pagos
document.getElementById("boletasPagosForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let boletasPagosOption = document.getElementById("boletasPagosOption").value;
    $('#boletasPagosModal').modal('hide');
    if (boletasPagosOption === '1') {
        alert("Haga clic aquí para descargar su boleta.");
    } else if (boletasPagosOption === '2') {
        alert("Usted está siendo transferido. Espere por favor...");
    } else {
        alert("Opción no válida, por favor intenta de nuevo.");
    }
});

// Mostrar campo de texto para problemas con la señal o llamadas
document.getElementById("senalLlamadasOption").addEventListener("change", function () {
    let option = this.value;
    let issueGroup = document.getElementById("issueGroup");
    if (option === "1" || option === "2") {
        issueGroup.style.display = "block";
    } else {
        issueGroup.style.display = "none";
        document.getElementById("issueDescription").value = ""; // Limpiar el campo de texto si no es necesario
    }
});

// Manejo de formulario de Señal y Llamadas
document.getElementById("senalLlamadasForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let senalLlamadasOption = document.getElementById("senalLlamadasOption").value;
    let issueDescription = document.getElementById("issueDescription").value;
    $('#senalLlamadasModal').modal('hide');

    if (issueDescription) {
        // Mostrar solicitud en un nuevo modal
        document.getElementById("solicitudText").innerText = issueDescription;
        $('#confirmSolicitudModal').modal('show');
    } else {
        alert("Por favor, describa su problema.");
    }
});

// Manejo de formulario de Otras Consultas
document.getElementById("otrasConsultasForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let consulta = document.getElementById("consulta").value;
    $('#otrasConsultasModal').modal('hide');

    if (consulta) {
        // Mostrar consulta en un nuevo modal
        document.getElementById("consultaText").innerText = consulta;
        $('#confirmConsultaModal').modal('show');
    } else {
        alert("Por favor, ingrese su consulta.");
    }
});




// Manejo de formulario de Oferta Comercial
document.getElementById("ofertaComercialForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let ofertaComercialOption = document.getElementById("ofertaComercialOption").value;
    $('#ofertaComercialModal').modal('hide');
    if (ofertaComercialOption === "SI") {
        alert("¡Genial! Un representante se pondrá en contacto con usted.");
    } else if (ofertaComercialOption === "NO") {
        alert("Gracias por su tiempo. Si tiene alguna otra consulta, por favor hágamelo saber.");
    } else {
        alert("Respuesta no válida, por favor intenta de nuevo.");
    }
});
