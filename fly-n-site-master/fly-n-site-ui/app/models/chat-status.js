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
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class ChatStatus extends FlynSiteEntity {
  @attr("string") name;
  @attr("string") translationKey;
}
