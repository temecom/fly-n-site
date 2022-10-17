import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
export default class Windgram extends Component {
  @tracked
  key = null;
  @tracked
  futureDays = 0;
  @action
  futureDaysTag() {
    var futureDays = this.futureDays;
    if (futureDays === 0) {
      return "";
    } else {
      return "+" + futureDays;
    }
  }
}
