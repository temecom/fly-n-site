import Controller from "@ember/controller";
export default Controller.extend({
  actions: {
    personSelected: function (person) {
      this.transitionToRoute("person", person.get("id"));
    },
    newPerson: function () {
      var self = this;
      var person = this.store.createRecord("person", {
        givenName: "New",
        surName: "Person",
      });
      person.save().then(function (person) {
        self.transitionToRoute("person", person.get("id"));
      });
    },
    countrySelected: function (countryName) {
      this.sendAction("countrySelected", countryName);
    },
  },
});
