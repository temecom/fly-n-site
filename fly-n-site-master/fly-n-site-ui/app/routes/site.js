import Route from "@ember/routing/route";
import { service } from "@ember/service";
import RSVP from "rsvp";
export default class extends Route {
  @service store;
  model(parameters) {
    return RSVP.hash({
      site: this.store.findRecord("site", parameters.id),
    });
  }
}
