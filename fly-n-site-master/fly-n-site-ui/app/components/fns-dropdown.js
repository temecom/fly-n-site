import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		itemSelected: function(item) {
			this.get('itemSelected')(item);
		},
		newEntity: function() {
			this.sendAction('newEntity');
		}
	}
});
