//var - de ínicio o sistema carrega as variáveis primeiro
// ctrl c comenta as linhas selecionadas
// pesquisar sobre var, let e const

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area);

//let

// let forma = "retângulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retângulo") {
//   area = altura * comprimento;
// } else {
//   area = (area * comprimento) / 2;
// }

// console.log(area);

//const
// constante não pode alterar a variavel

const forma = "triângulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado") {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);
