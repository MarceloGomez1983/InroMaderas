// Variables
const baseDeDatos = [
  {
    id: 1,
    codigo: "INRO-0312",
    item: "LANA DE VIDRIO SIN REVESTIENTO 21.6 M2",
    precio: 9284.5,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0312.png",
  },
  {
    id: 2,
    codigo: "INRO-0313",
    item: "LANA DE VIDRIO CON PAPEL 21.6 M2",
    precio: 11792,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0313.png",
  },
  {
    id: 3,
    codigo: "INRO-0314",
    item: "LANA DE VIDRIO CON ALUMINIO 21.6 M2",
    precio: 12542,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0314.png",
  },
  {
    id: 4,
    codigo: "INRO-0315",
    item: "WICHI ROOFING 1.50 X 20 / AISLANTE ZIP-HOME 30 M2",
    precio: 3588,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0315.png",
  },
  {
    id: 5,
    codigo: "INRO-0316",
    item: "MEMBRANA 10 M2 4MM",
    precio: 5304,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0316.png",
  },
  {
    id: 6,
    codigo: "INRO-0317",
    item: "RUBEROID / FIELTRO 20 M2 PESADO REFLEX",
    precio: 3214,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0317.png",
  },
  {
    id: 7,
    codigo: "INRO-0318",
    item: "RUBEROID / FIELTRO 40 M2 PESADO REFLEX",
    precio: 6122,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0318.png",
  },
  {
    id: 8,
    codigo: "INRO-0319",
    item: "REFLEX FILM ESPUMA 2 MM 20 M2",
    precio: 925,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0319.png",
  },
  {
    id: 9,
    codigo: "INRO-0320",
    item: "REFLEX FILM ESPUMA 5 MM 20 M2",
    precio: 1835,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0320.png",
  },
  {
    id: 10,
    codigo: "INRO-0321",
    item: "REFLEX FILM ESPUMA 10 MM 20 M2",
    precio: 2860,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0321.png",
  },
  {
    id: 11,
    codigo: "INRO-0322",
    item: "REFLEX FILM ESPUMA PAPEL ALUMINIZADO 5 MM 20 M2",
    precio: 2754,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0322.png",
  },
  {
    id: 12,
    codigo: "INRO-0323",
    item: "REFLEX FILM ESPUMA PAPEL ALUMINIZADO 10 MM 20 M2",
    precio: 4099,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0323.png",
  },
  {
    id: 13,
    codigo: "INRO-0324",
    item: "PINTURA ASFALTICA X 1L",
    precio: 541,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0324.png",
  },
  {
    id: 14,
    codigo: "INRO-0325",
    item: "PINTURA ASFALTICA X 4L",
    precio: 1661,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0325.png",
  },
  {
    id: 15,
    codigo: "INRO-0326",
    item: "PINTURA ASFALTICA X 10L",
    precio: 3545,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0326.png",
  },
  {
    id: 16,
    codigo: "INRO-0327",
    item: "PINTURA ASFALTICA X 18L",
    precio: 5673,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0327.png",
  },
  {
    id: 17,
    codigo: "INRO-0328",
    item: "MEMBRANA EN PASTA X 10L CAFITECH",
    precio: 4871,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0328.png",
  },
  {
    id: 18,
    codigo: "INRO-0329",
    item: "MEMBRANA EN PASTA X 20L CAFITECH",
    precio: 9148,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0329.png",
  },
  {
    id: 19,
    codigo: "INRO-0330",
    item: "BREA EN PANES X 20KG",
    precio: 4107,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0330.png",
  },
  {
    id: 20,
    codigo: "INRO-0331",
    item: "PRESERVADOR LIBRADOR AL AGUA X 1L",
    precio: 593,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0331.png",
  },
  {
    id: 21,
    codigo: "INRO-0332",
    item: "PRESERVADOR LIBRADOR AL AGUA X 4L",
    precio: 954,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0332.png",
  },
  {
    id: 22,
    codigo: "INRO-0333",
    item: "PRESERVADOR LIBRADOR AL AGUA X 10L",
    precio: 1964,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0333.png",
  },
  {
    id: 23,
    codigo: "INRO-0334",
    item: "PRESERVADOR LIBRADOR AL AGUA X 18L",
    precio: 2515,
    uMVta: "UN",
    imagen: "/assets/img/INRO-0334.png",
  },
  {
    id: 24,
    codigo: "INRO-2037",
    item: "TELGOPOR 1mt x 1mt x 20mm de espesor, densidad 20kg",
    precio: 430,
    uMVta: "UN",
    imagen: "/assets/img/INRO-2037.png",
  },
  {
    id: 25,
    codigo: "INRO-2038",
    item: "TELGOPOR 1mt x 1mt x 100mm de espesor, densidad standard",
    precio: 1138,
    uMVta: "UN",
    imagen: "/assets/img/INRO-2038.png",
  },
  {
    id: 26,
    codigo: "INRO-2039",
    item: "TELGOPOR 1mt x 1mt x 150mm de espesor, densidad standard",
    precio: 1705,
    uMVta: "UN",
    imagen: "/assets/img/INRO-2039.png",
  },
];

