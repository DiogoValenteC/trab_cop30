
TRABALHO-COP-30 é um sistema backend desenvolvido com Node.js, Fastify, Prisma e MongoDB para gerenciar contatos relacionados à COP30. Ele utiliza tecnologias como Node.js, Fastify, Prisma ORM, MongoDB Atlas e TypeScript. A estrutura do projeto segue o padrão com uma pasta backend contendo o schema do Prisma, os controllers, services e rotas dentro de src, e arquivos de ambiente como .env e .env.example.

Para configurar o ambiente, primeiro clone o repositório com git clone https://github.com/seu-usuario/trabalho-cop-30.git e entre na pasta backend. Em seguida, instale as dependências com npm install. Depois disso, crie um arquivo .env baseado no .env.example com o comando cp .env.example .env e preencha o campo DATABASE_URL com sua string de conexão do MongoDB, como DATABASE_URL="mongodb+srv://usuario:senha@host.mongodb.net/nomeDoBanco".

Para rodar a API localmente, execute npm run dev na pasta backend. A API ficará disponível em http://localhost:3333. As principais rotas são: POST /newCustomer para criar um novo contato.

É importante lembrar que o arquivo .env está listado no .gitignore por segurança, então nunca será enviado ao repositório. Para facilitar a configuração, o projeto inclui o .env.example como modelo. Nunca compartilhe sua string real de conexão com o banco em repositórios públicos.

Este projeto foi desenvolvido por Diogo Valente e Daniel Luiz Aqui e está disponível em https://github.com/DiogoValenteC e https://github.com/D-camara.
