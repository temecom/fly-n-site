//app/models/person

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Person
 */

import { attr } from "@ember-data/model";
import { hasMany } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Person extends FlynSiteEntity {
  @attr("string") givenName;
  @attr("string") surName;
  @attr("date") birthDate;
  @hasMany("contactMethod", { async: true, inverse: null }) contactMethods;
  @hasMany("membership", { async: true, inverse: null }) memberships;
  get name() {
    return `${this.givenName} ${this.surName}`;
  }
}
