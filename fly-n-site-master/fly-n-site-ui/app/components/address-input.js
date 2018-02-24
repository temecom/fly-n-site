import Ember from 'ember';

export default Ember.Component.extend({
	countryName: null, 
	actions: {
		
		countrySelected: function(countryName) {
			this.sendAction('countrySelected', countryName);
		}
	},
	countryNames: Ember.computed('countries', function(){
		return this.get('countries').map(function(country){return country.name;});
	})
});
