//app/models/map

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Site
*/
import { computed } from '@ember/object';
import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';
export default FlynSiteEntity.extend({
	zoomLevel: DS.attr('number'),
    description: DS.attr('string'),
    markers: DS.hasMany('MapMarker'), 
    siteMarker: computed('markers', function() {
    	var markers = this.get('markers'); 
    	if (markers) {
    		return markers.objectAt(0); 
    	} else {
    		return null; 
    	}
    })
});