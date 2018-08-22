//app/models/map

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
	zoomLevel: DS.attr('number'),
	mapTypeId: DS.attr('string'), 
    description: DS.attr('string'),
    markers: DS.hasMany('MapMarker'), 
    siteMarker: DS.belongsTo('MapMarker')
});