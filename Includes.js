function verificarTesoro(areas, tesoro) {
  if (areas.includes(tesoro)) {
    console.log(`¡El tesoro está en el área: ${tesoro}!`);
  } else {
    console.log("El tesoro no se encuentra en el mapa.");
  }
}

const areasDelMapa = ["Playa", "Bosque", "Montañas", "Cueva", "Valle"];
const tesoro = "Cueva";

verificarTesoro(areasDelMapa, tesoro);
