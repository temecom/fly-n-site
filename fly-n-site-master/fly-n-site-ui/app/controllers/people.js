import Controller from "@ember/controller";
import { action } from "@ember/object";
/**
 * Controller for People
 */
export default class People extends Controller {
  // Actions
  @action personSelected(person) {
    this.transitionToRoute("person", person.get("id"));
  }
  @action newPerson() {
    var self = this;
    var person = this.store.createRecord("person", {
      givenName: "New",
      surName: "Person",
    });
    person.save().then(function (person) {
      self.transitionToRoute("person", person.get("id"));
    });
  }
  @action countrySelected(countryName) {
    //this.sendAction("countrySelected", countryName);
  }
}
