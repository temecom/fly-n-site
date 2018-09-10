import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flynsite-windgram', 'Integration | Component | flynsite windgram', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flynsite-windgram}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flynsite-windgram}}
      template block text
    {{/flynsite-windgram}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
