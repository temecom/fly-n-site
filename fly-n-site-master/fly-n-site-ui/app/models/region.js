//app/models/region

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Region
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Region extends FlynSiteEntity {
  @belongsTo("country", { async: true, inverse: null }) country;
  @attr("string") code;
}
