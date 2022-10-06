//app/models/site

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
export default class Site extends FlynSiteEntity {
  @attr("string") description;
  /*
   * The site map
   */
  @belongsTo("map") map;
  /*
   * Site regulations
   */
  @hasMany("regulation") regulations;
  /*
   * The key to access the windgram
   */
  @attr("string") windgramKey;
}
