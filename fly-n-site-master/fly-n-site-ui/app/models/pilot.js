//app/models/pilot

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Pilot
 */

import { belongsTo } from "@ember-data/model";
import { hasMany } from "@ember-data/model";
import Person from "../models/person";

export default class Pilot extends Person {
  @hasMany("rating", { async: true, inverse: null } ) ratings;
  @belongsTo("site", { async: true, inverse: null }) homeSite;
}
