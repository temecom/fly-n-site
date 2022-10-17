import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default class PersonRoute extends Route {
  model(parameters) {
    return RSVP.hash({
      person: this.store.findRecord("person", parameters.id),
    }).then(function (hash) {
      return hash;
    });
  }
}
