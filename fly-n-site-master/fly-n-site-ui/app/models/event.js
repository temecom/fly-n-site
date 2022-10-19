import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";

import FlynSiteEntity from "../models/fly-n-site-entity";
export default class Event extends FlynSiteEntity {
  @attr("date") startDateAndTime;
  @attr("date") endDateAndTime;
  @belongsTo("Location", { async:  true }) location;
}
