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
import FlynSiteEntity from "../models/fly-n-site-entity";
export default class ChatPosts extends FlynSiteEntity {
  @attr("string") text;
  @belongsTo("ChatPostStatus", { async: true, inverse: null }) status;
  @attr("date") posted;
  @belongsTo("Person", { async: true, inverse: null }) postedBy;
}
