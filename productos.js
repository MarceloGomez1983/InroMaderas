let prod = ["INRO-001", "INRO-002", "INRO-003"];

// Selecciono el elemento del select
let selectProducto = document.getElementById("listaProductos");

// Creamos primera opción con instrucciones para el usuario
let optionNula = document.createElement("option");
optionNula.innerText = "Seleccionar producto";
optionNula.value = "";
selectProducto.append(optionNula);

// Recorro Array
prod.forEach((prod, iProd) => {
  // Creo elemento option
  let option = document.createElement("option");
  option.innerText = prod;
  option.value = iProd;

  // Agrego la oopcion al select
  selectProducto.append(option);
});
