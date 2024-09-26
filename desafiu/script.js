// Estruturas para armazenar usuários e recados
let users = [];
let notes = [];

// Função para cadastrar um novo usuário
function registerUser(name, email, password) {
    if (users.some(user => user.email === email)) {
        console.log('Este e-mail já está cadastrado.');
        return;
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);
    console.log('Usuário cadastrado com sucesso!');
}

// Função para fazer login
function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        console.log('E-mail ou senha inválidos.');
        return null;
    }

    console.log('Login bem-sucedido!');
    return user;
}

// Função para criar um recado
function createNote(userId, title, description) {
    if (!users.find(user => user.id === userId)) {
        console.log('Usuário não encontrado.');
        return;
    }

    const newNote = {
        id: notes.length + 1,
        userId,
        title,
        description
    };

    notes.push(newNote);
    console.log('Recado criado com sucesso!');
}

// Função para visualizar recados de um usuário
function viewNotes(userId) {
    const userNotes = notes.filter(note => note.userId === userId);

    if (userNotes.length === 0) {
        console.log('Nenhum recado encontrado para este usuário.');
        return;
    }

    console.log('Recados do usuário:');
    userNotes.forEach(note => {
        console.log(`ID: ${note.id}, Título: ${note.title}, Descrição: ${note.description}`);
    });
}

// Função para atualizar um recado
function updateNote(noteId, newTitle, newDescription) {
    const note = notes.find(note => note.id === noteId);

    if (!note) {
        console.log('Recado não encontrado.');
        return;
    }

    note.title = newTitle;
    note.description = newDescription;
    console.log('Recado atualizado com sucesso!');
}

// Função para excluir um recado
function deleteNote(noteId) {
    const index = notes.findIndex(note => note.id === noteId);

    if (index === -1) {
        console.log('Recado não encontrado.');
        return;
    }

    notes.splice(index, 1);
    console.log('Recado excluído com sucesso!');
}

// Função principal para exibir o menu
function menu() {
    const opcoes = prompt(
        `Escolha uma das opções:\n` +
        `1: Cadastrar um Usuário\n` +
        `2: Fazer Login\n` +
        `3: Gerenciar Recados\n` +
        `4: Sair\n`
    );

    switch(opcoes) {
        case '1':
            const name = prompt('Digite seu nome:');
            const email = prompt('Digite seu e-mail:');
            const password = prompt('Digite sua senha:');
            registerUser(name, email, password);
            menu();
            break;

        case '2':
            const loginEmail = prompt('Digite seu e-mail:');
            const loginPassword = prompt('Digite sua senha:');
            const user = loginUser(loginEmail, loginPassword);
            if (user) {
                manageNotes(user.id);
            } else {
                menu();
            }
            break;

        case '4':
            console.log('Encerrando o programa.');
            break;

        default:
            console.log('Digite um número de comando válido (1, 2, 4)');
            menu();
            break;
    }
}

// Função para gerenciar recados após o login
function manageNotes(userId) {
    const opcoes = prompt(
        `Gerenciamento de Recados:\n` +
        `1: Criar Recado\n` +
        `2: Visualizar Recados\n` +
        `3: Atualizar Recado\n` +
        `4: Excluir Recado\n` +
        `5: Sair para o menu principal\n`
    );

    switch(opcoes) {
        case '1':
            const title = prompt('Digite o título do recado:');
            const description = prompt('Digite a descrição do recado:');
            createNote(userId, title, description);
            manageNotes(userId);
            break;

        case '2':
            viewNotes(userId);
            manageNotes(userId);
            break;

        case '3':
            const noteIdToUpdate = parseInt(prompt('Digite o ID do recado a ser atualizado:'), 10);
            const newTitle = prompt('Digite o novo título:');
            const newDescription = prompt('Digite a nova descrição:');
            updateNote(noteIdToUpdate, newTitle, newDescription);
            manageNotes(userId);
            break;

        case '4':
            const noteIdToDelete = parseInt(prompt('Digite o ID do recado a ser excluído:'), 10);
            deleteNote(noteIdToDelete);
            manageNotes(userId);
            break;

        case '5':
            menu();
            break;

        default:
            console.log('Digite um número de comando válido (1, 2, 3, 4, 5)');
            manageNotes(userId);
            break;
    }
}

// Executar o menu
menu();
