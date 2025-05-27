import { Page } from '@playwright/test';
import { CartPageElements } from '../elements/CartPageElements';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private elements: CartPageElements;

  constructor(page: Page) {
    super(page);
    this.elements = new CartPageElements(page);
  }

  async clickProceedToCheckout(): Promise<void> {
    await this.elements.proceedToCheckoutButton.click();
  }

  async clickFirstPrice(): Promise<void> {
    await this.elements.firstPriceText.click();
  }

  async clickSecondPrice(): Promise<void> {
    await this.elements.secondPriceText.click();
  }

  async clickDescriptionCell(): Promise<void> {
    await this.elements.descriptionCell.click();
  }
}
