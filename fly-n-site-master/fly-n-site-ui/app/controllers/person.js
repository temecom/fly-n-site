import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			var person = this.get('model.person');
			if (person.save) {
				person.save();
			} else {
			
				person.then(function(person){
					person.save();
				});
			}
			
		},
		saveAddress: function() {
			
		},
		countrySelected: function(country) {
			var person = this.get('person'); 
			var postalAddress = person.get('postalAddress');
			postalAddress.set('country', country);
			postalAddress.save();
		}
	}
});
