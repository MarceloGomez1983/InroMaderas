class Producto {
  constructor(
    codigo,
    item,
    precio,
    uMVta
    // precio2,
    // uMVta2,
    // mL,
    // altoPul,
    // anchoPul,
    // largoPie,
    // p2,
    // altoMt,
    // anchoMt,
    // largoMt,
    // m2,
    // provNombre,
    // provCodigo,
    // cantPorPack,
    // costoFecha,
    // costoFechaDias,
    // costoLista,
    // costoNeto,
    // costoUM,
    // fletePorc,
    // fleteValor,
    // descargaPorc,
    // descargaValor,
    // costoFinalSinIva,
    // costoPorUmVta,
    // comisVtaValor,
    // Precio1SinIva,
    // markeUpValor,
    // markeUpPorc,
    // observ
  ) {
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
    // this.Precio1SinIva = parseFloat(Precio1SinIva);
    // this.markeUpValor = parseFloat(markeUpValor);
    // this.markeUpPorc = parseFloat(markeUpPorc);
    // this.observ = observ.toUpperCase();
  }
}

// Obtengo eventos desde botones y les asigno funciones
document.addEventListener("click", (e) => {
  if (e.target.matches(".enviar")) {
    altaProducto();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".cancelar")) {
    location.reload();
  }
});

function altaProducto() {
  const codigo = document.getElementById("codigo").value;
  const item = document.getElementById("item").value;
  const precio = document.getElementById("precio").value;
  const uMVta = document.getElementById("uMVta").value;
  // const precio2 = document.getElementById("input-precio2").value;
  // const uMVta2 = document.getElementById("input-uMVta2").value;
  // const mL = document.getElementById("input-mL").value;
  // const altoPul = document.getElementById("input-altoPul").value;
  // const anchoPul = document.getElementById("input-anchoPul").value;
  // const largoPie = document.getElementById("input-largoPie").value;
  // const p2 = document.getElementById("input-p2").value;
  // const altoMt = document.getElementById("input-altoMt").value;
  // const anchoMt = document.getElementById("input-anchoMt").value;
  // const largoMt = document.getElementById("input-largoMt").value;
  // const m2 = document.getElementById("input-m2").value;
  // const provNombre = document.getElementById("input-provNombre").value;
  // const provCodigo = document.getElementById("input-provCodigo").value;
  // const cantPorPack = document.getElementById("input-cantPorPack").value;
  // const costoFecha = document.getElementById("input-costoFecha").value;
  // const costoFechaDias = document.getElementById("input-costoFechaDias").value;
  // const costoLista = document.getElementById("input-costoLista").value;
  // const costoNeto = document.getElementById("input-costoNeto").value;
  // const costoUM = document.getElementById("input-costoUM").value;
  // const fletePorc = document.getElementById("input-fletePorc").value;
  // const fleteValor = document.getElementById("input-fleteValor").value;
  // const descargaPorc = document.getElementById("input-descargaPorc").value;
  // const descargaValor = document.getElementById("input-descargaValor").value;
  // const costoFinalSinIva = document.getElementById("input-costoFinalSinIva").value;
  // const costoPorUmVta = document.getElementById("input-costoPorUmVta").value;
  // const comisVtaValor = document.getElementById("input-comisVtaValor").value;
  // const precio1SinIva = document.getElementById("input-precio1SinIva").value;
  // const markeUpValor = document.getElementById("input-markeUpValor").value;
  // const markeUpPorc = document.getElementById("input-markeUpPorc").value;
  // const observ = document.getElementById("input-observ").value;

  let nuevoProducto = new Producto(
    codigo,
    item,
    precio,
    uMVta //,
    // precio2,
    // uMVta2,
    // mL,
    // altoPul,
    // anchoPul,
    // largoPie,
    // p2,
    // altoMt,
    // anchoMt,
    // largoMt,
    // m2,
    // provNombre,
    // provCodigo,
    // cantPorPack,
    // costoFecha,
    // costoFechaDias,
    // costoLista,
    // costoNeto,
    // costoUM,
    // fletePorc,
    // fleteValor,
    // descargaPorc,
    // descargaValor,
    // costoFinalSinIva,
    // costoPorUmVta,
    // comisVtaValor,
    // precio1SinIva,
    // markeUpValor,
    // markeUpPorc,
    // observ
  );

  // En verdad lo que quiero hacer aquí es agregar el producto nuevo a la lista de precios que tengo en la otra pagina, pero no he apreendido como hacerlo aun
  console.log(nuevoProducto);

  // Alerta
  Swal.fire({
    title: nuevoProducto.codigo + " " + nuevoProducto.item,
    text: "El producto fue dado de alta",
    icon: "success",
    confirmButtonText: "ACEPTAR",
    showCancelButton: true,
    cancelButtonText: "CANCELAR",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Se aceptó");
    }
    if (result.isDismissed) {
      console.log("Se canceló");
    }
  });

  // Notificacion
  Toastify({
    text: `Ya está disponible el artículo ${nuevoProducto.codigo} ${nuevoProducto.item} en la lista de precios`,
    duration: 5000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
