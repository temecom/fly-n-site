//app/models/instructor

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Instructor
 */

import { hasMany } from "@ember-data/model";
import Pilot from "../models/pilot";

export default class Instructor extends Pilot {
  @hasMany("pilot", { async: true, inverse: null }) students;
}
