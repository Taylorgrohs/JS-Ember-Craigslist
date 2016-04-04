import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('roomrent');
  },

  actions: {
    saveRoomRent(params){
      var newRoomRent = this.store.createRecord('roomrent', params);
      newRoomRent.save();
      this.transitionTo('room-rent');
    }
  }
});
