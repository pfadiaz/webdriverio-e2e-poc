/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   */
  async open(path) {
    browser.url(path);
    browser.waitUntil(() => {
      const status = browser.execute("return document.readyState");
      return status === "complete";
    });
  }
}
