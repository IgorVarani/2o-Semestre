//*FILTER

//! Filtrar númeross maiores que 2
const numeros = [1, 2, 3, 4, 5, 6];

const numerosMaioresQueDois = numeros.filter(numero => numero > 2);
console.log(numerosMaioresQueDois);

//! Filtrar nomes
let nomes = ['Ana', 'Bruno', 'Carlos', 'Eva', 'Fernanda'];

let nomesLongos = nomes.filter(nome => nome.length > 5);

//! Filtrar números pares
let numeros1a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numeros1a10.filter(numero => numero % 2 === 0);

console.log(pares);

//! Filtrar um objeto
let pessoas =
[
    {nome: "Igor", idade: 19 },
    {nome: "Guilherme", idade: 17 },
    {nome: "Should Be", idade: 17 }
];

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(adultos);

//*FIND
//*Retorna o primeiro elemento da lista correspondente a condição

//! Procurar por um produto
const produtos =
[
    {id: 1, nome: "Teclado", preco: 100},
    {id: 2, nome: "Mouse", preco: 50},
    {id: 3, nome: "Monitor", preco: 700}
];

const produtoCaro = produtos.find(item => item.preco > 600);
console.log(produtoCaro);

//! Encontrar o primeiro número maior que 10
let numeros5a15 = [5, 8, 12, 20, 3, 15];

let encontrado = numeros5a15.find(numero => numero > 10);
console.log(encontrado);

//! Buscar por um nome pela primeira letra
let nomesPessoas = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"];

let nomeEncontrado = nomesPessoas.find(nome => nome.startsWith("C"));
console.log(nomeEncontrado);

//*MAP

//! Multiplicar todos os números por 2
const valores = [1, 2, 3, 4, 5];
const valoresDobrados = valores.map(valor => valor * 2);
console.log(valoresDobrados);

//! Criando um array a partir de objetos
let pessoasArray =
[
    {nome: "Igor", idade: 19 },
    {nome: "Guilherme", idade: 17 },
    {nome: "Should Be", idade: 17 }
];

let nomesPessoasArray = pessoasArray.map(pessoa => pessoa.nome);
console.log(nomesPessoasArray);

let mensagems = pessoasArray.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`);
console.log(mensagems);

//*FILTER

//! Deixar os nomes em maiúsculo e adicionar um sufixo
const nomesMinusculos = ["ana", "bruno", "carla"];

const nomesMaiusculosComSufixo = nomesMinusculos.map(nome => "Colaborador: " + nome.toUpperCase());
console.log(nomesMaiusculosComSufixo);

//*REDUCE
//*Reduz um array a um único valor

//! Somar todos os números do array
const numerosParaSomar = [1, 2, 3, 4, 5];

const somaTotal = numerosParaSomar.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(somaTotal);

//! Contar a frequência de palavras
const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = palavras.reduce((acumulador, palavra) =>
{
    acumulador[palavra] = (acumulador[palavra] || 0) + 1;
    return acumulador;
}, {});

//! Calcular média de notas
const notas = [7, 8, 9, 6, 10];

const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
console.log(media);

//*USO COMBINADO
const usuarios =
[
    {nome: "Alice", idade: 25},
    {nome: "Bob", idade: 30},
    {nome: "Carol", idade: 20},
]

const usuariosMaioresQ21 = usuarios.filter(usuario => usuario.idade > 21); //Filtra usuários com mais de 21 anos

const usuarioIdade = usuarios.find(usuario => usuario.idade > 21); //Encontra o primeiro usuário com mais de 21 anos

const nomesUsuarios = usuarios.map(usuario => usuario.nome); //Cria um array apenas com os nomes dos usuários

const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0); //Soma todas as idades dos usuários usando o reduce

console.log("Maiores de idade: ", usuariosMaioresQ21);
console.log("Primeiro maior de idade: ", usuarioIdade);
console.log("Nomes dos usuários: ", nomesUsuarios);
console.log("Soma das idades: ", somaIdades);