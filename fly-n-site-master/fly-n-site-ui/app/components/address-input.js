import Ember from "ember";

export default Ember.Component.extend({
  countryName: null,
  actions: {
    countrySelected: function (countryName) {
      this.sendAction("countrySelected", countryName);
    },

    save: function () {
      this.save();
    },
  },
  countryNames: Ember.computed("countries", function () {
    return this.countries.map(function (country) {
      return country.name;
    });
  }),
});
