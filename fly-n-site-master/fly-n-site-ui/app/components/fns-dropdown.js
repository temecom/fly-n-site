import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    itemSelected: function (item) {
      this.itemSelected(item);
    },
    newEntity: function () {
      this.sendAction("newEntity");
    },
  },
});
