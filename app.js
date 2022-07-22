//**Iteración #1: Buscar el máximo**
//function sum(numberOne , numberTwo){}

const suma = (numberOne, numberTwo) => {
    console.log(suma);
    if (numberOne < numberTwo) {
        return numberTwo;
    }
    else {
        return numberOne;

    }
};

/**Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el 
más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (list) => {

    let superheroe = ""

    list.forEach((Element) => {

        superheroe = Element.length > superheroe.length ? Element : superheroe;
    });
    return superheroe

};

console.log(findLongestWord(avengers));


/*Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumAll = (list) => {
    let total = 0;
    for (element of list) {
        total += element;

    }
    return total;

};

console.log(sumAll(numbers));


//Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
    let total = 0;
    for (element of list) {
        total += element;

    }
    return total / list.length;

};
console.log(average(numbers2));