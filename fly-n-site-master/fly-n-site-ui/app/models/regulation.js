import { attr } from "@ember-data/model";
import { belongsTo } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class Regulation extends FlynSiteEntity {
  @attr("string") text;
  @belongsTo("RegulationStatus", { async: true, inverse: null } ) status;
}
