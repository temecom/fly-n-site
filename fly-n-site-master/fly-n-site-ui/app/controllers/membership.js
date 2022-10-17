import Controller from "@ember/controller";
import { action } from "@ember/object";

/**
 * Controller for Membership
 */
export default class MembershipController extends Controller {
  // Actions
  @action save() {
    var member = this.model.membership;
    if (member.save) {
      member.save();
    } else {
      member.then(function (member) {
        member.save();
      });
    }
  }
  @action clubSelected(club) {
    var member = this.model.membership;
    member.set("club", club);
  }
  @action personSelected(person) {
    var member = this.model.membership;
    member.set("person", person);
  }
  @action membershipSelected(membership) {
    this.selectedMembership = membership;
  }
}
