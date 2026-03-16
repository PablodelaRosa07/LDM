// BUCLES
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

let numeros = [10,20,30];

for (let n of numeros) {
    console.log(n);
}

//basicamente recorrer un array es hacer un bucle que itere sobre el mismo 
let contador2 = 0
while (contador2 < 3) {
    console.log(numeros[contador2]);
    contador2++;
}