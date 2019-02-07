import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findRecord('template', 1);
  },
    
  setupController(controller, model) {
    this._super(...arguments);
    setTimeout(() => {
      model.get('layout.id');
      setTimeout(() => {
        model.get('layout.id');
        setTimeout(() => {
          model.get('layout.id');
        }, 500);
      }, 500);
    }, 500);
  }
});
