// OBJETOS Y ARRAYS
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar(){
        console.log("El coche arranca");
    }
};

console.log(coche.marca);
coche.arrancar();

const frutas = ["manzana","pera","uva"];

frutas.push("naranja");
frutas.pop();

frutas.forEach(f => console.log(f));
