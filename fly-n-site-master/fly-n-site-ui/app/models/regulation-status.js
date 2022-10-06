import DS from "ember-data";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default FlynSiteEntity.extend({
  description: DS.attr("string"),
});
