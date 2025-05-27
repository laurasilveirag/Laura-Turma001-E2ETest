import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

const BASE_URL = 'https://www.automationexercise.com/';

interface UserCredentials {
  email: string;
  password_hash: string;
}

const testUser: UserCredentials = {
  email: 'laur22222a@gmail.com',
  password_hash: '12345678'
};

// ZeroStep AI: Cenário 01 - Login de Usuário Bem-Sucedido
test('ZeroStep AI: Scenario 01 - Successful User Login', async ({ page }) => {
  const aiArgs = { page, test };

  await page.goto(BASE_URL);

  await ai('Click on the link with exact text " Signup / Login"', aiArgs);

  await ai('Verify that the text "Login to your account" is visible', aiArgs);
  await ai(
    `Fill in the "Email Address" field within the login form with "${testUser.email}"`,
    aiArgs
  );
  await ai(
    `Fill in the "Password" field within the login form with "${testUser.password_hash}"`,
    aiArgs
  );
  await ai('Click the "Login" button in the login form', aiArgs);

  await expect(page).toHaveURL(new RegExp(`${BASE_URL}/?`));
  await ai(
    'Verify that text containing "Logged in as" is visible in the header',
    aiArgs
  );
  await ai('Verify that a "Logout" link is visible in the header', aiArgs);
  await ai(
    'Verify that a "Delete Account" link is visible in the header',
    aiArgs
  );
});
