import Ember from "ember";
import { hash as rsvpHash } from "rsvp";
export default Ember.Controller.extend({
  selectedMembership: null,
  actions: {
    save: function () {
      var club = this.get("model.club");
      if (club.save) {
        club.save();
      } else {
        club.then(function (club) {
          club.save();
        });
      }
    },
    saveAddress: function () {},

    saveMembership: function () {
      //TODO: complete
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

    membershipSelected: function (membership) {
      this.set("selectedMembership", membership);
    },
    countrySelected: function (country) {
      var club = this.club;
      var postalAddress = club.get("postalAddress");
      postalAddress.set("country", country);
      postalAddress.save();
    },
  },
});
