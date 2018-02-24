//app/models/organization

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Organization
*/

import DS from 'ember-data';
import FlynSiteEntity from 'flyn-site-entity';

export default DS.Model.extend({

    mainContact: DS.belongsTo('person',{async:true}),
    postalAddress: DS.belongsTo('postalAddress',{async:true}),
    country: DS.belongsTo('country',{async:true})


});
