import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
/**
 * Site menus
 */
export default class SiteMenuComponent extends Component {
  @tracked site = null;
  @tracked newMap = null;
  @tracked newMarker = null;
  @action
  save() {
    this.save();
  }
  @action
  createNewMap() {
    //
  }
  @action
  createNewMarker(type) {
    //
  }
}
