//app/models/location

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Location
 */

import FlynSiteEntity from "../models/fly-n-site-entity";
import { attr } from "@ember-data/model";
export default class Location extends FlynSiteEntity {
  @attr("string") name;
  @attr("number") latitude;
  @attr("number") longitude;
}
