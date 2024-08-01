document.addEventListener("DOMContentLoaded", function() {
    const menuContent = document.getElementById('menu-content');
    const exitButton = document.getElementById('exit-button');
    let option;

    // Array de opciones del menú
    const menuOptions = [
        { id: 1, name: 'Ver productos', action: showProducts },
        { id: 2, name: 'Añadir producto', action: addProduct },
        { id: 3, name: 'Buscar producto', action: searchProduct },
        { id: 4, name: 'Eliminar producto', action: deleteProduct }
    ];

    // Array de productos (simula una base de datos)
    let products = [];

    // Renderiza el menú
    function renderMenu() {
        menuContent.innerHTML = '';
        menuOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-primary', 'm-2');
            button.textContent = option.name;
            button.onclick = option.action;
            menuContent.appendChild(button);
        });
    }

    // Funciones del menú
    function showProducts() {
        alert(`Productos: ${products.length ? products.join(', ') : 'No hay productos disponibles.'}`);
    }

    function addProduct() {
        const newProduct = prompt('Ingresa el nombre del nuevo producto:');
        if (newProduct) {
            products.push(newProduct);
            alert(`${newProduct} ha sido añadido.`);
        }
    }

    function searchProduct() {
        const searchQuery = prompt('Ingresa el nombre del producto a buscar:');
        if (searchQuery) {
            const found = products.includes(searchQuery);
            alert(found ? `${searchQuery} está en la lista.` : `${searchQuery} no encontrado.`);
        }
    }

    function deleteProduct() {
        const deleteQuery = prompt('Ingresa el nombre del producto a eliminar:');
        if (deleteQuery) {
            const index = products.indexOf(deleteQuery);
            if (index !== -1) {
                products.splice(index, 1);
                alert(`${deleteQuery} ha sido eliminado.`);
            } else {
                alert(`${deleteQuery} no encontrado.`);
            }
        }
    }

    // Manejador del botón de salir
    exitButton.onclick = function() {
        const confirmExit = confirm('¿Estás seguro de que deseas salir?');
        if (confirmExit) {
            menuContent.innerHTML = '<h4>Has salido del menú. Gracias por usar la aplicación.</h4>';
            exitButton.style.display = 'none';
        }
    };

    // Renderiza el menú al cargar la página
    renderMenu();
});
