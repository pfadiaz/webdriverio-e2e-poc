import { Given, When, Then } from "cucumber";
import Pages from "../page-objects/index";
import tokenExchange from '../../utils/token-generator'

Given(/^I am on the (.*) page$/, function (page) {
  this.currentPage = Pages[page];
  this.currentPage.open();
});

When(/^I login with (.*) and (.*)$/, function (username, password) {
  this.currentPage.login(username, password);
});

Then(/^I navigate to the (.*) page$/, function (page) {
  this.currentPage = Pages[page];
  this.currentPage.open();
});

Then(/^I open the first image$/, function () {
  this.currentPage.iFrameMainImages.waitForExist();
  this.currentPage.iFrameMainImages.waitForEnabled();
  browser.switchToFrame(this.currentPage.iFrameMainImages);
  browser.waitUntil(() => {
    browser.switchToFrame(this.currentPage.iFrameMainImages);
    let loaded = this.currentPage.iFrameMainImages.getHTML("input");
    return loaded !== null;
  });
  this.currentPage.linkImage.waitForExist();
  this.currentPage.linkImage.click();
});

Then(/^I have an Admin user already signed in$/, function () {
  this.accessToken = browser.call(() => tokenExchange());
  Pages.Login.setAccessTokenCookie(this.accessToken);
});
