import RSVP from 'rsvp';
import Route from '@ember/routing/route';
export default Route.extend({

	model: function(parameters) {
		return RSVP.hash ({
			membership:this.store.findRecord('membership', parameters.id), 
			clubs: this.store.findAll('club'),
			people: this.store.findAll('person')
		})
		.then(function(hash){
			return hash; 
		});
	}
});
