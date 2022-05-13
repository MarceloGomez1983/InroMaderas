let productos = [
  {
    codigo : "INRO-0001",
    item : "MACHIMBRE 1",
    precio : 125.50,
    uMVta : "UN",
  },
  {
    codigo : "INRO-0002",
    item : "MACHIMBRE 2",
    precio : 225.50,
    uMVta : "M2",
  },
  {
    codigo : "INRO-0003",
    item : "MACHIMBRE 3",
    precio : 1250.50,
    uMVta : "P2",
  }
];


// JSON
// Función para guardar el objeto
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor)
};

// Recorro los productos y los guardo como objetos en el localStorage
for (const producto of productos) {
  guardarLocal(producto.codigo, JSON.stringify(producto));
}

// Guardo todos los objetos en el localStorage
guardarLocal ("listaproductos", JSON.stringify(productos));


function agregarALocalStorage (producto) {
  // Obtenemos los productos del localStorage
  const productos = localStorage.getItem("productos");
  let arrayProductos = [];

  // Si existe la key (es decir, tiene productos)
  if(productos !== null) {
    //Convierto el Array a un Objeto
    arrayProductos = JSON.parse(productos);
  }

  // Agrego el nuevo producto al localStorage
  arrayProductos.push(producto);


  // Seteo la key "productos" con el nuevo array
  localStorage.setItem("productos", JSON.stringify(arrayProductos));

  actualizarInputCantidadDeProductos();
}



function actualizarInputCantidadDeProductos () {
  // Obtenemos el array actual
  let productos = localStorage.getItem("productos");
  let arrayProductos = [];

  if(productos !== null) {
      // Obtengo el array por medio del método split para transformar el string a un array
      arrayProductos = productos.split(",");
  }

  inputCantidadDeProductos.value = arrayProductos.length;
}



const listaProductos = document.getElementById("listaProductos");
const inputCantidadDeProductos = document.getElementById("cantidadDeProductos");



// Agregamos productos al DOM
productos.forEach( (producto) => {

  // Creamos el elemento lista
  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.innerText = producto.codigo;

  const li2 = document.createElement("li");
  li2.innerText = producto.item;

  const li3 = document.createElement("li");
  li3.innerText = producto.precio;

  const li4 = document.createElement("li");
  li4.innerText = producto.uMVta;

  const button = document.createElement("button");
  button.addEventListener("click", () => {
      agregarALocalStorage(producto);
  });
  button.innerText = "Agregar al carrito";

  ul.append(li1, li2, li3, li4, button);

  // Agregamos elemento al listaProductos
  listaProductos.append(ul);
});

// Inicializar input
actualizarInputCantidadDeProductos();
