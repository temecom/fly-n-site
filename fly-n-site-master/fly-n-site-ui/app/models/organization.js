//app/models/organization

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Organization
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import { hasMany } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Organization extends FlynSiteEntity {
  @belongsTo("person", { async: true, inverse: null }) mainContact;
  @belongsTo("postalAddress", { async: true, inverse: null }) postalAddress;
  @belongsTo("country", { async: true, inverse: null }) country;
}
