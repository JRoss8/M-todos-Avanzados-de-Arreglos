function ubicacionDelPaquete(recorrido, paquete) {
  const ubicacion = recorrido.indexOf(paquete);

  if (ubicacion !== -1) {
    console.log(`El paquete está en la posición: ${ubicacion}`);
  } else {
    console.log("El paquete no se encuentra en el recorrido.");
  }
}

const recorrido = ["Centro de distribución", "Sucursal 1", "Sucursal 2", "Sucursal 3", "Entrega final"];
const paquete = "Sucursal 2";

ubicacionDelPaquete(recorrido, paquete);
