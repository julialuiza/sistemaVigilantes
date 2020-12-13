## Vigilantes da Floresta

Trabalho Final - Programação Web - ERE/2020.

<br>

## Instalação

Primeiro é necessário clonar o projeto usando `git clone https://github.com/julialuiza/sistemaVigilantes.git`.

Depois, configurar a aplicação usando `npm install` no diretório raiz.

Para configuração do banco de dados, criar um banco de dados utilizando MySQL com o nome `vigilantes2` e um user com os dados contidos em `config/database.json`.
Em seguida, realizar a migração das tabelas utilizando `npx sequelize db:migrate` e `npx sequelize-cli db:seed:all`.

Para iniciar a aplicação, utilizar `node app.js`.
