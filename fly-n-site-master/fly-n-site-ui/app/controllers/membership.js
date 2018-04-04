import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			var member = this.get('model.membership');
			if (member.save) {
				member.save();
			} else {
			
				member.then(function(member){
					member.save();
				});
			}
			
		},
		clubSelected: function(club) {
			var member = this.get('model.membership');
			member.set('club', club);
		},
		personSelected: function(person) {
			var member = this.get('model.membership');
			member.set('person', person);
		}
	}
});
