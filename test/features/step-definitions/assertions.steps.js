import { Then } from "cucumber";
import LoginPage from "../page-objects/login.page";
import routes from "../../data/routes";

Then(/^I should see a flash message saying (.*)$/, (message) => {
  expect(LoginPage.labelErrorSignIn).toBeExisting();
  expect(LoginPage.labelErrorSignIn).toHaveTextContaining(message);
});

Then(/^I should see the (.*) page$/, (page) => {
  browser.waitUntil(() => {
    let url = browser.getUrl();
    return url === (`https://demo.dotcms.com/dotAdmin/#/c${routes[page][page]}`);
  });
});
