//app/models/location

/*
* (C)  Copyright 2017, FlynSite.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Location
*/

import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({

    latitude: DS.attr('number'),
    longitude: DS.attr('number')
});
