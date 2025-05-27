# Playwright E2E

## GitHub Actions + SonarCloud

[![Build e Testes](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml)

<br>

[![Status do Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=ugioni_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_playwright-e2e)

## Primeiros Passos

Para executar este projeto, siga os passos abaixo:

1. Instale o [Node.js](https://nodejs.org/) (versão >= 20.x)
2. Execute `npm i --save-dev` para instalar todas as dependências do projeto
3. Execute `npx playwright install` para instalar os navegadores usados pelo Playwright
4. Execute `npm run ci` para rodar toda a suíte de testes
5. Execute `npm run show-report` para visualizar os relatórios

Todos os artefatos de execução estarão disponíveis na pasta `./artifacts`.  
Se quiser removê-los, execute `npm run clean`.

## Utilizando o ZeroStep AI

Para utilizar a funcionalidade de IA com o ZeroStep, crie o arquivo `zerostep.config.json` na raiz do projeto e adicione seu token do ZeroStep. 

## Estrutura do Projeto

- `Scenarios`: Mapeamento dos cenários de teste
- `Support`: Arquivos de estrutura do projeto
  - `Elements`: Mapeamento dos elementos de cada tela
  - `Fixtures`: Arquivos de configuração de dados
  - `Pages`: Lógica utilizada para realizar ações nos testes
