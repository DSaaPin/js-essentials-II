// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

//function getTotal(inventory: [{article: 'Hamburguesa', price: 15, quantity: '1' ])

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(fruits){
    const onlyBananaArray = fruits.filter(item=> item === 'Banana')

    return `There are ${onlyBananaArray.length} bananas`
}
const ejercicio2Resultado = countBanana(['Palta','Banana','Naranja', 'Banana'])
console.log(ejercicio2Resultado)

//haciendo el mismo ejercicio pero usando .reduce
let count = ['Palta','Banana','Naranja', 'Banana'].reduce((acc,e)=> {e === 'Banana' ? acc++ : acc
    return acc
 },0)

console.log(count)

//haciendo el mismo ejercicio pero usando .reduce y en una sola línea de código
let count2 = ['Palta','Banana','Naranja', 'Banana'].reduce((acc,e)=> {
    
    return acc + (e === 'Banana' ? 1 : 0 )//primero hace la expresión, segun lo que devuelva suma 1 o 0 al acc qe está por fuera
 },0)

console.log(count2)

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(numbers){

    const onlyEven = numbers.filter(number=> {
        return number % 2 === 0//esto es el módulo, con esto sabemos si es par
        //el módulo es: El resto, de la división entera
        //el RETURN acà adentro TIENE que ir sí o sí, porque tiene que devolver un valor, verdadero o falso
    })//si e hace en una sola línea no son necesarias las llaves
    return onlyEven
}
  console.log(filterEvenNumbers(numbers));

  //otra forma más simple de ejercicio 3
  function filterNumber(numbers){
    return numbers.filter(number=>number%2 === 0)
  } 
  console.log(filterNumber(numbers))

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
const numbers2 = [1, 2, 3, 4, 5];

function squareNumbers(numbers2){

    return numbers2.map(number=>number*number)

}
  console.log(squareNumbers(numbers2));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5
const numbers3 = [-1, -2, -3, -4, -5,1, 2, 3, 4, 5];//agrego yo los negativos para probar

function findMax(numbers3){    
    maxNum = numbers3.reduce((acc,e)=> {e > acc ? acc = e : acc
        return acc
     },Number.NEGATIVE_INFINITY)//para controlar si pongo numeros en negativo
     return maxNum
}
console.log(findMax(numbers3))

//Otra forma de hacerlo con reduce pero menos código:
function findMax2(numbers3){    
    return numbers3.reduce((acc,e)=> e > acc ? e : acc,Number.NEGATIVE_INFINITY)//para controlar si pongo numeros en negativo
    }
console.log(findMax2(numbers3))

//funcion ya de javascript: 
//console.log(Math.max(1, 2, 3, 4, 5))

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5

//Resolucion ejercicio 6 otro compañero:
const calculateAverageAge = (people) => {
 
    let sumAge= people.reduce((ac, people) => ac + people.age,0);
 
    let averageAge = sumAge/ people.length;
 
    console.log(averageAge);
}
 
calculateAverageAge([
    { name: "Juan", age: 25 },
    { name: "Carla", age: 30 },
    { name: "Lucia", age: 35 },
    { name: "El Chengue", age: 49 }
]);