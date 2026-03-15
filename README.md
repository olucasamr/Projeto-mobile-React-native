# Catálogo Interativo Mobile

Aplicação mobile desenvolvida em **React Native com Expo** que apresenta um catálogo de produtos consumindo dados de uma API REST.

## Tecnologias utilizadas

- React Native
- Expo
- Axios
- Redux Toolkit
- React Navigation

## Funcionalidades

- Tela de login com validação de email e senha
- Armazenamento temporário do usuário utilizando Redux Toolkit
- Listagem de produtos organizada por categorias
- Navegação entre abas Masculino e Feminino
- Consumo de API REST utilizando Axios
- Tela de detalhes do produto com informações completas
- Logout funcional retornando para tela de login

## Estrutura do projeto

- src
- components → componentes reutilizáveis
- screens → telas da aplicação
- services → conexão com API
- store → gerenciamento de estado com Redux Toolkit


## API utilizada

https://dummyjson.com/docs

Categorias utilizadas:

Masculino
- mens-shirts
- mens-shoes
- mens-watches

Feminino
- womens-bags
- womens-dresses
- womens-jewellery
- womens-shoes
- womens-watches

## Como executar o projeto

1. Clone o repositório
git clone URL_DO_REPOSITORIO


2. Instale as dependências
npm install


3. Inicie o projeto
npx expo start


4. Abra no navegador pressionando **W** ou utilize o aplicativo **Expo Go** no celular.

## Demonstração

O aplicativo possui as seguintes telas:

- Login
- Listagem de produtos por categoria
- Tela de detalhes do produto
- Logout