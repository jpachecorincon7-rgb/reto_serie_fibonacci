// 1. Inicio la serie con los dos primeros números
const serie = [0, 1];

// Uso un ciclo para calcular los 18 números restantes
for (let i = 2; i < 20; i++) {
    // Sumo los dos anteriores y los guardo
    serie[i] = serie[i - 1] + serie[i - 2];
}

// Imprimimo el resultado en la consola
console.log("Resultado del reto (20 primeros números):");
console.log(serie.join(", "));