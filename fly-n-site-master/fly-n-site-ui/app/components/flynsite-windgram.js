import Ember from 'ember';
import {computed} from '@ember/object';
export default Ember.Component.extend({
  key: null,
  futureDays: 0,
  futureDaysTag: computed('futureDays',  function() {
    var futureDays = this.get('futureDays');
    if (futureDays === 0) {
      return '';
    } else {
      return '+' + futureDays;
    }
  })
});
