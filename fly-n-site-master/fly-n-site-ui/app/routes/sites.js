import Route from "@ember/routing/route";
import { service } from "@ember/service";
import { hash } from "rsvp";
export default class SitesRoute extends Route {
  @service store;
  model() {
    return hash({
      sites: this.store.findAll("site"),
      countries: this.store.findAll("country"),
    });
  }
}
