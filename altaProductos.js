// Creo el constructor de la clase Productos
class Producto {
  constructor(codigo, item, precio, uMVta/*, precio2, uMVta2, mL, altoPul, anchoPul, largoPie, p2, altoMt, anchoMt, largoMt, m2, provNombre, 
  provCodigo, cantPorPack, costoFecha, costoFechaDias, costoLista, costoNeto, costoUM, fletePorc, fleteValor, descargaPorc, descargaValor, 
    costoFinalSinIva, costoPorUmVta, comisVtaValor, precio1SinIva, markeUpValor, markeUpPorc, observ*/){

    this.codigo = codigo.toUpperCase();
    this.item = item.toUpperCase();
    this.precio = parseFloat(precio);
    this.uMVta = uMVta.toUpperCase();
    // this.precio2 = parseFloat(precio2);
    // this.uMVta2 = uMVta2.toUpperCase();
    // this.mL = parseFloat(mL);
    // this.altoPul = parseFloat(altoPul);
    // this.anchoPul = parseFloat(anchoPul);
    // this.largoPie = parseFloat(largoPie);
    // this.p2 = parseFloat(p2);
    // this.altoMt = parseFloat(altoMt);
    // this.anchoMt = parseFloat(anchoMt);
    // this.largoMt = parseFloat(largoMt);
    // this.m2 = parseFloat(m2);
    // this.provNombre = provNombre.toUpperCase();
    // this.provCodigo = provCodigo.toUpperCase();
    // this.cantPorPack = parseInt(cantPorPack);
    // this.costoFecha = costoFecha;
    // this.costoFechaDias = parseInt(costoFechaDias);
    // this.costoLista = parseFloat(costoLista);
    // this.costoNeto = parseFloat(costoNeto);
    // this.costoUM = costoUM.toUpperCase();
    // this.fletePorc = parseFloat(fletePorc);
    // this.fleteValor = parseFloat(fleteValor);
    // this.descargaPorc = parseFloat(descargaPorc);
    // this.descargaValor = parseFloat(descargaValor);
    // this.costoFinalSinIva = parseFloat(costoFinalSinIva);
    // this.costoPorUmVta = parseFloat(costoPorUmVta);
    // this.comisVtaValor = parseFloat(comisVtaValor);
    // this.precio1SinIva = parseFloat(precio1SinIva);
    // this.markeUpValor = parseFloat(markeUpValor);
    // this.markeUpPorc = parseFloat(markeUpPorc);
    // this.observ = observ.toUpperCase();
  }
}

// Obtengo eventos desde botones y les asigno funciones
document.addEventListener('click', (e) => {
  if(e.target.matches('.enviar')){
    altaProducto()
  }
});

document.addEventListener('click', (e) => {
  if(e.target.matches('.mostrarProductos')){
    productosActivos()
  }
});

document.addEventListener('click', (e) => {
  if(e.target.matches('.cancelar')){
    // codear
  }
});

// document.addEventListener('click', (e) => {
//   if(e.target.matches('.AgregarAlCarrito')){
//     const productosActivos = document.querySelector('.productosActivos');
//     productosActivos.forEach()
//     console.log(e.target);
//   }
// });


// Creo un Array vacío para luego agregar los productos creados por el usuario
let productos1 = [];

