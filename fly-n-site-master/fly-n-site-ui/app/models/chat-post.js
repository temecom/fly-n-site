//app/models/map

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Site
 */

import DS from "ember-data";
import FlynSiteEntity from "../models/fly-n-site-entity";
export default FlynSiteEntity.extend({
  text: DS.attr("string"),
  status: DS.belongsTo("ChatPostStatus"),
  posted: DS.attr("date"),
  postedBy: DS.belongsTo("Person"),
});
