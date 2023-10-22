//tipos de dados
// conversões implicitas = permite que converta um dado em outro

//conversão ímplicita
const num = 456;
const numString = "456";

// alterar de 3 === para 2 == e considera os dois números como strings
//console.log(num == numString);

//  + concatena
//console.log(num + numString);

// Soma
//console.log(num + Number(numString));

//Caso o número tenha uma letra - o resultado é (not a number)
const numStr = "456a";
console.log(num + Number(numStr));
