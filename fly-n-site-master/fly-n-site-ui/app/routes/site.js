import Route from '@ember/routing/route';
import { hash } from 'rsvp';
export default Route.extend({
	model: function(parameters) {
		return hash ({
			site: this.store.findRecord('site', parameters.id)
		})
		.then(function(model){
			model.map=model.site.get('map');
			return hash (model);
		})
		.then(function(model){
			model.markers = model.map.get('markers');
			return hash (model);
		})
		.then(function(model){
			return hash (model);
		});
	}
});
