import { Page, Locator } from '@playwright/test';

export class PaymentPageElements {
  readonly page: Page;
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmOrderButton: Locator;
  readonly paymentFormDivWithText: Locator;
  readonly expirationLabelText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.cvcInput = page.getByPlaceholder('ex.');
    this.expiryMonthInput = page.getByPlaceholder('MM');
    this.expiryYearInput = page.getByPlaceholder('YYYY');
    this.payAndConfirmOrderButton = page.getByRole('button', {
      name: 'Pay and Confirm Order'
    });
    this.paymentFormDivWithText = page
      .locator('div')
      .filter({ hasText: 'Name on Card Card Number CVC' })
      .nth(3);
    this.expirationLabelText = page.getByText('Expiration');
  }
}
