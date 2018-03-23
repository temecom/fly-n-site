import Route from '@ember/routing/route';
export default Route.extend({
	model: function() {
		return {sites: this.store.findAll('site'), 
			countries: this.store.findAll('country')};
	}
});
