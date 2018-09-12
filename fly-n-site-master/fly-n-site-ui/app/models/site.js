//app/models/site

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Site
 */
import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';
export default FlynSiteEntity.extend({

	description: DS.attr('string'),
	/*
	* The site map
	*/
	map: DS.belongsTo('Map'),
	/*
	* Site regulations
	*/
	regulations: DS.hasMany('Regulation'),
	/*
	* The key to access the windgram
	*/
	windgramKey: DS.attr('string')
});
