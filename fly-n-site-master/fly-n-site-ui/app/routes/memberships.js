import RSVP from 'rsvp';
import Route from '@ember/routing/route';
export default Route.extend({
	countryName: null,
	model: function() {
		return RSVP.hash({
			countries: this.store.findAll('country'),
			memberships: this.store.findAll('membership')
		});
	}
});
