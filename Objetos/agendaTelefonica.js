/*5.1. Crie uma função chamada `criarContato` que recebe informações como nome, telefone e email, e retorna um objeto representando um contato.

5.2. Crie um array chamado `agenda` que irá armazenar diferentes contatos.

5.3. Implemente uma função chamada `adicionarContato` que recebe um contato como parâmetro e o adiciona ao array `agenda`.

5.4. Implemente uma função chamada `listarContatos` que percorre o array `agenda` e exibe no console as informações de cada contato.*/
const leitor = require("readline-sync")

let agenda = []

function cadastrarContato(){
    let nome = leitor.question("Informe o nome do contato: ")
    let telefone = leitor.question("Informe o telefone do contato: ")
    let email = leitor.question("Informe o email do contato: ")
    let contato = new criarContato(nome, telefone, email)
    return contato
}

function criarContato(nome, telefone, email){
    this.nome = nome
    this.telefone = telefone
    this.email = email
}

function adicionarContato(contato) {
    agenda.push(contato)
}

function listarContatos(agenda) {
    agenda.forEach(a => {
        console.log("\nContato:");
        console.log("Nome: ", a.nome);
        console.log("Telefone: ", a.telefone);
        console.log("Email: ", a.email);
    });
}

function main() {
    while(true){
        let menu = leitor.questionInt("\n1 - Cadastrar Contato \n2 - Visualizar Contatos \n3 - Sair \nInforme: ")
        switch (menu) {
            case 1:
                let contatoNovo = cadastrarContato()
                adicionarContato(contatoNovo)
                break;
            case 2:
                listarContatos(agenda)
                break;
            case 3:
                console.log("Saindo!");
                process.exit(0)
            default:
                console.log("Opção inválida!");
                break;
        }
    }
}

main()
