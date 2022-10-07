import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr;
  }
  keyForRelationship(key) {
    return key;
  }
}
