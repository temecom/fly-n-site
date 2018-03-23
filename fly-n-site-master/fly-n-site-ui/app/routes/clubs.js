import RSVP from 'rsvp';
import Route from '@ember/routing/route';
export default Route.extend({
	countryName: null,
	model: function() {
		return RSVP.hash({
			clubs: this.store.findAll('club'), 
			countries: this.store.findAll('country')
		});
	}
});
