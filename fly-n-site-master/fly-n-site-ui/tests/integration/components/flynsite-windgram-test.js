import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "fly-n-site-windgram",
  "Integration | Component | fly-n-site windgram",
  {
    integration: true,
  }
);

test("it renders", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fly-n-site-windgram}}`);

  assert.equal(this.$().text().trim(), "");

  // Template block usage:
  this.render(hbs`
    {{#fly-n-site-windgram}}
      template block text
    {{/fly-n-site-windgram}}
  `);

  assert.equal(this.$().text().trim(), "template block text");
});
