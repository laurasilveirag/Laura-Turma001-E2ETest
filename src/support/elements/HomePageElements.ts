import { Page, Locator } from '@playwright/test';

export class HomePageElements {
  readonly page: Page;
  readonly firstProductOverlayAddToCartButton: Locator;
  readonly fourthProductImageWrapperAddToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProductOverlayAddToCartButton = page
      .locator('.overlay-content > .btn')
      .first();
    this.fourthProductImageWrapperAddToCartButton = page.locator(
      'div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    );
  }
}
