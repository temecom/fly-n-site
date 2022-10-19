//app/models/fly-n-siteentity

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: FlynSiteEntity
 */

import Model from "@ember-data/model";
import { attr } from "@ember-data/model";
export default class FlyNSiteEntity extends Model {
  @attr("string") name;
  @attr("date") updateTime;
}
