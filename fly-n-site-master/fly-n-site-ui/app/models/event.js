import DS from 'ember-data';

import FlynSiteEntity from '../models/flyn-site-entity';
export default FlynSiteEntity.extend({

	startDateAndTime: DS.attr('date'),
	endDateAndTime: DS.attr('date'),
	location: DS.belongsTo('Location')
});
