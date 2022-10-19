import Controller from "@ember/controller";
import { action } from "@ember/object";
/**
 * The controller for Sites
 */
export default class SitesController extends Controller {
  @action
  siteSelected(site) {
    this.transitionToRoute("site", site.get("id"));
  }

  @action
  newSite() {
    var self = this;
    var site = this.store.createRecord("site", {
      name: "New Site - " + this.model.sites.length,
    });
    site.save().then(function (site) {
      self.transitionToRoute("site", site.get("id"));
    });
  }
}
