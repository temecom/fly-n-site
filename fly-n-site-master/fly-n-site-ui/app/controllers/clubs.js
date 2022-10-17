import Controller from "@ember/controller";
import { action } from "@ember/object";

/**
 * Controller for Clubs
 */

export default class ClubController extends Controller {
  // Actions
  @action clubSelected(club) {
    this.transitionToRoute("club", club.get("id"));
  }
  @action newClub() {
    var self = this;
    var club = this.store.createRecord("club");
    club.save().then(function (club) {
      self.transitionToRoute("club", club.get("id"));
    });
  }
  @action saveClub() {
    var club = this.model.club;
    if (club.save) {
      club.save();
    } else {
      club.then(function (club) {
        club.save();
      });
    }
  }
  @action countrySelected(countryName) {
    //this.sendAction("countrySelected", countryName);
  }
}
