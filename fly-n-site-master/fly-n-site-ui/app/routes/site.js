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
				model.siteMarker = model.map.get('siteMarker');
			}
			return rsvpHash (model);
		})
		.then(function(model){
			if (model.siteMarker) {
				model.siteMarkerLocation = model.siteMarker.get('location');
			}
			if (model.markers) {
				model.locations = model.markers.map(function(marker){
					return marker.get('location');
				});
			}
			return rsvpHash (model);
		})
		.then(function(model){
			return model;
		});
	}
});
