import Ember from 'ember';

export default Ember.Route.extend({
	countryName: null,
	model: function() {
		return {clubs: this.store.findAll('club'), 
			countries: this.store.findAll('country')};
	}
});
