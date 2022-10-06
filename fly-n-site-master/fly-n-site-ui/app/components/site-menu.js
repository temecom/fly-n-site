import Component from "@glimmer/component";
import { action } from "@ember/object";
/**
 * Site list
 */
export default class SiteMenuComponent extends Component {
  site = null;
  save = null;
  newMap = null;
  newMarker = null;
  @action
  save() {
    this.save();
  }
  newMap() {
    this.newMap();
  }
  newMarker(type) {
    this.newMarker(type);
  }
}
