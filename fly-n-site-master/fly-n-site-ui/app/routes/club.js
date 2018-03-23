import RSVP from 'rsvp';
import Route from '@ember/routing/route';
export default Route.extend({

	model: function(parameters) {
		return RSVP.hash ({
			club:this.store.findRecord('club', parameters.id)
		});
	}
});
