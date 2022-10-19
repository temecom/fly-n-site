//app/models/email

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: EMail
 */

import { attr } from "@ember-data/model";
import ContactMethod from "../models/contact-method";

export default class EMail extends ContactMethod {
  @attr("string") address;
}
