//app/models/ratingtype

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: RatingType
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class RatingType extends FlynSiteEntity {
  @belongsTo("Organization", { async: true, inverse: null }) issuer;
  @attr("string") code;
}
