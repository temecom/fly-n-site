//app/models/country

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Country
 */

import { attr } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Country extends FlynSiteEntity {
  @attr("string") code;
  @attr("string") phoneCode;
}
