import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		clubSelected: function(club) {
			this.showClubModal(club);
		},
		newClub: function() {
			var self = this;
			var club = this.store.createRecord('club');
			club.save()
			.then(function(club){
				self.showClubModal(club);		
			});
		},
		saveClub: function() {
			var club = this.get('model.club');
			if (club.save) {
				club.save();
			} else {
			
				club.then(function(club){
					club.save();
				});
			}
			
		},
		/**
		 * Pop the address modal
		 */
		showAddressModal() {
			var club = this.get('model.club');
			if (!club.get('postalAddress.id')) {
				this.store.createRecord('postalAddress').save()
				.then(function(postalAddress){
					club.set('postalAddress', postalAddress);
					return club.save();
				})
				.then(function() {
					Ember.$("#addressModal").modal();
				});
			} else {
				Ember.$("#addressModal").modal();
			}
		},
		countrySelected: function(countryName) {
			this.sendAction('countrySelected', countryName);
		}
	},
	/**
	 * Pop the club modal
	 */
	showClubModal(club) {
		var self = this;
		self.set('model.club',club);
		Ember.$("#clubModal").modal();
	}
});
