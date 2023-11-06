# Desafio-Estagio-Rentcars
Desafio do Programa de Estágio 2023 na Rentcars

## Sobre o Projeto
O projeto é uma aplicação full-stack que visa atender aos requisitos de um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido em Node.js. Este projeto é uma oportunidade de demonstrar minhas habilidades de desenvolvimento e conhecimentos em tecnologias como Node.js, Express, MySQL, Sequelize, a criação de uma API RESTful, assim como meus conhecimentos em um framework de SPA (utilizei REACT)

### Tecnologias Utilizadas
Neste projeto, utilizei as seguintes tecnologias:

- **Node.js:** Plataforma de execução de JavaScript para o lado do servidor.
- **Express:** Framework web para construir APIs de forma simples e eficiente.
- **Mysql2:** Sistema de gerenciamento de banco de dados relacional para armazenar informações dos veículos.
- **Sequelize:** Biblioteca ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.
- **Cors:**
- **Dotenv:**
- **Nodemon:**
- **Axios:**
- **Bootstrap:**
- **React:**
- **React-dom:**
- **React-router-dom:**
- **Docker:**

### Funcionalidades
O sistema possui as seguintes funcionalidades:

- **Criação de Veículos:** Permite adicionar novos veículos com informações detalhadas.
- **Leitura de Veículos:** Possibilita a consulta de informações sobre veículos existentes.
- **Atualização de Veículos:** Permite a modificação de informações de veículos já cadastrados.
- **Exclusão de Veículos:** Permite a remoção de veículos do sistema.

## Instruções de Uso

Para testar o sistema, é necessário que o usuário possua as seguintes tecnologias instaladas:
- [Docker](https://www.docker.com/): O Docker é uma plataforma de contêiner que permite empacotar aplicativos e suas dependências em contêineres, tornando o processo de implantação mais fácil e eficiente.
- [Docker Compose](https://docs.docker.com/compose/install/): O Docker Compose é uma ferramenta que permite definir e executar aplicativos multicontêiner em Docker, facilitando a configuração de vários serviços em um único arquivo de configuração.
Após isso basta clonar o projeto no local de preferência e rodar o seguinte comando:
```bash
docker-compose up
```
O docker irá criar criar três imagens:
- **mysqldb:** Este contêiner utiliza a imagem do MySQL 5.7 e cria um ambiente de banco de dados para armazenar os dados dos veículos. As configurações são carregadas a partir de um arquivo `.env` e definem o nome do banco de dados, a senha do root e outras configurações.
- **app:** Este contêiner é responsável por executar o servidor da aplicação Node.js. Ele depende do contêiner `mysqldb` para acessar o banco de dados. As configurações do banco de dados, como host, porta, usuário e senha, são definidas como variáveis de ambiente.
- **front:** Este contêiner executa a parte do cliente do aplicativo, construída em React. Ele depende do contêiner `app` para acessar a API do servidor. O arquivo `Dockerfile` é usado para construir a imagem do contêiner, e a URL da API é passada como uma variável de ambiente.
O sistema pode ser executado pelo comando:
```bash
docker-compose up
```
Caso deseja parar os containers ativos basta rodar:
```bash
docker-compose down
```
O projeto irá rodar nas seguintes portas:
- Front-end: [localhost:3001](http://localhost:3001/)
- API: [localhost:300](http://localhost:3000/)



## Exemplo de Uso

### Adicionar Veículo

1. Na página inicial do aplicativo, clique no botão "Adicionar Veículo".

![Adicionar Veículo](screenshots/adicionar-veiculo.png)

2. Preencha os campos obrigatórios, como modelo, marca, ano, etc.

![Preencher Detalhes do Veículo](screenshots/preencher-detalhes-veiculo.png)

3. Clique no botão "Salvar" para adicionar o veículo ao sistema.

![Salvar Veículo](screenshots/salvar-veiculo.png)

### Visualizar Lista de Veículos

1. Na página inicial do aplicativo, você verá a lista de veículos disponíveis.

![Lista de Veículos](screenshots/lista-veiculos.png)

2. Clique em um veículo na lista para visualizar informações detalhadas.

![Detalhes do Veículo](screenshots/detalhes-veiculo.png)

### Editar ou Deletar um Veículo

1. No detalhes do veículo, você encontrará opções para editar ou deletar o veículo.

![Opções de Edição e Deleção](screenshots/editar-deletar-veiculo.png)

2. Clique em "Editar" para fazer alterações nos detalhes do veículo.

![Editar Veículo](screenshots/editar-veiculo.png)

3. Clique em "Deletar" para remover o veículo do sistema.

![Deletar Veículo](screenshots/deletar-veiculo.png)



## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias, correções de bugs e novas funcionalidades.

## Licença
Este projeto é distribuído sob a licença [inserir nome da licença aqui]. Consulte o arquivo `LICENSE` para obter mais detalhes.

## Contato
[Inserir suas informações de contato, como e-mail ou redes sociais, caso deseje que as pessoas entrem em contato com você sobre o projeto.]

