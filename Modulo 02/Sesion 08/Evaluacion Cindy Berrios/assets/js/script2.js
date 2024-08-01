// Definición de los clientes registrados
const clientes = [
    { id: 'user1', nombre: 'Adaline Berríos', clave: '1819', saldo: 1000 },
    { id: 'user2', nombre: 'Grace Vasquez', clave: '9800', saldo: 2000 },
    { id: 'user3', nombre: 'Mayte Cortés', clave: '5305', saldo: 3000 }
];

let clienteActual = null;

// Manejo del evento de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    clienteActual = clientes.find(cliente => cliente.id === id && cliente.clave === password);

    if (clienteActual) {
        document.getElementById('login').classList.add('d-none');
        document.getElementById('menu').classList.remove('d-none');
        document.getElementById('clienteNombre').textContent = `Cliente: ${clienteActual.nombre}`;
    } else {
        document.getElementById('loginError').classList.remove('d-none');
    }
});

// Función para mostrar el menú de opciones
function mostrarMenu() {
    document.getElementById('menuOptions').classList.remove('d-none');
}

// Función para ver el saldo
function verSaldo() {
    document.getElementById('saldoInfo').classList.remove('d-none');
    document.getElementById('saldoInfo').textContent = `Su saldo es: $${clienteActual.saldo}`;
}

// Manejo del formulario de giro
document.getElementById('giroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const monto = parseFloat(document.getElementById('montoGiro').value);

    if (!isNaN(monto) && monto > 0 && monto <= clienteActual.saldo) {
        clienteActual.saldo -= monto;
        verSaldo();
        $('#giroModal').modal('hide');
    } else {
        alert('Monto no válido o saldo insuficiente.');
    }
});

// Manejo del formulario de depósito
document.getElementById('depositoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const monto = parseFloat(document.getElementById('montoDeposito').value);

    if (!isNaN(monto) && monto > 0) {
        clienteActual.saldo += monto;
        verSaldo();
        $('#depositoModal').modal('hide');
    } else {
        alert('Monto no válido.');
    }
});

// Función para salir de la sesión
function salir() {
    clienteActual = null;
    document.getElementById('login').classList.remove('d-none');
    document.getElementById('menu').classList.add('d-none');
    document.getElementById('id').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginError').classList.add('d-none');
    document.getElementById('saldoInfo').classList.add('d-none');
    document.getElementById('menuOptions').classList.add('d-none');
}
