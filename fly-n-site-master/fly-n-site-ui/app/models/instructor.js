//app/models/instructor

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: Instructor
 */

import DS from "ember-data";
import Pilot from "../models/pilot";

export default Pilot.extend({
  students: DS.belongsTo("pilot", { async: true }),
});
