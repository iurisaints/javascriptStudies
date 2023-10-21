const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');

// Função para listar usuários
function listUsers() {
    fetch('http://localhost:5500/usuarios')
        .then(response => response.json())
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `${user.nome} - Idade: ${user.idade}, Curso: ${user.curso}`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Excluir';
                deleteButton.addEventListener('click', () => deleteUser(user.id));
                li.appendChild(deleteButton);
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro:', error));
}

// Função para adicionar usuário
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    fetch('http://localhost:5500/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name, idade: age, curso: course }),
    })
    .then(response => response.json())
    .then(() => {
        listUsers();
        userForm.reset();
    })
    .catch(error => console.error('Erro:', error));
});

// Função para excluir usuário
function deleteUser(user) {
    fetch(`/usuarios/${user.id}`, {
        method: 'DELETE',
    })
    .then(() => listUsers())
    .catch(error => console.error('Erro:', error));
}

// Listar usuários quando a página carregar
listUsers();

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    fetch('http://localhost:5500/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name, idade: age, curso: course }),
    })
    .then(response => response.json())
    .then(() => {
        listUsers();
        userForm.reset();
    })
    .catch(error => console.error('Erro:', error));
});
