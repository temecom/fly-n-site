import Controller from "@ember/controller";
export default Controller.extend({
  actions: {
    clubSelected: function (club) {
      this.transitionToRoute("club", club.get("id"));
    },
    newClub: function () {
      var self = this;
      var club = this.store.createRecord("club");
      club.save().then(function (club) {
        self.transitionToRoute("club", club.get("id"));
      });
    },
    saveClub: function () {
      var club = this.get("model.club");
      if (club.save) {
        club.save();
      } else {
        club.then(function (club) {
          club.save();
        });
      }
    },
    countrySelected: function (countryName) {
      this.sendAction("countrySelected", countryName);
    },
  },
});
