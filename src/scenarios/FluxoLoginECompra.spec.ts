import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { HomePage } from '../support/pages/HomePage';
import { CommonPage } from '../support/pages/CommonPage';
import { CartPage } from '../support/pages/CartPage';
import { CheckoutPage } from '../support/pages/CheckoutPage';
import { PaymentPage } from '../support/pages/PaymentPage';
import { OrderPlacedPage } from '../support/pages/OrderPlacedPage';

const BASE_URL = 'https://www.automationexercise.com/';

interface UserCredentials {
  email: string;
  password_hash: string;
}

interface PaymentDetails {
  nameOnCard: string;
  cardNumber?: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

const testUser: UserCredentials = {
  email: 'laur22222a@gmail.com',
  password_hash: '12345678'
};

const paymentDetailsScenario02: PaymentDetails = {
  nameOnCard: 'laura silveira',
  cardNumber: '1111222233334444',
  cvc: '311',
  expiryMonth: '08',
  expiryYear: '2027'
};

const paymentDetailsScenario03: PaymentDetails = {
  nameOnCard: 'laura',
  cvc: '311',
  expiryMonth: '08',
  expiryYear: '2027'
};

const checkoutComment = 'ligar na hora da entrega';

// Cenário 01: Login de Usuário Bem-Sucedido
test('Cenário 01: Login de Usuário Bem-Sucedido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const commonPage = new CommonPage(page);

  await page.goto(BASE_URL);
  await commonPage.clickSignupLogin();
  await loginPage.fillEmail(testUser.email);
  await loginPage.fillPassword(testUser.password_hash);
  await loginPage.clickLoginButton();
});

// Cenário 02: Compra bem-sucedida de um produto único por um usuário logado
test('Cenário 02: Compra bem-sucedida de um produto único por um usuário logado', async ({
  page
}) => {
  const loginPage = new LoginPage(page);
  const commonPage = new CommonPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const orderPlacedPage = new OrderPlacedPage(page);

  await page.goto(BASE_URL);
  await commonPage.clickSignupLogin();
  await loginPage.loginAs(testUser.email, testUser.password_hash);

  await homePage.addFirstProductToCart();
  await commonPage.clickModalViewCart();

  await cartPage.clickSecondPrice();
  await cartPage.clickFirstPrice();
  await cartPage.clickDescriptionCell();
  await cartPage.clickProceedToCheckout();

  await checkoutPage.clickDeliveryAddressHeading();
  await checkoutPage.fillComment(checkoutComment);
  await checkoutPage.clickPlaceOrder();

  await paymentPage.cleanAndFillNameOnCard(paymentDetailsScenario02.nameOnCard);
  if (paymentDetailsScenario02.cardNumber) {
    await paymentPage.fillCardNumber(paymentDetailsScenario02.cardNumber);
  }
  await paymentPage.fillCvc(paymentDetailsScenario02.cvc);
  await paymentPage.fillExpiryMonth(paymentDetailsScenario02.expiryMonth);

  await paymentPage.fillExpiryYear(paymentDetailsScenario02.expiryYear);
  await paymentPage.clickPayAndConfirmOrder();

  await orderPlacedPage.verifyContinueButtonIsVisible();
  await orderPlacedPage.clickContinue();
});

// Cenário 03: Tentativa de Pagamento com Número do Cartão Ausente
test('Cenário 03: Tentativa de Pagamento com Número do Cartão Ausente', async ({
  page
}) => {
  const loginPage = new LoginPage(page);
  const commonPage = new CommonPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  await page.goto(BASE_URL);
  await commonPage.clickSignupLogin();
  await loginPage.loginAs(testUser.email, testUser.password_hash);

  await homePage.addFourthProductToCart();
  await commonPage.clickModalViewCart();
  await cartPage.clickProceedToCheckout();
  await checkoutPage.clickPlaceOrder();

  await paymentPage.fillNameOnCard(paymentDetailsScenario03.nameOnCard);
  await paymentPage.fillCvc(paymentDetailsScenario03.cvc);
  await paymentPage.fillExpiryMonth(paymentDetailsScenario03.expiryMonth);
  await paymentPage.fillExpiryYear(paymentDetailsScenario03.expiryYear);
  await paymentPage.clickPayAndConfirmOrder();
});
