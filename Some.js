function verificarDescuento(cursos) {
  const tieneDescuento = cursos.some(curso => curso.descuento);

  if (tieneDescuento) {
    console.log("Hay al menos un curso con descuento.");
  } else {
    console.log("No hay cursos con descuento.");
  }
}

const cursos = [
  { nombre: "JavaScript Básico", descuento: false },
  { nombre: "React Avanzado", descuento: true },
  { nombre: "Node.js para Principiantes", descuento: false }
];

verificarDescuento(cursos);
