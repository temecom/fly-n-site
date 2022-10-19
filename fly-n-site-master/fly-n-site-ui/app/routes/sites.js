import Route from "@ember/routing/route";
import { service } from "@ember/service";
import RSVP from "rsvp";
export default class SitesRoute extends Route {
  @service store;
  model() {
    return RSVP.hash({
      sites: this.store.findAll("site"),
      countries: this.store.findAll("country"),
    });
  }
}
