import Ember from 'ember';

export default Ember.Controller.extend({
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
			
		}
	}
});
