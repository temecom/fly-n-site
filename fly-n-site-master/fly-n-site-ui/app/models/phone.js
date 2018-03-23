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
import ContactMethod from '../models/contact-method';

export default ContactMethod.extend({

    number: DS.attr('string'),
    country: undefined


});
