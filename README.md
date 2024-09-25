# Meu Portfólio

Este é o código fonte do meu portfólio pessoal, construído com **Vite**, **React**, **Material-UI (MUI)** e **Lottie**.

## 🚀 Tecnologias Utilizadas

- **Vite** - Ferramenta rápida de construção e desenvolvimento de aplicações React
- **React** - Biblioteca JavaScript para construção de interfaces de usuário
- **Material-UI (MUI)** - Biblioteca de componentes de UI altamente customizáveis para React
- **Lottie** - Biblioteca de animações para incluir animações leves em JSON

## ⚙️ Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório:

```bash
git clone https://github.com/CaioDamascenoAlves/Portifolio.git
cd Portifolio
```
### 2. Instale as dependências com pnpm:
Certifique-se de ter o pnpm instalado. Para instalar as dependências, rode:
```bash
pnpm install
```
### 3. Configure o Formspree:
Antes de rodar o projeto, você precisa configurar o formulário de contato. Para isso, siga os passos abaixo:

1. [Acesse o site Formspree](https://formspree.io/)
2. Cadastre-se ou faça login em sua conta.
3. Crie um formulário e copie o endpoint fornecido.
4. No arquivo .env, crie uma variável de ambiente VITE_FORMSPREE_URL e cole o endpoint copiado, conforme o exemplo:
```bash
VITE_FORMSPREE_URL=https://formspree.io/f/seu-endpoint
``` 
### 4. Rode o projeto localmente:
```bash
pnpm run dev
```

# 🌐 Deploy para GitHub Pages

O deploy do projeto está configurado para ser feito automaticamente quando você fizer **push** na branch `main`. Um GitHub Action será acionado para realizar o deploy no GitHub Pages.

Aqui está um resumo do workflow de deploy:

1. **Instalação do Node.js**: O Node.js versão 20 é configurado.
2. **Instalação do pnpm**: O gerenciador de pacotes `pnpm` é instalado.
3. **Instalação das dependências**: O comando `pnpm install` instala todas as dependências do projeto.
4. **Build do projeto**: O comando `pnpm run build` cria os arquivos otimizados para produção.
5. **Configuração do Git**: O nome de usuário e o email são configurados para o Git, e o remote do repositório é atualizado.
6. **Deploy para GitHub Pages**: O comando `npx gh-pages -d dist` é executado para publicar a pasta `dist` no GitHub Pages.

## Configuração Necessária

* No arquivo `package.json`, você deve ajustar a seguinte linha para refletir o repositório correto:

```json
"homepage": "https://CaioDamascenoAlves.github.io/Portifolio"
```

* No arquivo de workflow, o nome de usuário e email do Git também precisam ser configurados corretamente:

```yaml
run: |
  git config --global user.name "CaioDamascenoAlves"
  git config --global user.email "caio.damasceno@aluno.ufop.edu.br"
```

## Estrutura do Workflow (resumo)

O workflow do GitHub Actions, localizado em `.github/workflows/deploy.yml`, será executado automaticamente sempre que houver um push na branch `main`. Certifique-se de que as **GitHub Actions** estão habilitadas no repositório para que o deploy funcione corretamente.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Configure Git
        run: |
          git config --global user.name "CaioDamascenoAlves"
          git config --global user.email "caio.damasceno@aluno.ufop.edu.br"
          git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/CaioDamascenoAlves/Portifolio.git

      - name: Deploy
        run: |
          npx gh-pages -d dist -m "Deploying to GitHub Pages"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🛠️ Ajustes e Modificações

* **Mudar `homepage` no `package.json`**: Certifique-se de que a URL da página inicial está correta.
* **Ajustar o GitHub Actions**: Verifique se o nome de usuário e o email estão corretos no workflow para garantir que o deploy funcione perfeitamente.

Isso é tudo! Agora, ao fazer **push** no branch `main`, o deploy será feito automaticamente no GitHub Pages.
