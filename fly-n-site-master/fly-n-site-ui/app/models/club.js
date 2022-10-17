//app/models/club

/*
 * (C)  Copyright 2017,  FlynSite
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Club
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import { hasMany } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Club extends FlynSiteEntity {
  @attr("string") emailAddress;
  @attr("string") webSiteUrl;
  @attr("string") facebookPage;
  @hasMany("membership", { async: true, inverse: null }) memberships;
  @belongsTo("postalAddress", { async: true, inverse: null }) postalAddress;
}