let carrito = [];
const divisa = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");
const DOMinput = document.querySelector("#input-buscar");

// Funciones

// Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    // Estructura
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4", "shadow");

    // Body
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");

    // Imagen
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);

    // codigo
    const miNodoCode = document.createElement("p");
    miNodoCode.classList.add("card-title");
    miNodoCode.textContent = info.codigo;

    // Item
    const miNodoTitle = document.createElement("p");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.item;

    // Precio
    const miNodoPrecio = document.createElement("h5");
    miNodoPrecio.classList.add("card-text", "text-center");
    miNodoPrecio.textContent = `${divisa} ${info.precio}`;

    // Boton
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "+";
    miNodoBoton.setAttribute("marcador", info.id);
    miNodoBoton.addEventListener("click", agregarAlCarrito);

    // Insertamos
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoCode);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
  });

  // Filtro de input
  DOMinput.addEventListener("input", () => {
    // Guardo la info ingresada en el input
    const valorABuscar = DOMinput.value;

    //Filtro los productos
    const productosFiltrados = baseDeDatos.filter((producto) => {
      return producto.item.toLowerCase().includes(valorABuscar.toLowerCase());
    });

    // Limpio el contenedor
    DOMitems.innerHTML = "";

    // Recorro los los items coincidentes y los muestro
    productosFiltrados.forEach((info) => {
      // Estructura
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4", "shadow");

      // Body
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");

      // Imagen
      const miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.setAttribute("src", info.imagen);

      // Codigo
      const miNodoCode = document.createElement("p");
      miNodoCode.classList.add("card-title");
      miNodoCode.textContent = info.codigo;

      // Item
      const miNodoTitle = document.createElement("p");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.item;

      // Precio
      const miNodoPrecio = document.createElement("h5");
      miNodoPrecio.classList.add("card-text", "text-center");
      miNodoPrecio.textContent = `${divisa} ${info.precio}`;

      // Boton
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "+";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", agregarAlCarrito);

      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoCode);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  });
}

// Evento para añadir un producto al carrito de la compra
function agregarAlCarrito(evento) {
  // Agregamos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute("marcador"));

  // Actualizamos el carrito
  renderizarCarrito();
}

// Dibuja todos los productos guardados en el carrito
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = "";

  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];

  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
      // ¿Coincide las id? Solo puede existir un caso
      return itemBaseDatos.id === parseInt(item);
    });

    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
      return itemId === item ? (total += 1) : total;
    }, 0);

    // Creamos el nodo del item del carrito
    const miNodo = document.createElement("li");
    miNodo.classList.add("list-group-item", "mx-2");
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].item} - ${miItem[0].precio}${divisa}`;

    // Boton de borrar
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-2");
    miBoton.textContent = "X";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);

    // Mezclamos nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
  });

  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

// Evento para borrar un elemento del carrito
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

// Calcula el precio total teniendo en cuenta los productos repetidos
function calcularTotal() {
  // Recorremos el array del carrito
  return carrito
    .reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
    }, 0)
    .toFixed(2);
}

// Vacia el carrito y vuelve a dibujarlo
function vaciarCarrito() {
  // Limpia los productos guardados
  carrito = [];
  // Renderiza los cambios
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener("click", vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
