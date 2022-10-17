//app/models/phone

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Phone
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import ContactMethod from "../models/contact-method";

export default class Phone extends ContactMethod {
  @attr("string") number;
  @belongsTo("country", { async: true, inverse: null }) country;
}
