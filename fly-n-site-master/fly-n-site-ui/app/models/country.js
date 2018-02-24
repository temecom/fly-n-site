//app/models/country

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Country
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({
    code: DS.attr('string'),
    phoneCode: DS.attr('string')
});
