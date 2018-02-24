import Ember from 'ember';

export default Ember.Route.extend({
	 
	model: function(parameters) {
		return {
			club:this.store.findRecord('club', parameters.id)
			};
	}
});
