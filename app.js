const agregarCarrito = document.querySelectorAll(".comprar");
    agregarCarrito.forEach(agregarCarritoBoton => {
    agregarCarritoBoton.addEventListener('click', agregarCarritoClicked);

});

function agregarCarritoClicked (event){
    const button = event.target;

    const item = button.closest('.productosB');

    const itemNombre = item.querySelector('.itemNombre').textContent;
    const itemImg = item.querySelector('.itemImg').src;
    const itemPrecio = item.querySelector('.itemPrecio').textContent;

    agregarItemCarrito(itemNombre, itemPrecio, itemImg);
}

const productoCarrito = document.querySelector(
    '.productoCarrito');

function agregarItemCarrito(itemNombre, itemPrecio, itemImg) {

    const carritoRow = document.createElement('div');
    const carritoContent = `
        <div class="itemCarrito container-fluid py-2 ps-2 pe-0 me-0">
            <div class="row productosC">
                <div class="row link1 w-50 ms-0 p" href="#form">
                    <img class="row h-75 w-25 itemCarImg" src="${itemImg}" alt="">
                    <div class="col parrafo parrafoS ms-2 mt-0">
                        <p class="mb-1 pb-1 fs-4 itemCarNombre">${itemNombre}</p>
                        <p class="mt-2 w-75">Descripción Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda</p>
                    </div>
                </div>
                <div class="row w-50 ms-1 me-0 pe-0 ps-0 cantidad">
                    <div class="col ms-2 me-0 px-0 ">
                        <p class="soles itemCarPrecio">${itemPrecio}</p>
                    </div>
                    <div class="col ms-0 px-0 ">
                        <input class="w-100 solesCantidad" value="1" type="number" placeholder="Cantidad">
                    </div>
                    <div class="col ms-0 me-0 px-0 ">
                        <button class="buttonDelete ms-5 px-1 bg-transparent border bs-0"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    carritoRow.innerHTML = carritoContent;
    productoCarrito.append(carritoRow);
   
    carritoRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removerItemCarrito)
   
    carritoRow.querySelector('.solesCantidad').addEventListener('change', cantidadCambiada);
   
    precioTotal();
}

function precioTotal(){
    let total = 0;
    const precioTotal = document.querySelector('.total');
    const itemsCarrito = document.querySelectorAll('.productosC');

    itemsCarrito.forEach(itemCarrito => {
        const itemCarritoPrecioElemento = itemCarrito.querySelector('.itemCarPrecio');
        const itemCarritoPrecio = Number(itemCarritoPrecioElemento.textContent);
        const itemCarritoCantidadElemento = itemCarrito.querySelector('.solesCantidad');
        const itemCarritoCantidad = Number(itemCarritoCantidadElemento.value);
    
        total = total + itemCarritoPrecio*itemCarritoCantidad;
    
    });
    precioTotal.innerHTML = `S/. ${total.toFixed(2)}`;
};

function removerItemCarrito(event){
    const buttonclicked = event.target;
    buttonclicked.closest('.itemCarrito').remove();
    precioTotal();
}

function cantidadCambiada(event){
    const input = event.target;
    if(input.value <= 0){
        input.value = 1
    }
    precioTotal();

}



function validacion(event) {
        
    let vformulario = true;

    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var email=document.getElementById("email").value;
    var expresion = /^\w+([\.-]?\w+)*@(?:|icloud|outlook|gmail|hotmail)\.(?:|com|es)+$/;
    var telefono=document.getElementById("teléfono").value;
    var dni=document.getElementById("documentoNum").value;
    var fecha = document.getElementById("fecha").value;
    var pais = document.getElementById("país").selectedIndex;
    var paisE = 0
    if ( paisE == 1){
        paisE = "Perú";
    }else if (paisE == 2){
        paisE = "Brasil";
    }else if(paisE == 3){
        paisE = "Colombia"
    }

    if (nombre == null || nombre.length == 0) {
        alert("Ingrese tu nombre");
        vformulario=false;
    }
    
    if (apellido == null || apellido.length == 0) {
        alert("Ingrese tu apellido");
        vformulario=false;
    } 

    if (!expresion.test(email)) {
        alert("El correo electrónio es incorrecto");
        vformulario=false;
    }
   
    if (isNaN(telefono) || telefono.length != 9) {
        alert("Ingresa un número de teléfono");
        vformulario=false;
    }
    if(!document.querySelector('input[name="flexRadioDefault"]:checked')) {
        alert('Selecciona un tipo de documento');
        vformulario=false;
    }
    
    if (isNaN(dni) || dni.length != 8) {
        alert("Ingresa un número de documento válido");
        vformulario=false;
    }
    
    if (pais ==null || pais == 0) {
        alert("Seleccione un país");
        vformulario=false;
    }

    if(!document.querySelector('input[name="flexRadioDefault2"]:checked')) {
        alert('Selecciona una opcion en el campo sexo');
        vformulario=false;
        }
        
    if(!document.querySelector('input[name="fechanac"]:checked')) {
        alert('Selecciona una fecha');
        vformulario=false;
        }
    event.preventDefault();
}