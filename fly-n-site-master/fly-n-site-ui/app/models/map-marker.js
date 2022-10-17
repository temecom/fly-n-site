//app/models/rating

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Rating
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class MapMarker extends FlynSiteEntity {
  @attr("string") description;
  @belongsTo("Location", { async:  true }) location;
}
