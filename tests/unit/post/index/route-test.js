import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | post/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:post/index');
    assert.ok(route);
  });
});
