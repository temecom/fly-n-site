import RSVP from "rsvp";
import Route from "@ember/routing/route";
export default class PeopleRoute extends Route {
  model() {
    return RSVP.hash({
      people: this.store.findAll("person"),
    }).then(function (hash) {
      return hash;
    });
  }
}
