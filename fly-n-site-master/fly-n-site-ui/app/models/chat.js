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
export default class Chat extends FlynSiteEntity {
  @attr("string") topic;
  @attr("string") description;
  @hasMany("ChatPost", { async: true, inverse: null } ) posts;
  @belongsTo("ChatStatus", { async: true, inverse: null }) status;
  @attr("date") opened;
  @attr("date") closed;
}
