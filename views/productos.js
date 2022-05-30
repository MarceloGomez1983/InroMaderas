const DOMcontenedor = document.querySelector("#containerProducts");

// Recorro los productos del JSON y los agrego a la pag PRODUCTOS
const obtenerProductos = async () => {

  // Recorro los poductos del JSON y los agrego a la lista de precios
  const responseProducts = await fetch("/jsons/productos.json");
  const products = await responseProducts.json();

  products.forEach((element) => {

    const DOMdiv = document.createElement("div");
    DOMdiv.className = "d-flex justify-content-center";

    const DOMcodigo = document.createElement("p");
    DOMcodigo.className = "col-1 border border-dark p-1 text-center";
    DOMcodigo.innerText = element.codigo;

    const DOMitem = document.createElement("p");
    DOMitem.className = "col-6 border border-dark p-1";
    DOMitem.innerText = element.item;

    const DOMprecio = document.createElement("p");
    DOMprecio.className = "col-2 border border-dark p-1 text-right";
    DOMprecio.innerText = element.precio;

    const DOMuMVta = document.createElement("p");
    DOMuMVta.className = "col-1 border border-dark p-1 text-center";
    DOMuMVta.innerText = element.uMVta;

    DOMdiv.append(DOMcodigo);
    DOMdiv.append(DOMitem);
    DOMdiv.append(DOMprecio);
    DOMdiv.append(DOMuMVta);

    DOMcontenedor.append(DOMdiv);
  });

  // Verifico los productos dados de alta en el localStorage y los agrego a la lista de precios
  const productos = localStorage.getItem("productos");
  let arrayProductos = [];

  if (productos !== null) {
    arrayProductos = JSON.parse(productos);
  }
  
  arrayProductos.forEach((element) => {

    const DOMdiv = document.createElement("div");
    DOMdiv.className = "d-flex justify-content-center";

    const DOMcodigo = document.createElement("p");
    DOMcodigo.className = "col-1 border border-dark p-1 text-center";
    DOMcodigo.innerText = element.codigo;

    const DOMitem = document.createElement("p");
    DOMitem.className = "col-6 border border-dark p-1";
    DOMitem.innerText = element.item;

    const DOMprecio = document.createElement("p");
    DOMprecio.className = "col-2 border border-dark p-1 text-right";
    DOMprecio.innerText = element.precio;

    const DOMuMVta = document.createElement("p");
    DOMuMVta.className = "col-1 border border-dark p-1 text-center";
    DOMuMVta.innerText = element.uMVta;

    DOMdiv.append(DOMcodigo);
    DOMdiv.append(DOMitem);
    DOMdiv.append(DOMprecio);
    DOMdiv.append(DOMuMVta);

    DOMcontenedor.append(DOMdiv);
  });
};

obtenerProductos();