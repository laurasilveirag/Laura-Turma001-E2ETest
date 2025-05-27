import { Page, Locator } from '@playwright/test';

export class CheckoutPageElements {
  readonly page: Page;
  readonly deliveryAddressHeading: Locator;
  readonly commentTextArea: Locator;
  readonly placeOrderLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deliveryAddressHeading = page.getByRole('heading', {
      name: 'Your delivery address'
    });
    this.commentTextArea = page.locator('textarea[name="message"]');
    this.placeOrderLink = page.getByRole('link', { name: 'Place Order' });
  }
}
