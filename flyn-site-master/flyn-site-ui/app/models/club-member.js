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
export default DS.Model.extend({

    joined: DS.attr('date'),
    renewal: DS.attr('date'),
    person: DS.belongsTo('person',{async:true})


});
