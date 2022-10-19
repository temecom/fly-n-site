import RSVP from "rsvp";
import Route from "@ember/routing/route";
import { service } from "@ember/service";

export default class ClubsRoute extends Route {
  @service store;
  countryName = null;
  model() {
    return RSVP.hash({
      clubs: this.store.findAll("club"),
    }).then(function (hash) {
      return hash;
    });
  }
}
