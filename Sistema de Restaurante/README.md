# ristorant


# Iniciando servidores:

Olá!

Antes de iniciarmos, certifique-se de ter o AJAX e o Node instalado em sua máquina, também instale na pasta raiz.

Inicie com isso:
 ```
    npm install
 ```

Aqui estão as etapas para configurar um servidor local usando **`json-server`**:

1. Instale o pacote **`json-server`** globalmente no seu sistema. Você pode usar o npm (Node Package Manager) para fazer isso. Abra o terminal e execute o seguinte comando:
    
    ```
    
    npm install -g json-server
    ```
    
2. Crie um arquivo JSON para armazenar suas reservas. Crie um arquivo chamado **`reservas.json`** e adicione o conteúdo inicial:
    
    ```
    []
    ```
    
3. Inicie o servidor JSON localmente. No terminal, navegue até o diretório onde o arquivo **`reservas.json`** está localizado e execute o seguinte comando:
    
    ```
    json-server --watch arquivo.json
    ```
    
    Isso iniciará um servidor JSON na porta 3000.
    

Para iniciar os servidores tem que ter certeza que está na pasta raiz do código.

1. Primeiramente você tem que iniciar o servidor AJAX que será através do código:

```
json-server --watch reservas.json
```

 para o módulo de reservas.

Para o módulo de pedidos:

```
json-server --watch pedidos.json
```

1.1  Se caso não funcionar de primeira, pode utilizar o modificador de autorização, para isso, rode o **PowerShell** em modo Administrador e insira o seguinte código:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Após isso, volte ao passo um, insira o código e siga em frente:

1. Agora você precisará iniciar, através de outro terminar, o servidor do front-end com esse código:

```
npx http-server
```

Após os servidores iniciados, só utilizar o código.

# Regras de Negócio:

O código gira em torno de um funcionamento de um [Restaurante](https://www.revfine.com/pt/gestao-de-restaurante/) com as páginas bem sucintas, sendo elas: Reservas, Pedidos e Página de Cardápio.

## Cardápio

Nosso cardápio é simples, pronto para ser populado através do código.

## Reservas

O módulo de Reservas funciona da seguinte forma:

Formulário para inserção de novas reservas;

Espaço para verificar as reservas já existentes;

## Pedidos

O módulo de Pedidos funciona da seguinte forma:

Espaço para verificar o cardápio;

Espaço para inserir novo pedido e confirmação após inserir os itens do cardápio;
