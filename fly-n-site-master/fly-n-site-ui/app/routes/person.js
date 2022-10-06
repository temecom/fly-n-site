import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default Route.extend({
  model: function (parameters) {
    return RSVP.hash({
      person: this.store.findRecord("person", parameters.id),
    }).then(function (hash) {
      return hash;
    });
  },
});
