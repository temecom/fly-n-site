import Ember from "ember";
import { hash as rsvpHash } from "rsvp";
export default Ember.Controller.extend({
  selectedMembership: null,
  actions: {
    save: function () {
      var person = this.get("model.person");
      if (person.save) {
        person.save();
      } else {
        person.then(function (person) {
          person.save();
        });
      }
    },
    saveMembership: function () {
      //TODO: complete
    },

    membershipSelected: function (membership) {
      this.set("selectedMembership", membership);
    },
    saveAddress: function () {},
    countrySelected: function (country) {
      var person = this.person;
      var postalAddress = person.get("postalAddress");
      postalAddress.set("country", country);
      postalAddress.save();
    },
    /**
     * Create a new membership
     */
    newMembership: function () {
      var person = this.get("model.person");
      this.store
        .createRecord("membership", {
          name: "New Membership for " + this.get("model.person.name"),
        })
        .save()
        .then(function (membership) {
          membership.set("person", person);
          return rsvpHash({
            memberships: person.get("memberships"),
            membership: membership.save(),
          });
        })
        .then(function (hash) {
          hash.memberships.pushObject(hash.membership);
          hash.memberships.save();
        });
    },
  },
});
