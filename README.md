# Desafio TMDB Back-End

## Resumo do Projeto
  Esse projeto é uma aplicação full stack, que  consome uma API de filmes (TMDB). As tecnologias utilizadas foram:

  - Node.js
  - Sequelize
  - Mysql
  - Express
  - Axios
  - Eslint

## Executando o projeto 

### 1 - Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Crie o arquivo .env, logo em seguida, coloque as informações necessarias que são:

    - API_KEY =   Chave de acesso do TMDB
    - API_URL =   Link de consumo da api do TMDB ("https://api.themoviedb.org/3")
    - API_IMAGE_URL = Link onde se encontra as imagens da api("https://image.tmdb.org/t/p/original")
    - DATABASE_NAME = Nome do banco da sua aplicação ()
    - DATABASE_USER = Nome do usuario de acesso do seu banco de dados
    - DATABASE_PASSWORD = Senha do seu banco de dados
    - DATABASE_HOST = Seu locallhost
    - DATABASE_PORT = Porta de onde o seu banco está rodando
   
<p>Obs: Você precisa criar um banco de dados com o mesmo nome do DATABASE_NAME do .env</p>
    
### 2 - Instalando e executando
Foi utilizado o gerenciador de bibliotecas yarn neste projeto, então:
```js
yarn // Baixar dependências  
yarn sequelize-cli db:migrate //Executar migrations
yarn start //Executa o projeto
```

Pronto! Agora é só configurar o front que está no seguinte link: Em dev <br>
 
Criado por<br>
Juliano Ferreira Rodrigues
