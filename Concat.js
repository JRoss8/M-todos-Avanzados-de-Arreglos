function combinarListasDeCompra(lista1, lista2) {
  const listaCombinada = lista1.concat(lista2);
  
  console.log("Lista de compras combinada:");
  listaCombinada.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  
  return listaCombinada;
}

const listaCliente1 = ["Manzanas", "Leche", "Pan", "Huevos"];
const listaCliente2 = ["Queso", "Papel higiénico", "Detergente", "Pollo"];

const listaCombinada = combinarListasDeCompra(listaCliente1, listaCliente2);