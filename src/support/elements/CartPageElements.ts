import { Page, Locator } from '@playwright/test';

export class CartPageElements {
  readonly page: Page;
  readonly firstPriceText: Locator; // Corresponde a page.getByText('Rs.').first()
  readonly secondPriceText: Locator; // Corresponde a page.getByText('Rs.').nth(1)
  readonly descriptionCell: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstPriceText = page.getByText('Rs.').first();
    this.secondPriceText = page.getByText('Rs.').nth(1);
    this.descriptionCell = page.getByRole('cell', { name: 'Description' });
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }
}
