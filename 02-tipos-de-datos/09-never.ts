// Definiendo un punto critico en el programa
const error = (message): never => {
  throw new Error(message);
}

error('Alcanzo el punto critico');