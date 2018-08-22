import Route from '@ember/routing/route';
import { hash as rsvpHash} from 'rsvp';
export default Route.extend({
	model: function(parameters) {
		return this.store.findRecord('site', parameters.id)
		.then(function(site){
			var model = {};
			model.site=site;
			model.map=site.get('map');
			return rsvpHash (model);
		})
		.then(function(model){
			if (model.map) {
				model.markers = model.map.get('markers');
			}
			return rsvpHash (model);
		})
		.then(function(model){
			if (model.markers) {
				model.locations = model.markers.map(function(marker){
					return marker.get('location');
				});
			}
			return model;
		});
	}
});
