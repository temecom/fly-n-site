import Controller from '@ember/controller';
export default Controller.extend({

	actions: {
		membershipSelected: function(membership) {
			this.transitionToRoute("membership", membership.get('id'));
		}, 
		newMembership: function() {
			var self = this;
			var membership = this.store.createRecord('membership');
			membership.save()
			.then(function(membership){
				self.transitionToRoute("membership", membership);
			});
		},
		saveMembership: function() {
			var membership = this.get('model.membership');
			if (membership.save) {
				membership.save();
			} else {
				membership.then(function(membership){
					membership.save();
				});
			}
			
		},
		countrySelected: function(countryName) {
			this.sendAction('countrySelected', countryName);
		}
	}
});
