import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | password/confirm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:password/confirm');
    assert.ok(route);
  });
});
