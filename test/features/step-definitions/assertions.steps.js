import { Then } from "cucumber";
import LoginPage from "../page-objects/login.page";
import routes from "../../data/routes";

Then(/^I should see a flash message saying (.*)$/, (message) => {
  expect(LoginPage.labelErrorSignIn).toBeExisting();
  expect(LoginPage.labelErrorSignIn).toHaveTextContaining(message);
});

Then(/^I should see the (.*) page$/, (page) => {
  browser.waitUntil(() =>  browser.getUrl() === (`${routes.baseURL}${routes.admin}${routes[page][page]}`));
});
