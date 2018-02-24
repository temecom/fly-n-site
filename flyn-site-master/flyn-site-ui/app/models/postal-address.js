//app/models/postaladdress

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: PostalAddress
*/

import DS from 'ember-data';
import ContactMethod from '../models/contact-method';

export default ContactMethod.extend({

    street: DS.attr('string'),
    city: DS.attr('string'),
    postalCode: DS.attr('string'),
    region: DS.belongsTo('region'),
    country: DS.belongsTo('country')
});
