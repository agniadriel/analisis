//1. convertir la siguiente funcion a una funcion flecha  ennuna solo linea sin llaves(1p)
const esPar = numero => numero % 2 === 0;
console.log(esPar(4));
console.log(esPar(5));

//2. Crear una funcion callback que acepte un arreglo de numeros y una funcion callback donde duplique cada elemento del arreglo 

function procesarNumeros(arr, callback) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(callback(arr[i]));
    }
    console.log("Resultado:", resultado);
}

procesarNumeros([1, 2, 3, 4], num => num * 2);

//3. Usando los metodos setTimeOut y setInterval crear un contador que disminuya del 5 al 0 
let contador = 5;

const intervalo = setInterval(() => {
    console.log(contador);
    contador--;
}, 1000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log("Cuenta regresiva terminada");
}, 6000);

// Dado el siguiente arreglo
const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { id: 2, titulo: "La casa de lo Espiritus", autor: "Isabel Allende", año: 1982 },
    { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
    { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", año: 2005 }
];

//4. Cambiar el nombre del libro con id 3 a Final del juego usando for..of
for (let libro of libros) {
if (libro.id === 3) {
    libro.titulo = "Final del juego";
    }
}
console.log("Libros actualizados:", libros);

//5. Crear una  funcion que muestre solo los titulos de arreglo libros usando for..of
function mostrarTitulos(libros) {
    console.log("Títulos de los libros:");
    for (let libro of libros) {
        console.log(libro.titulo);
    }
}

mostrarTitulos(libros);
