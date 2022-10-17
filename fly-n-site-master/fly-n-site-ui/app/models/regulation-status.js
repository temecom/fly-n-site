import { attr } from "@ember-data/model";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default class RegulationStatus extends FlynSiteEntity {
  @attr("string") description;
}
