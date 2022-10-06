//app/models/ratingtype

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: RatingType
 */

import DS from "ember-data";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default FlynSiteEntity.extend({
  name: DS.attr("string"),
  translationKey: DS.attr("string"),
});
