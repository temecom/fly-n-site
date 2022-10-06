import Ember from "ember";

export default Ember.Component.extend({
  saveMembership: null,
  actions: {
    save: function (item) {
      this.saveMembership(item);
    },
  },
});
