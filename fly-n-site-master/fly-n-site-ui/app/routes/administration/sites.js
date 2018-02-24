import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return {clubs: this.store.findAll('site'), 
			countries: this.store.findAll('country')};
	}
});
