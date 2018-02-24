import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		siteSelected: function(site) {
			this.showSiteModal(site);
		},
		newSite: function() {
			var self = this;
			var site = this.store.createRecord('site');
			site.save()
			.then(function(site){
				self.showSiteModal(site);		
			});
		},
		saveSite: function() {
			var site = this.get('model.site');
			if (site.save) {
				site.save();
			} else {
			
				site.then(function(site){
					site.save();
				});
			}
			
		}
	},
	/**
	 * Pop the site modal
	 */
	showSiteModal(site) {
		var self = this;
		self.set('model.site',site);
		Ember.$("#siteModal").modal();
	}
});
