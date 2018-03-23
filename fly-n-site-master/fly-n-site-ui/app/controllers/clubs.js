import Controller from '@ember/controller';
export default Controller.extend({

	actions: {
		clubSelected: function(club) {
			this.transitionToRoute("club", club);
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
		countrySelected: function(countryName) {
			this.sendAction('countrySelected', countryName);
		}
	}
});
