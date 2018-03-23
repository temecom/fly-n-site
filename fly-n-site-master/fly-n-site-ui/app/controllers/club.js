import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			var club = this.get('model.club');
			if (club.save) {
				club.save();
			} else {
			
				club.then(function(club){
					club.save();
				});
			}
			
		},
		saveAddress: function() {
			
		},
		countrySelected: function(country) {
			var club = this.get('club'); 
			var postalAddress = club.get('postalAddress');
			postalAddress.set('country', country);
			postalAddress.save();
		}
	}
});
