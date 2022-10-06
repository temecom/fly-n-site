import DS from "ember-data";
import FlynSiteEntity from "../models/fly-n-site-entity";

export default FlynSiteEntity.extend({
  text: DS.attr("string"),
  status: DS.belongsTo("RegulationStatus"),
});
