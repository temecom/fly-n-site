//app/models/email

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: EMail
 */

import DS from "ember-data";
import ContactMethod from "../models/contact-method";

export default ContactMethod.extend({
  address: DS.attr("string"),
});
