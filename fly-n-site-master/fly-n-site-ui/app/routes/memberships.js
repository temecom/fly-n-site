import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default class MenbershipsRoute extends Route {
  countryName = null;
  model() {
    return RSVP.hash({
      countries: this.store.findAll("country"),
      memberships: this.store.findAll("membership"),
    });
  }
}
