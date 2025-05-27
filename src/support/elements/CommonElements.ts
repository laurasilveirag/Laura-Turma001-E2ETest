import { Page, Locator } from '@playwright/test';

export class CommonElements {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly productAddedModalViewCartLink: Locator;
  readonly loggedInAsText: (username: string) => Locator; // Exemplo, se precisar verificar
  readonly logoutLink: Locator; // Exemplo

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.productAddedModalViewCartLink = page.getByRole('link', {
      name: 'View Cart'
    });
  }
}
