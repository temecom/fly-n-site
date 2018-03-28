//app/models/clubmember

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: ClubMember
*/

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';
import { computed } from '@ember/object';
export default FlynSiteEntity.extend({

    joined: DS.attr('date'),
    renewal: DS.attr('date'),
    membershipId: DS.attr('string'),
    person: DS.belongsTo('person',{async:true}),
    club: DS.belongsTo('club', {async:true}),
    name: computed('membershipId', function() {
        let membershipId = this.get('membershipId');
       
        return `${membershipId}`;
      })
});
