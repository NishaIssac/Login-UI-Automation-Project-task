import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('User should be able to login with valid credentials', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  const loginPage = new LoginPage(page);
  await loginPage.loginMethod();
   const welcomeMessage = page.locator('.subheader').first();
  await expect(welcomeMessage).toContainText("Welcome to the Secure Area. When you are done click logout below."); 
  const secureMessage = page.locator('#flash').first();
  await expect(secureMessage).toBeVisible();
  await expect(secureMessage).toContainText("You logged into a secure area!"); 
});