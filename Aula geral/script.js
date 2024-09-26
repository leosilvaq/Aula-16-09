// const numbers = [1, 3, 5, 4, 7, 9];

// // const findIndexOfFirstEvenNumber = numbers.findIndex(number => number % 2 === 0);

// // console.log

// const numbers = [1, 3, 5, 4, 7, 9];
// const result = numbers.forEach(number => console.log(number * 2));


// const fruits = ['Maça', 'Banana', 'Pera', 'Laranja'];
// const result = fruits.find(fruit => fruit === 'Pera');
// console.log(result);

// const colors = ['Vermelho', 'Verde', 'Azul', 'Amarelo'];
// const removedColors = colors.splice(1, 2, 'Roxo', 'Laranja');

// console.log(removedColors); 
// console.log(colors);

// const colors = ['Vermelho', 'Verde', 'Azul', 'Amarelo'];
// const updatedColors = [...colors]

// const removedColors = colors.splice(1, 2, 'Roxo', 'Laranja');

// console.log(removedColors); 
// console.log(colors);
// console.log(updatedColors)

// const temperatures = [25, 38, 22, 15, 18];

// const hasHot = temperatures.some(temp => temp > 28);

// console.log(hasHot);


// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(number => Math.pow(number, 2));

// console.log(squareNumbers);

// const numbers = [40, 1, 5, 200, 10];
// const orderedNumbers = numbers.sort((a, b) => a - b);
// const orderedNumbers = numbers.sort();
// console.log(orderedNumbers);

// const numbers = [40, 1, 5, 200, 10];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const numbers = [40, 1, 5, 200, 10];
// const updatedNumbers = [...numbers]
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// console.log(updatedNumbers);

// const funcionarios = [
//     { name: 'carla', salary: 2000 },
//     { name: 'jose', salary: 1600 },
//     { name: 'mari', salary: 2400 },
// ]

// funcionarios.sort((a, b) => b.salary - a.salary);

// console.log(funcionarios);
// console.table(funcionarios);

// const numbers = [40, 1, 5, 200, 10, 3];

// numbers.includes(3);
// console.log(numbers.includes(5));

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.reduce((acc, currentValue) => {
//      acc.push(currentValue * currentValue);
//      return acc
// }, []);

// console.log(squareNumbers);

const colors = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Verde', 'Amarelo'];

const grouped = colors.reduce((acc, currentValue)=> {
    if (!acc[currentValue]){
        acc[currentValue] = [];
    }

    acc[currentValue].push(currentValue);
    return acc;
}, {})

console.table(grouped);
console.log(grouped);

maça: [];