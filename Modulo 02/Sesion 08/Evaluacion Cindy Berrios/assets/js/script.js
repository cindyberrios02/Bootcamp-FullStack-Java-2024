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
        document.getElementById('login').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
        document.getElementById('clienteNombre').textContent = `Cliente: ${clienteActual.nombre}`;
        mostrarMenu();  // Mostrar el menú después de iniciar sesión
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
});

// Función para mostrar el menú de opciones
function mostrarMenu() {
    let opcion = '';

    while (opcion !== '4') {
        opcion = prompt("Bienvenido a su banca en línea: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito  \n4.- Salir");

        switch (opcion) {
            case '1':
                verSaldo();
                break;
            case '2':
                realizarGiro(clienteActual);  // Pasar clienteActual a la función
                break;
            case '3':
                realizarDeposito();
                break;
            case '4':
                salir();
                break;
            default:
                alert("Opción no válida. Por favor seleccione una opción del 1 al 4.");
                break;
        }
    }
}

// Función para ver el saldo
function verSaldo() {
    alert(`Su saldo es: $${clienteActual.saldo}`);
}

// Función para realizar un giro
function realizarGiro(cliente) {
    // Mostrar el saldo actual
    alert(`${cliente.nombre}, su saldo actual es: $${cliente.saldo}`);

    // Pedir monto a girar
    const monto = prompt('Ingrese el monto que desea girar:');
    const montoNumerico = parseFloat(monto); // Convertir a número

    // Validar el monto ingresado
    if (!isNaN(montoNumerico) && montoNumerico > 0 && montoNumerico <= cliente.saldo) {
        cliente.saldo -= montoNumerico; // Realizar el giro
        alert(`Giro realizado exitosamente. Su nuevo saldo es: $${cliente.saldo}`); // Mostrar nuevo saldo
    } else {
        alert('Monto no válido o saldo insuficiente.');
    }
}

// Función para realizar un depósito
function realizarDeposito() {
    alert(`Su saldo actual es: $${clienteActual.saldo}`);
    const monto = prompt('Ingrese el monto que desea depositar:');
    const montoNumerico = parseFloat(monto);
    
    if (!isNaN(montoNumerico) && montoNumerico > 0) {
        clienteActual.saldo += montoNumerico; // Aumentar el saldo
        alert(`Depósito realizado exitosamente. Su nuevo saldo es: $${clienteActual.saldo}`);
    } else {
        alert('Monto no válido.');
    }
}

// Función para salir de la sesión
function salir() {
    clienteActual = null;
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('id').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginError').classList.add('hidden');
}