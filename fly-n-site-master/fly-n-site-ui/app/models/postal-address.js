//app/models/postaladdress

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: PostalAddress
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import ContactMethod from "../models/contact-method";

export default class PostalAddress extends ContactMethod {
  @attr("string") street;
  @attr("string") city;
  @attr("string") postalCode;
  @belongsTo("region", { async: true, inverse: null } ) region;
  @belongsTo("country", { async: true, inverse: null } ) country;
}
