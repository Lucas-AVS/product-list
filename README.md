# Product Management Project

Este projeto é um sistema simples de gerenciamento de produtos desenvolvido como parte de um teste prático. Ele inclui funcionalidades de cadastro e listagem de produtos, com ordenação, edição e exclusão.

## Tecnologias Utilizadas

- **JavaScript**: Lógica do sistema
- **HTML**: Estrutura das páginas
- **CSS**: Estilização da interface
- **Webpack**: Gerenciamento de módulos e build
- **uuid**: Geração de IDs únicos para os produtos

## Funcionalidades

### Cadastro de Produtos

O formulário de cadastro permite adicionar novos produtos com os seguintes campos:

- **Nome do produto**: Campo de texto
- **Descrição do produto**: Campo de texto
- **Valor do produto**: Campo de valor numérico
- **Disponível para venda**: Opções “Sim” ou “Não” (botões radio)

### Listagem de Produtos

Os produtos cadastrados são exibidos em uma tabela com as seguintes características:

- Colunas exibidas:
  - Nome do produto
  - Preço
  - Disponibilidade (à venda ou não)
- Ordenação automática pelo valor (do menor para o maior)
- Botão para excluir produtos individualmente

### Navegação

- Ao cadastrar um novo produto, o sistema redireciona automaticamente para a página de listagem.
- Existe um botão na listagem para voltar à página de cadastro.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lucas-AVS/product-list/
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor local:
   ```bash
   npm start
   ```
4. Acesse o projeto em seu navegador em `http://localhost:8080`.

## Estrutura do Projeto

- **/src**: Contém o código-fonte do projeto
  - **index.js**: Arquivo principal
  - **styles.css**: Estilos do projeto
- **/dist**: Arquivos gerados para produção

## Requisitos Atendidos

Este projeto atende aos seguintes requisitos do teste prático:

1. **Cadastro de Produtos**:
   - Formulário com os campos obrigatórios descritos acima.
2. **Listagem de Produtos**:
   - Colunas com nome, valor e disponibilidade
   - Ordenação automática por valor do menor para o maior
3. **Navegação**:
   - Navegação simples entre pagina de cadastrar novos produtos e acompanha-los na listagem

## Dependências

- **uuid**: Usada para gerar IDs únicos para cada produto, garantindo consistência na manipulação e exclusão dos itens.
- **Webpack**: Configurado para empacotar os módulos e servir os arquivos de forma otimizada.

