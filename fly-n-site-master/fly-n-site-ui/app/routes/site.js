import Route from '@ember/routing/route';

import { hash } from 'rsvp';
export default Route.extend({
	model: function(parameters) {
		return hash ({
			site: this.store.findRecord('site', parameters.id)
		});
	}
});
