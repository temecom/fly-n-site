//app/models/phone

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Phone
*/

import DS from 'ember-data';
var ContactMethod = require('ContactMethod');

export default DS.Model.extend({

    number: DS.attr('string'),
    country: undefined


});
