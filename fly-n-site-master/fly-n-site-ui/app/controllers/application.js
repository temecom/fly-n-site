import Ember from 'ember';

export default Ember.Controller.extend({
	collapsed: false,
	actions: {
		toggle: function() {
			this.set('collapsed', !this.get('collapsed'));
		}
	}
});
