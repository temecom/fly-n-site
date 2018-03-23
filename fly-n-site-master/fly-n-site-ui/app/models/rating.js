//app/models/rating

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Rating
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({

    issued: DS.attr('date'),
    issuedBy: DS.belongsTo('instructor',{async:true})


});
