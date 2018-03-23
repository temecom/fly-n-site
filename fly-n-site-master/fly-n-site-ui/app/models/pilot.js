//app/models/pilot

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Pilot
*/

import DS from 'ember-data';
import Person  from '../models/person';

export default Person.extend({

    ratings: undefined,
    homeSite: DS.belongsTo('site',{async:true})


});
