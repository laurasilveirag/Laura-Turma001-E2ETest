import { Page, Locator } from '@playwright/test'; // Adicionado Locator aqui
import { HomePageElements } from '../elements/HomePageElements';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private elements: HomePageElements;
  private firstProductWrapperToHover: Locator; // Adicionado para o hover

  constructor(page: Page) {
    super(page);
    this.elements = new HomePageElements(page);
    // Define um localizador para a "capa" do primeiro produto sobre a qual vamos passar o mouse
    // Isso geralmente é a div que contém a imagem e informações do produto.
    this.firstProductWrapperToHover = page
      .locator('.features_items .product-image-wrapper')
      .first();
  }

  async addFirstProductToCart(): Promise<void> {
    // 1. Passe o mouse sobre a capa do primeiro produto para ativar o overlay
    await this.firstProductWrapperToHover.hover();

    // 2. Adicione uma pequena espera (opcional, mas pode ajudar com transições CSS)
    //    para garantir que o overlay e o botão estejam totalmente visíveis.
    await this.page.waitForTimeout(500); // 500 milissegundos

    // 3. Clique no botão "Adicionar ao carrinho" que está no overlay
    await this.elements.firstProductOverlayAddToCartButton.click();
  }

  async addFourthProductToCart(): Promise<void> {
    // Se este método também usar um overlay, considere aplicar uma lógica similar de hover.
    // Por enquanto, mantendo o original:
    await this.elements.fourthProductImageWrapperAddToCartButton.click();
  }
}
