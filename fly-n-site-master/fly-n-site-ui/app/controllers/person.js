import Controller from "@ember/controller";
import { action } from "@ember/object";
import RSVP from "rsvp";
export default class PersonController extends Controller {
  selectedMembership = null;
  // Actions
  @action save() {
    var person = this.model.person;
    if (person.save) {
      person.save();
    } else {
      person.then(function (person) {
        person.save();
      });
    }
  }
  @action saveMembership() {
    //TODO: complete
  }

  @action membershipSelected(membership) {
    this.selectedMembership = membership;
  }
  @action saveAddress() {}
  @action countrySelected(country) {
    var person = this.person;
    var postalAddress = person.get("postalAddress");
    postalAddress.set("country", country);
    postalAddress.save();
  }
  /**
   * Create a new membership
   */
  @action newMembership() {
    var person = this.model.person;
    this.store
      .createRecord("membership", {
        name: "New Membership for " + this.model.person.name,
      })
      .save()
      .then(function (membership) {
        membership.set("person", person);
        return RSVP.hash({
          memberships: person.get("memberships"),
          membership: membership.save(),
        });
      })
      .then(function (hash) {
        hash.memberships.pushObject(hash.membership);
        hash.memberships.save();
      });
  }
}
