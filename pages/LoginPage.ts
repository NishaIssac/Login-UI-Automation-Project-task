import {Page} from '@playwright/test';

export class LoginPage{
constructor(private page : Page){}

//Locator Strings

//Input fields
userNameField : '#username';
passwordField : '#password';

//Buttons
//loginButton   : '.radius';
loginButton : '//*[@id="login"]/button/i';

//Other
welcomeMessage : '.subheader';
secureMessage : '#flash';

//Methods
async loginMethod(){
    const userNameField = this.page.locator('#username').first();
      await userNameField.click();
      await this.page.fill('#username', "tomsmith");
      const passwordField = this.page.locator('#password').first();
      await passwordField.click();
      await this.page.fill('#password',"SuperSecretPassword!");
      const loginButton = this.page.locator('//*[@id="login"]/button/i').first();
      await loginButton.click();
      this.page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept(); 
      });     
}   
}