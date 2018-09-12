//app/models/person

/*
* (C)  Copyright 2017, FlynSite.
 * All rights reserved
*/

/**
* Generated On: 2017-8-15
* Class: Person
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';
import { computed } from '@ember/object';

export default FlynSiteEntity.extend({

    givenName: DS.attr('string'),
    surName: DS.attr('string'),
    birthDate: DS.attr('date'),
    contactMethods: DS.hasMany('contactMethod',{async:true}),
    memberships: DS.hasMany('membership',{async:true}),
    name: computed('surName', 'givenName', function() {
        let givenName = this.get('givenName');
        let surName = this.get('surName');

        return `${givenName} ${surName}`;
      })

});
