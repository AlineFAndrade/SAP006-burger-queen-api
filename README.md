# Burger Queen - API com Node.js

## 1. Sobre o projeto

Uma hamburgeria em crescimento precisa de um aplicativo para gerenciar os pedidos recebidos pelos atendentes no salão, mandá-los para a cozinha e acompanhar o status do preparo. Foi desenvolvido então, o Red Queen front end, que pode ser conferido neste link: (https://alinefandrade.github.io/SAP006-burger-queen-api-client/) . Agora foi criada uma API Rest, que integrada ao aplicativo, armazena e manipula os dados do restaurante. 

## 2. Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* PostgresSQL
* Postman
* Swagger

## 3. Endpoints
#### 3.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 3.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 3.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

## 4. Instalação

* 1 - Instale o Postgres localmente:
* 2 - Altere o arquivo config.json para conectar com sua base local. Ex: 
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "burgerQueen_api",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": false
    }
  },
* 3 - Executando o sequelize migration:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
* 4 - npm start para iniciar o projeto.

#### 4.1 Instalação/Deploy no Heroku

* heroku login
* heroku create aline-burguer-queen-api
* heroku addons:create heroku-postgresql:hobby-dev 

Alterar o config.json:
"production": {
"use_env_variable": "DATABASE_URL",
"dialectOptions": {
"ssl": {
"rejectUnauthorized": false
}
}
}

Alterar o package.json:
"scripts": {
"pretest": "eslint .",
"start": "node index.js",
"lint": "eslint .",
"build": "sequelize-cli db:migrate --env production && sequelize-cli db:seed:all --env production"
}

Execute:
git push heroku main para publicar.
