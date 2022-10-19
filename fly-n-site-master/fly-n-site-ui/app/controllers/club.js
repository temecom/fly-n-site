import Controller from "@ember/controller";
import { action } from "@ember/object";
import RSVP from "rsvp";

export default class Club extends Controller {
  selectedMembership = null;

  // Actions
  @action
  save() {
    var club = this.model.club;
    if (club.save) {
      club.save();
    } else {
      club.then(function (club) {
        club.save();
      });
    }
  }
  @action
  saveAddress() {}

  @action
  saveMembership() {
    //TODO: complete
  }

  /**
   * Create a new membership
   */
  @action
  newMembership() {
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

  @action
  membershipSelected(membership) {
    this.selectedMembership = membership;
  }
  @action
  countrySelected(country) {
    var club = this.club;
    var postalAddress = club.get("postalAddress");
    postalAddress.set("country", country);
    postalAddress.save();
  }
}
