import { Page } from '@playwright/test';
import { LoginPageElements } from '../elements/LoginPageElements';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private elements: LoginPageElements;

  constructor(page: Page) {
    super(page);
    this.elements = new LoginPageElements(page);
  }

  async fillEmail(email: string): Promise<void> {
    await this.elements.loginEmailInput.click(); // Clique para focar, como no snippet
    await this.elements.loginEmailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.elements.loginPasswordInput.click(); // Clique para focar, como no snippet
    await this.elements.loginPasswordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.elements.loginButton.click();
  }

  async loginAs(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }
}
