Olá! Bem-vindo à Beerpedia. Criei uma aplicação que consiste em um back-end com uma API REST para um CRUD de produtos acessados através da autenticação proveniente do cadastro e login do usuário, e um front-end com interfaces de login, cadastro e listagem de dados da Punk API v2.

Tecnologias Utilizadas

Back-end 💻

Node.js: Utilizei o ambiente de execução JavaScript no lado do servidor.
Express.js: Construí a API RESTful usando o framework Express.js para Node.js.
JWT (JSON Web Tokens): Implementei autenticação de usuário usando tokens JWT.

Banco de Dados 🗄️

TypeORM: Utilizei o TypeORM como um ORM (Object-Relational Mapping) para simplificar a interação com o banco de dados PostgreSQL.
PostgreSQL: Utilizei o PostgreSQL como sistema de gerenciamento de banco de dados relacional para armazenar e consultar os dados do meu aplicativo.

Front-end 🎨

React: Desenvolvi a interface do usuário usando a biblioteca React.
React Router: Implementei navegação entre páginas com o React Router.
Axios: Realizei solicitações HTTP à API usando o Axios.
Responsividade: Garanti que o front-end seja responsivo para funcionar em diferentes dispositivos.

Funcionalidades

Back-end:
Criei uma API REST com endpoints para CRUD de produtos.
Implementei autenticação de usuário usando tokens JWT.
Realizei validação de dados recebidos pela API.
Forneço endpoints de login e cadastro.

Front-end:
Criei uma interface de login e cadastro com feedback para informações de login incorretas.
Listei os dados da Punk API v2 após o login.
Garanti que o front-end seja responsivo para uso em dispositivos móveis e desktop.

Como Executar o Projeto

Faça um fork deste repositório.

Clone o seu fork para a sua máquina local.

Navegue para o diretório do projeto.

Instale as dependências do projeto usando o npm ou yarn:

Instalação das Dependências do Front-end:

No diretório do projeto de front-end, execute o seguinte comando para instalar as dependências:
npm install

Inicie a interface do usuário executando o comando:
npm run dev

Instruções do Back-end (Servidor e Banco de Dados):

Configuração do Servidor:

Certifique-se de que você tenha o Node.js instalado em seu sistema. Você pode baixá-lo em nodejs.org.

No diretório do seu projeto, execute o seguinte comando para instalar as dependências do servidor (se ainda não estiverem instaladas):
npm install

Configure as variáveis de ambiente necessárias para seu servidor. Isso pode incluir informações de banco de dados, portas, chaves de autenticação, etc.

Inicie o servidor executando o comando:
npm run dev

Configuração do Banco de Dados:

a. Certifique-se de que você tenha o banco de dados PostgreSQL instalado e em execução em seu sistema. Você pode baixá-lo em postgresql.org.

b. Crie um banco de dados PostgreSQL para seu aplicativo e configure as credenciais de acesso apropriadas.

c. Migre seu esquema de banco de dados usando o TypeORM ou outras ferramentas que você esteja usando. Normalmente, isso envolve a execução de comandos como:
npx typeorm migration:run

d. Certifique-se de que seu servidor possa se conectar ao banco de dados usando as configurações corretas (URL, usuário, senha, etc.).

Obrigado por conferir minha aplicação! Se você tiver alguma dúvida, não hesite em entrar em contato. Estou ansiosa para receber seu feedback e sugestões de melhoria.
