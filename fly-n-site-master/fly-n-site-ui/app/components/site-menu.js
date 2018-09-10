import Ember from 'ember';

export default Ember.Component.extend({
  site: null,
  save: null,
  newMap: null,
  newMarker: null,
  actions: {
    save: function() {
      this.get('save')();
    },
    newMap: function() {
      this.get('newMap')();
    },
    newMarker: function(type) {
      this.get('newMarker')(type);
    }
  }
});
