import { Page } from '@playwright/test';
import { CommonElements } from '../elements/CommonElements';
import { BasePage } from './BasePage';

export class CommonPage extends BasePage {
  private elements: CommonElements;

  constructor(page: Page) {
    super(page);
    this.elements = new CommonElements(page);
  }

  async clickSignupLogin(): Promise<void> {
    await this.elements.signupLoginLink.click();
  }

  async clickModalViewCart(): Promise<void> {
    await this.elements.productAddedModalViewCartLink.click();
  }
}
