import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pages/HomePage';
import { DeliverPage } from '../support/pages/DeliverPage';

const BUGER_EATS_BASE_URL = 'https://buger-eats.vercel.app/';

// Dados para Cenário 01
const entregadorAna = {
  nome: 'Ana',
  cpf: '22233344455',
  email: 'ana@gamil.com', // Mantendo o "gamil.com" como no seu script
  whatsapp: '48999516263',
  cep: '11122233344', // CEP de 11 dígitos como no seu script
  numero: '236',
  complemento: 'apto 306',
  cnhFixturePath: 'src/support/fixtures/cnh_testes.jpg' // Assegure que este arquivo exista
};

// Dados para Cenário 02
const entregadorJessica = {
  nome: 'jessica',
  cpf: '44477788899',
  email: 'jessica' // E-mail inválido como no seu script
};

test.describe('Cadastro de Entregadores Buger Eats', () => {
  let homePage: HomePage;
  let deliverPage: DeliverPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    deliverPage = new DeliverPage(page);
    await homePage.goToBaseUrl(BUGER_EATS_BASE_URL);
    await homePage.navigateToRegistrationPage();
  });

  test('Cenário 01: Cadastro de entregador com sucesso', async ({ page }) => {
    await deliverPage.fillNomeCompleto(entregadorAna.nome);
    await deliverPage.pressTabAfterNomeCompleto();
    await deliverPage.fillCpf(entregadorAna.cpf);
    await deliverPage.pressTabAfterCpf();
    await deliverPage.fillEmail(entregadorAna.email);
    await deliverPage.pressTabAfterEmail();
    await deliverPage.fillWhatsapp(entregadorAna.whatsapp);

    await deliverPage.fillCep(entregadorAna.cep);
    await deliverPage.fillNumero(entregadorAna.numero);
    await deliverPage.fillComplemento(entregadorAna.complemento);

    await deliverPage.selectMetodoEntregaMoto();
    await deliverPage.uploadCnh(entregadorAna.cnhFixturePath);

    await deliverPage.submitForm();
    await deliverPage.closeSuccessModal();
  });

  test('Cenário 02: Tentativa de cadastro com dados inválidos/incompletos', async ({
    page
  }) => {
    await deliverPage.elements.inputNomeCompleto.click(); // Interação direta do seu script
    await deliverPage.fillNomeCompleto(entregadorJessica.nome); // Reutiliza método, mas a primeira linha do seu script tem click antes
    await deliverPage.pressTabAfterNomeCompleto();
    await deliverPage.fillCpf(entregadorJessica.cpf);
    await deliverPage.pressTabAfterCpf();
    await deliverPage.fillEmail(entregadorJessica.email);

    await deliverPage.selectMetodoEntregaBicicleta();
    await deliverPage.submitForm();

    await deliverPage.clickValidationTextBlockScenario2();
  });
});
