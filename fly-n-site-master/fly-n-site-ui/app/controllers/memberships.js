import Controller from "@ember/controller";
import { action } from "@ember/object";
/**
 * Controller for Memberships
 */

export default class MembershipsController extends Controller {
  // Actions
  @action membershipSelected(membership) {
    this.transitionToRoute("membership", membership.get("id"));
  }
  @action newMembership() {
    var self = this;
    var membership = this.store.createRecord("membership");
    membership.save().then(function (membership) {
      self.transitionToRoute("membership", membership);
    });
  }
  @action saveMembership() {
    var membership = this.model.membership;
    if (membership.save) {
      membership.save();
    } else {
      membership.then(function (membership) {
        membership.save();
      });
    }
  }
  @action countrySelected(countryName) {
    //this.sendAction("countrySelected", countryName);
  }
}
