import Page from "./page";
import routes from "../../data/routes";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('[formcontrolname="login"]');
  }
  get inputPassword() {
    return $('[formcontrolname="password"]');
  }
  get labelErrorSignIn() {
    return $(".error-message");
  }
  get btnSignIn() {
    return $(".login__button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSignIn.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    super.open(routes.admin);
  }

  /**
   * Method to sign in by setting a cookie
   */
  setAccessTokenCookie(token){
    this.open();
    browser.setCookies({
      name: "access_token",
      value: token,
      domain: ".dotcms.com",
    });
  }
}

export default new LoginPage();
