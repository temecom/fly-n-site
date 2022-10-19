import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class EntityListComponent extends Component {
  @tracked
  title = "Title";
  @tracked
  newEntity;
  @tracked
  selectedItem;
  @tracked
  items;

  @action
  itemSelected(selectedItem) {
    this.selectedItem = selectedItem;
  }
  @action
  createNewEntity() {
    this.newEntity = {};
  }
}
