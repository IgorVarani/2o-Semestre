//* Variável para armazenar o form
const elForm = document.getElementById('form-tarefa');

//* Variável para armazenar o título da tarefa
const elTitulo = document.querySelector('#titulo');

//* Variável para armazenar o filtro de status
const elFiltroStatus = document.querySelector('#filtro-status');

//* Variável para armazenar o filtro de busca
const elFiltroBusca = document.querySelector('#filtro-busca');

//* Variável para armazenar a lista
const elLista = document.querySelector('#lista-tarefas');

//* Variável para armazenar o texto quando a lista estiver vazia
const elVazio = document.querySelector('#vazio');

//* Lista de tarefas inicial
let tarefas = 
[
    {id: 1, titulo: 'Estudar DOM', status: 'pendente'},
    {id: 2, titulo: 'Criar To-Do-List', status: 'andamento'},
    {id: 3, titulo: 'Praticar JavaScript', status: 'concluida'}
];

//* Adiciona um "ouvinte" para o evento de submit no formulário
elForm.addEventListener('submit', function(e)
{
    // "e" é uma referência ao objeto de evento que o navegador cria sempre que algo acontece.
    // Impede o comportamento padrão do formulário, que é recarregar a página.
    e.preventDefault();

    // Pega o value digitado no input (elTitulo) e remove espaços em branco no início e no fim com trim().
    const titulo = elTitulo.value.trim();

    // Se o título estiver vazio, encerra a função.
    if(!titulo) return;
    //console.log("Título:", titulo);


    // Cria um objeto representando a nova tarefa.
    // - id: recebe o número do timestamp atual (Date.now()).
    // - titulo: recebe o texto digitado no input pelo usuário.
    // - status: inicia sempre como "pendente".
    const nova = {id: Date.now(), titulo: titulo, status: "pendente"};

    // Adiciona a nova tarefa dentro do array de tarefas.
    tarefas.push(nova);

    console.log(tarefas);

    // Limpa o campo de texto do input.
    elTitulo.value = "";
});

// Renderizar a lista
function render()
{
    // Termo digitado na busca ficará em minúsculo.
    const termo = elFiltroBusca.value.toLowerCase();
    // console.log("Termo digitado em minúsculo:", termo);

    // Valor selecionado no filtro de status.
    const filtro = elFiltroStatus.value;
    // console.log("Filtro de status:", filtro);

    // Aplica filtros de status e busca.
    const filtradas = tarefas.filter(function(t)
    {
        // Se filtro for "todas", aceita qualquer status.
        // Se não - compara com t.status.
        const okStatus = filtro === "todas" ? true : t.status === filtro;

        // Se houver termo, verifica se o título da tarefa inclui o termo.
        // Se o usuário digitar algo, só aceita a tarefa se for igual ao que o usuário digitou.
        const okBusca = termo ? t.titulo.toLocaleLowerCase().includes(termo) : true;

        return okStatus && okBusca;
    });

    // Limpa a lista antes de redesenhar.
    elLista.innerHTML = "";

    // Cria os elementos da lista para cada tarefa filtrada.
    filtradas.forEach(function(t)
    {
        // <li class "tarefa {status}" data-id={id}></li>
        const li = document.createElement('li');

        // class = "tarefa concluida"
        li.className = "tarefa " + t.status;
        li.dataset.id = t.id;

        // Título da tarefa.
        const h3 = document.createElement('h3');
        h3.textContent = t.titulo;

        // Caixinha de ações (checkbox, select, delete).
        const acoes = document.createElement('div');
        acoes.className = "acoes";

        // Checkbox para marcar como concluída/pendente.
        const check = document.createElement('input');
        check.type = "checkbox";
        check.checked = t.status === "concluida";
    });
}