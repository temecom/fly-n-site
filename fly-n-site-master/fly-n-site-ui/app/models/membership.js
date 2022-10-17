//app/models/clubmember

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: ClubMember
 */

import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";
const separator = "-";
export default class Membership extends FlynSiteEntity {
  @attr("date") joined;
  @attr("date") renewal;
  @attr("string") membershipId;
  @belongsTo("person", { async: true, inverse: null } ) person;
  @belongsTo("club", { async: true, inverse: null } ) club;
  get name () {
    var clubName = this.club.name;
    var membershipId = this.membershipId;
    var person = this.person;
    var surname = person.surName;
    var givenName = person.givenName;
    var name = "";
    if (clubName) {
      name = clubName;
    }
    if (surname) {
      name = name + separator + givenName + " " + surname;
    }
    return name + separator + membershipId;
  }
}