// Creo función para dar de alta nuevos productos
function altaProducto() {
  let codigo = document.getElementById("codigo").value;
  let item = document.getElementById("item").value;
  let precio = document.getElementById("precio").value;
  let uMVta = document.getElementById("uMVta").value;
  // let precio2 = document.getElementById("precio2").value;
  // let uMVta2 = document.getElementById("uMVta2").value;
  // let mL = document.getElementById("mL").value;
  // let altoPul = document.getElementById("altoPul").value;
  // let anchoPul = document.getElementById("anchoPul").value;
  // let largoPie = document.getElementById("largoPie").value;
  // let p2 = document.getElementById("p2").value;
  // let altoMt = document.getElementById("altoMt").value;
  // let anchoMt = document.getElementById("anchoMt").value;
  // let largoMt = document.getElementById("largoMt").value;
  // let m2 = document.getElementById("m2").value;
  // let provNombre = document.getElementById("provNombre").value;
  // let provCodigo = document.getElementById("provCodigo").value;
  // let cantPorPack = document.getElementById("cantPorPack").value;
  // let costoFecha = document.getElementById("costoFecha").value;
  // let costoFechaDias = document.getElementById("costoFechaDias").value;
  // let costoLista = document.getElementById("costoLista").value;
  // let costoNeto = document.getElementById("costoNeto").value;
  // let costoUM = document.getElementById("costoUM").value;
  // let fletePorc = document.getElementById("fletePorc").value;
  // let fleteValor = document.getElementById("fleteValor").value;
  // let descargaPorc = document.getElementById("descargaPorc").value;
  // let descargaValor = document.getElementById("descargaValor").value;
  // let costoFinalSinIva = document.getElementById("costoFinalSinIva").value;
  // let costoPorUmVta = document.getElementById("costoPorUmVta").value;
  // let comisVtaValor = document.getElementById("comisVtaValor").value;
  // let precio1SinIva = document.getElementById("precio1SinIva").value;
  // let markeUpValor = document.getElementById("markeUpValor").value;
  // let markeUpPorc = document.getElementById("markeUpPorc").value;
  // let observ = document.getElementById("observ").value;

  // Creo un nuevo producto vacío y lo guardo en una variable
 
  let x = new Producto(codigo, item, precio, uMVta /*, precio2, uMVta2, mL, altoPul, anchoPul, largoPie, p2, altoMt, anchoMt, largoMt, m2, provNombre, 
  provCodigo, cantPorPack, costoFecha, costoFechaDias, costoLista, costoNeto, costoUM, fletePorc, fleteValor, descargaPorc, descargaValor, 
    costoFinalSinIva, costoPorUmVta, comisVtaValor, precio1SinIva, markeUpValor, markeUpPorc, observ*/);
  
  // Agrego producto creado al Array productos
  productos1.push(x);
  
  // Obtengo html donde quiero mostrar los datos
  const productosActivos = document.querySelector('.productosActivos');
  // Creo un div
  const div = document.createElement('div');
  div.className = "prodCard";
  
  // Recorro el Array y creo los h3 para mostrar informacion al usuario
  Object.values(x).forEach(el => {
    const h3 = document.createElement('h3');
    h3.innerText = el;
    div.append(h3);
  });
  
  // Creo un button
  const button = document.createElement('button');
  button.className = "AgregarAlCarrito";
  button.innerText = "Agregar al carrito";
  div.append(button);
  
  // Agrego lo creado al objeto del elemento vigente
  productosActivos.append(div);
  
  // Muestro productos por consola
  console.log(productosActivos);
  
  // Alerta confirmando al usuario el hecho
  alert(x.codigo + " guardado");
}

console.log(productos1[0]);


// Guardo info en el localStorage al agregar al carrito
// document.addEventListener('click', (e) => {
//   if(e.target.matches('.Agregar al carrito')){
//   localStorage.setItem("codigo", e.codigo);
//   localStorage.setItem("item", e.item);
//   localStorage.setItem("precio", e.precio);
//   localStorage.setItem("uMVta", e.uMVta);
//   }
// });


// Recorro todas las key y las muestro por consola
for (let i=0; i<localStorage.length; i++){
  const key = localStorage.key(i);
  const valor = localStorage.getItem(key);

  console.log(key + ": " + valor);
}

// Elimino un registro del localStorage
// localStorage.removeItem("precio");

// Elimino todos los registros del localStorage
// localStorage.clear();



// Salida de información
function productosActivos() {
  productos.forEach((element) => {
    console.log(element.codigo + ", " + element.item + ", " + element.precio + ", " + element.uMVta/* + ", " + element.precio2 + ", " +
    element.uMVta2 + ", " + element.mL + ", " + element.altoPul + ", " + element.anchoPul + ", " + element.largoPie + ", " + 
    element.p2 + ", " + element.altoMt + ", " + element.anchoMt + ", " + element.largoMt + ", " + element.m2 + ", " + 
    element.provNombre + ", " + element.provCodigo + ", " + element.cantPorPack + ", " + element.costoFecha + ", " + 
    element.costoFechaDias + ", " + element.costoLista + ", " + element.costoNeto + ", " + element.costoUM + ", " + 
    element.fletePorc + ", " + element.fleteValor + ", " + element.descargaPorc + ", " + element.descargaValor + ", " + 
    element.costoFinalSinIva + ", " + element.costoPorUmVta + ", " + element.comisVtaValor + ", " + element.precio1SinIva + ", " +
    element.markeUpValor + ", " + element.markeUpPorc + ", " + element.observ*/);
  });
}

