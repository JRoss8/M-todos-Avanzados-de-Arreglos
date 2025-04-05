function gestionarEmpleados(lista, nuevoEmpleado, nuevoParaReemplazo) {
  lista.push(nuevoEmpleado);

  lista.splice(1, 1);

  lista.splice(2, 1, nuevoParaReemplazo);

  console.log("Lista actualizada de empleados:", lista);
}

const empleados = ["Ana", "Luis", "Carlos", "Marta"];
const nuevoEmpleado = "Sofía";
const reemplazo = "Javier";
