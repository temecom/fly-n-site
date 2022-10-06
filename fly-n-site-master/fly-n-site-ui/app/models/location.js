//app/models/location

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Location
 */

import FlynSiteEntity from "../models/fly-n-site-entity";
import DS from "ember-data";
export default FlynSiteEntity.extend({
  name: DS.attr("string"),
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
});
