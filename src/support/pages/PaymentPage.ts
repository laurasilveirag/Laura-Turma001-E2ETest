import { Page } from '@playwright/test';
import { PaymentPageElements } from '../elements/PaymentPageElements';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {
  private elements: PaymentPageElements;

  constructor(page: Page) {
    super(page);
    this.elements = new PaymentPageElements(page);
  }

  async fillNameOnCard(name: string): Promise<void> {
    await this.elements.nameOnCardInput.click();
    await this.elements.nameOnCardInput.fill(name);
  }

  async fillCardNumber(cardNumber: string): Promise<void> {
    await this.elements.cardNumberInput.click();
    await this.elements.cardNumberInput.fill(cardNumber);
  }

  async cleanAndFillNameOnCard(name: string): Promise<void> {
    await this.elements.nameOnCardInput.dblclick();
    await this.elements.nameOnCardInput.fill(name);
  }

  async fillCvc(cvc: string): Promise<void> {
    await this.elements.cvcInput.click();
    await this.elements.cvcInput.fill(cvc);
  }

  async fillExpiryMonth(month: string): Promise<void> {
    await this.elements.expiryMonthInput.click();
    await this.elements.expiryMonthInput.fill(month);
  }

  async fillExpiryYear(year: string): Promise<void> {
    await this.elements.expiryYearInput.click();
    await this.elements.expiryYearInput.fill(year);
  }

  async clickPayAndConfirmOrder(): Promise<void> {
    await this.elements.payAndConfirmOrderButton.click();
  }

  async clickPaymentFormDivWithText(): Promise<void> {
    await this.elements.paymentFormDivWithText.click();
  }

  async clickExpirationLabelText(): Promise<void> {
    await this.elements.expirationLabelText.click();
  }
}
