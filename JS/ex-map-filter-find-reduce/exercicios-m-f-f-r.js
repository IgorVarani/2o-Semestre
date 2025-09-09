//* FILTER

//! 1. Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.
const notas = [4, 7, 9, 3, 10, 5];
const notasMaioresOuIguais7 = notas.filter(nota => nota >= 7);
console.log(notasMaioresOuIguais7);

//! 2. Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];,
//! filtre apenas as palavras com mais de 4 letras.
const palavras = ["sol", "mar", "computador", "lua", "código"];
const palavrasMaisDe4L = palavras.filter(palavra => palavra.length > 4);
console.log(palavrasMaisDe4L);

//! 3. Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];,
//! filtre apenas os animais cujo nome começa com a letra "c".
const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];
const animaisComC = animais.filter(animal => animal.startsWith('c'));
console.log(animaisComC);

//* FIND

//! 1. Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];,
//! encontre o primeiro filme que começa com a letra "B".
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];
const filmeComB = filmes.find(filme => filme.startsWith('B'));
console.log(filmeComB);

//! 2. Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.
const numeros = [2, 4, 6, 9, 12, 15];
const numeroImpar = numeros.find(numero => numero % 2 !== 0);
console.log(numeroImpar);

//! 3. Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];,
//! encontre o primeiro aluno com nota maior ou igual a 7.
const alunos =
[   {nome: "Ana", nota: 8},
    {nome: "Carlos", nota: 5},
    {nome: "Beatriz", nota: 9}
];
const alunoAprovado = alunos.find(aluno => aluno.nota >= 7);
console.log(alunoAprovado);

//* MAP

//! 1. Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).
const temperaturas = [20, 25, 30, 15];
const temperaturasFahrenheit = temperaturas.map(temp => (temp * 1.8) + 32);
console.log(temperaturasFahrenheit);

//! 2. Dado o array const produtos = ["camisa", "calça", "sapato"];,
//! crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".
const produtos = ["camisa", "calça", "sapato"];
const produtosComPrefixo = produtos.map(produto => `Produto: ${produto.toUpperCase()}`);
console.log(produtosComPrefixo);

//! 3. Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).
const numeros2 = [1, 2, 3, 4];
const numerosAoQuadrado = numeros2.map(num => num ** 2);
console.log(numerosAoQuadrado);

//* REDUCE

//! 1. Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).
const valores = [100, 200, 50, 150];
const totalCompras = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(totalCompras);

//! 2. Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.
const palavras2 = ["JS", "é", "muito", "legal"];
const frase = palavras2.reduce((acumulador, palavraAtual) => `${acumulador} ${palavraAtual}`);
console.log(frase);

//! 3. Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.
const numeros3 = [1, 2, 3, 4, 5];
const soma = numeros3.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
const media = soma / numeros3.length;

//* Desafios (Misturando Funções)

//! 1. Dado o array
// const livros = [{titulo: "Dom Casmurro", paginas: 300},
// {titulo: "O Hobbit", paginas: 295},
// {titulo: "A Revolução dos Bichos", paginas: 112}];,
//! Filtre apenas os livros com mais de 200 páginas.
//! Crie um array apenas com os títulos.
//! Calcule o total de páginas de todos os livros.

const livros =
[
    {titulo: "Dom Casmurro", paginas: 300},
    {titulo: "O Hobbit", paginas: 295},
    {titulo: "A Revolução dos Bichos", paginas: 112}
];

const livrosComMaisDe200Paginas = livros.filter(livro => livro.paginas > 200);
console.log(livrosComMaisDe200Paginas);

const titulosDosLivros = livros.map(livro => livro.titulo);
console.log(titulosDosLivros);

const totalDePaginas = livros.reduce((acumulador, livro) => acumulador + livro.paginas, 0);
console.log(totalDePaginas);

//! 2. Dado o array
// const carrinho = [{produto: "Notebook", preco: 2500},
// {produto: "Mouse", preco: 100},
// {produto: "Teclado", preco: 200}];,
//! Use map para criar uma lista de strings no formato "Produto: X - R$ Y".
//! Use reduce para calcular o valor total da compra.
//! Use find para encontrar o produto chamado "Mouse".

const carrinho =
[
    {produto: "Notebook", preco: 2500},
    {produto: "Mouse", preco: 100},
    {produto: "Teclado", preco: 200}
];

const listaDeProdutos = carrinho.map(item => `Produto: ${item.produto} - R$ ${item.preco}`);
console.log(listaDeProdutos);

const valorTotalCompra = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(valorTotalCompra);

const produtoMouse = carrinho.find(item => item.produto === "Mouse");
console.log(produtoMouse);