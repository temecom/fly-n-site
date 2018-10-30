import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		siteSelected: function(site) {
			this.transitionToRoute("site", site.get('id'));
		},
		newSite: function() {
			var self = this;
			var site = this.store.createRecord('site', {name:"New Site - " + this.get('model.sites.length')});
			site.save()
			.then(function(site){
				self.transitionToRoute('site', site.get('id'));
			});
		}
	}
});
