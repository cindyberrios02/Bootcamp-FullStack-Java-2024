document.addEventListener("DOMContentLoaded", function () {
    // Constructor para las tareas
    function Tarea(descripcion) {
        this.descripcion = descripcion;
    }

    Tarea.prototype.renderizar = function (index) {
        var fila = document.createElement("tr");

        var celdaTarea = document.createElement("td");
        celdaTarea.textContent = this.descripcion;
        fila.appendChild(celdaTarea);

        var celdaEliminar = document.createElement("td");
        var btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-danger";
        btnEliminar.textContent = "Finalizar";
        btnEliminar.addEventListener("click", function () {
            eliminarTarea(index);
        });
        celdaEliminar.appendChild(btnEliminar);
        fila.appendChild(celdaEliminar);

        return fila;
    };

    var tareas = [
        new Tarea("Pintar la fachada de la casa"),
        new Tarea("Comprar comida para el perro"),
        new Tarea("Pagar la tarjeta de crédito")
    ];

    var formulario = document.getElementById("formulario");
    var btnAgregarTarea = document.getElementById("btn-agregar-tarea");
    var formNuevaTarea = document.getElementById("form-nueva-tarea");
    var cuerpoTabla = document.getElementById("cuerpo-tabla");

    btnAgregarTarea.addEventListener("click", function () {
        formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });

    formNuevaTarea.addEventListener("submit", function (e) {
        e.preventDefault();
        var nuevaTareaInput = document.getElementById("nuevaTarea");
        var nuevaTarea = nuevaTareaInput.value.trim();

        if (nuevaTarea !== "") {
            tareas.push(new Tarea(nuevaTarea));
            nuevaTareaInput.value = "";
            actualizarListaTareas();
            formulario.style.display = "none";
        }
    });

    function eliminarTarea(index) {
        tareas.splice(index, 1);
        actualizarListaTareas();
    }

    function actualizarListaTareas() {
        cuerpoTabla.innerHTML = "";
        tareas.forEach(function (tarea, index) {
            cuerpoTabla.appendChild(tarea.renderizar(index));
        });
    }

    actualizarListaTareas();
});
