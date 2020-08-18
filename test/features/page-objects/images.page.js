import Page from "./page";
import routes from "../../data/routes";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ImagesPage extends Page {
  /**
   * define selectors using getter methods
   */
  get iFrameMainImages() { return $("<iFrame />"); }
  get linkImage() { return $("*=whitetip"); }

  /**
   * define aliases to selector to keep
   * BDD user friendly
   */
  elements() { return { grid: this.btnGridView }; }

  /**
   * overwrite specifc options to adapt it to page object
   * in this case the dashboard page
   */

  open() {
    super.open(`${routes.admin}${routes.media.images}`);
  }
}

export default new ImagesPage();
