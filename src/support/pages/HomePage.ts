import { Page, Locator } from '@playwright/test';
import { HomePageElements } from '../elements/HomePageElements';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private elements: HomePageElements;
  private firstProductWrapperToHover: Locator;
  private fourthProductWrapperToHover: Locator;

  constructor(page: Page) {
    super(page);
    this.elements = new HomePageElements(page);
    this.firstProductWrapperToHover = page
      .locator('.features_items .product-image-wrapper')
      .first();

    this.fourthProductWrapperToHover = page
      .locator('div:nth-child(4) > .product-image-wrapper')
      .first();
  }

  async addFirstProductToCart(): Promise<void> {
    await this.firstProductWrapperToHover.hover();
    await this.page.waitForTimeout(500);
    await this.elements.firstProductOverlayAddToCartButton.click();
  }

  async addFourthProductToCart(): Promise<void> {
    await this.fourthProductWrapperToHover.hover();

    await this.elements.fourthProductImageWrapperAddToCartButton.click();
  }
}
