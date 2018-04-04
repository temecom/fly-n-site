import Route from '@ember/routing/route';

import { hash } from 'rsvp';
export default Route.extend({
	model: function() {
		return hash ({sites: this.store.findAll('site'), 
			countries: this.store.findAll('country')}
		);
	}
});
