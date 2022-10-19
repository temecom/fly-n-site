import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class GroupTopicsComponent extends Component {
  @tracked
  classNames = ["card", "mb-4"];
  @tracked
  chatRooms = [];
}
