let user = [];
let notes = [];


function menu() {
    const opcoes = prompt (
        `Escolha uma das opçoes:\n` +
        `1: Cadastrar um Usuário\n` +
        `2: Fazer Login\n` +
        `3: Gerenciar Recados\n` +
    )
    switch(opcoes) {
        case '1':
            const titulo = prompt('Digite o titulo do livro.')
            const nomeAutor = prompt('Digite o nome do autor do livro.')
            adicionarLivro(titulo, nomeAutor)
            menu()
            break
        case '2':
            listarLivros()
            menu()
            break
        case '3':
            const indiceParaAtualizar = parseInt(prompt('digite o indice que deseja atualizar'))
            const novoTitulo = prompt('digite o novo titulo')
            const novoNomeAutor = prompt('digite o novo nome do autor')
            atualizarLivro(indiceParaAtualizar, {
                titulo: novoTitulo  undefined,
                nomeAutor: novoNomeAutor  undefined
            })
            menu()
            break
        case '4':
            const indiceParaExcluir = parseInt(prompt('digite o indice que deseja excluir'))
            excluirLivro(indiceParaExcluir)
            menu()
            break
        case '5':
            alert('Encerrando o programa.')
            break
        default: 
            alert('digite um numero de comando valido (1, 2, 3, 4, 5)')
            menu()
            break
    }
}



function register(id, nome, email, password){
    id,
    nome,
    email,
    password
}
    
    let id = Number(prompt('ID'));
    let nome = prompt('Nome');
    let email = prompt('E-mail')

}