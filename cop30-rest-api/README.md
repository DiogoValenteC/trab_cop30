# COP30 REST API

Este projeto é uma API REST desenvolvida com Node.js, Express.js e Sequelize, projetada para gerenciar recursos relacionados ao evento COP30. A API fornece endpoints para criar, recuperar, atualizar e excluir recursos.

## Estrutura do Projeto

```
cop30-rest-api
├── src
│   ├── controllers
│   │   └── resourceController.js
│   ├── models
│   │   └── resource.js
│   ├── routes
│   │   └── resourceRoutes.js
│   ├── config
│   │   └── database.js
│   └── app.js
├── package.json
├── .sequelizerc
└── README.md
```

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/yourusername/cop30-rest-api.git
   ```

2. Acesse o diretório do projeto:
   ```
   cd cop30-rest-api
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Configuração do Banco de Dados

Este projeto utiliza SQLite como banco de dados. A configuração do banco está em `src/config/database.js`. Certifique-se de que o arquivo do banco foi criado e está acessível.

## Executando a Aplicação

Para iniciar o servidor, execute o comando:
```
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

### Recursos

- **GET /resources**: Recupera todos os recursos.
- **GET /resources/:id**: Recupera um recurso pelo ID.
- **POST /resources**: Cria um novo recurso.
- **PUT /resources/:id**: Atualiza um recurso existente pelo ID.
- **DELETE /resources/:id**: Exclui um recurso pelo ID.

## Exemplos de Uso

### Recuperar todos os recursos
```
GET /resources
```

### Criar um novo recurso
```
POST /resources
Content-Type: application/json

{
  "name": "Nome do Recurso",
  "type": "Tipo do Recurso",
  "description": "Descrição do Recurso"
}
```

### Atualizar um recurso
```
PUT /resources/:id
Content-Type: application/json

{
  "name": "Nome Atualizado do Recurso",
  "type": "Tipo Atualizado do Recurso",
  "description": "Descrição Atualizada do Recurso"
}
```

### Excluir um recurso
```
DELETE /resources/:id
```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.