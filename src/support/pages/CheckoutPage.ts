import { Page } from '@playwright/test';
import { CheckoutPageElements } from '../elements/CheckoutPageElements';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private elements: CheckoutPageElements;

  constructor(page: Page) {
    super(page);
    this.elements = new CheckoutPageElements(page);
  }

  async clickDeliveryAddressHeading(): Promise<void> {
    await this.elements.deliveryAddressHeading.click();
  }

  async fillComment(comment: string): Promise<void> {
    await this.elements.commentTextArea.click();
    await this.elements.commentTextArea.fill(comment);
  }

  async clickPlaceOrder(): Promise<void> {
    await this.elements.placeOrderLink.click();
  }
}
