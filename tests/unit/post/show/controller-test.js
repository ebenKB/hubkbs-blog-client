import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | post/show', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:post/show');
    assert.ok(controller);
  });
});
