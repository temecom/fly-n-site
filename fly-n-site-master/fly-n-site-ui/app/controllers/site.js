import Ember from 'ember';
const DEGREES_PER_METER = 1/111319.9;
const MARKER_OFFSET = DEGREES_PER_METER * 100;
import { hash as rsvpHash} from 'rsvp';
import swal from 'npm:sweetalert2';
export default Ember.Controller.extend({
	markerEditorVisible: false,
	marker: null,
	actions: {
		save: function() {
			var site = this.get('model.site');
			if (site.save) {
				site.save();
			} else {

				site.then(function(site){
					site.save();
				});
			}
		},
		/**
		 * Set the marker location to the dragged position
		 */
		dragEnd: function(mouseEvent) {
			var latitude = mouseEvent.target.internalPosition.lat();
			var longitude = mouseEvent.target.internalPosition.lng();
			var label = mouseEvent.target.getLabel();
			var markers = this.get('model.site.map.markers');
			var marker = markers.find(function(item){
				return item.get('name') === label;
			});
			if (marker) {
				marker.get('location')
				.then(function(location){
				location.set('latitude', latitude);
				location.set('longitude', longitude);
				location.save();
			});
			}
		},
		newMarker:function() {
			var self = this;
			var site = this.get('model.site');
			var map = this.get('model.map');
			var siteMarker = map.get('siteMarker');
			var markers = map.get('markers');
			var nextIndex = markers.get('length') + 1;

			this.store.createRecord('location',
					{
						name:site.get('name') + 'Location' + nextIndex,
						latitude:MARKER_OFFSET + siteMarker.get('location.latitude'),
						longitude: MARKER_OFFSET + siteMarker.get('location.longitude')
					}).save()
			.then(function(location) {

				return rsvpHash({
					marker: self.store.createRecord('mapMarker',
							{
								name: site.get('name') + 'Marker' + nextIndex
							}).save(),
					location: location
				});
			})

			.then(function(hash){
				hash.marker.set('location', hash.location);
				return hash.marker.save();
			})
			.then (function(marker){
				map.get('markers').pushObject(marker);
				map.save();
			});
		},		/**
				* Save the marker after modal edit
				*/
				saveMarker: function(formValues) {
					// Update the marker
					var marker = this.get('marker');
					marker.set('name', formValues.name);
				},

				showMarkerEditor: function(marker) {
					var inputValue = marker.title;
					swal({
					  title: 'Enter the marker title',
					  input: 'text',
					  inputValue: inputValue,
					  showCancelButton: true,
					  inputValidator: (value) => {
					    return !value && 'You need to write something!'
					  }
					})
					.then(function(results){
						marker.name=results;
					});
				}

	}


});
