//app/models/map

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Site
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import { hasMany } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";
export default class Map extends FlynSiteEntity {
  @attr("number") zoomLevel;
  @attr("string") mapTypeId;
  @attr("string") description;
  @hasMany("MapMarker", { async: true, inverse: null }) markers;
  @belongsTo("MapMarker", { async: true, inverse: null }) siteMarker;
}
