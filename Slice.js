function recortarImagen(matriz, x, y, ancho, alto) {
  const filas = matriz.slice(y, y + alto);
  
  return filas.map(fila => fila.slice(x, x + ancho));
}

const imagen = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const recorte = recortarImagen(imagen, 1, 2, 3, 2);
console.log(recorte);