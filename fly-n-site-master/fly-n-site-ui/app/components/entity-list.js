import Ember from "ember";

export default Ember.Component.extend({
  newEntity: null,
  item: null,
  actions: {
    itemSelected: function (item) {
      this.set("item", item);
      this.itemSelected(item);
    },
    newEntity: function () {
      this.newEntity();
    },
  },
});
