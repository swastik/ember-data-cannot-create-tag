import Route from '@ember/routing/route';
import { run } from '@ember/runloop';

export default Route.extend({
  model() {
    return this.store.findRecord('template', 1);
  },

  setupController(controller, model) {
    this._super(...arguments);
    run.later(() => {
      model.get('layout.name');
      run.later(() => {
        model.get('layout.name');
        run.later(() => {
          model.get('layout.name');
        }, 500);
      }, 500);
    }, 500);
  }
});
