import { Page } from '@playwright/test';
import { OrderPlacedPageElements } from '../elements/OrderPlacedPageElements';
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class OrderPlacedPage extends BasePage {
  private elements: OrderPlacedPageElements;

  constructor(page: Page) {
    super(page);
    this.elements = new OrderPlacedPageElements(page);
  }

  async clickContinue(): Promise<void> {
    await this.elements.continueButton.click();
  }

  async verifyContinueButtonIsVisible(): Promise<void> {
    await expect(this.elements.continueButton).toBeVisible();
  }
}
