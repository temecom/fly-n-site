//app/models/club

/*
* (C)  Copyright 2017,  FlynSite
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Club
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({

	emailAddress: DS.attr('string'),
	webSiteUrl: DS.attr('string'),
	facebookPage: DS.attr('string'),
    memberships: DS.hasMany('membership',{async:true}),
    postalAddress: DS.belongsTo('postalAddress')
});
