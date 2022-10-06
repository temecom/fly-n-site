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
  topic: DS.attr("string"),
  description: DS.attr("string"),
  posts: DS.hasMany("ChatPost"),
  status: DS.belongsTo("ChatStatus"),
  opened: DS.attr("date"),
  closed: DS.attr("date"),
});
