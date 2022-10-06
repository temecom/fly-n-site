import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default Route.extend({
  countryName: null,
  model: function () {
    return RSVP.hash({
      clubs: this.store.findAll("club"),
    }).then(function (hash) {
      return hash;
    });
  },
});
