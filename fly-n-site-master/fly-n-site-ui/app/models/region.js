//app/models/region

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Region
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({

    country: DS.belongsTo('country',{async:true}),
    code: DS.attr('string')


});
