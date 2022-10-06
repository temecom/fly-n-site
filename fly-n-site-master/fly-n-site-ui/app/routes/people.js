import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default Route.extend({
  model: function () {
    return RSVP.hash({
      people: this.store.findAll("person"),
    }).then(function (hash) {
      return hash;
    });
  },
});
