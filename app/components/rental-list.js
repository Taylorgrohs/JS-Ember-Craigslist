import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['price:asc'],
  sortedRentals: Ember.computed.sort('roomrent', 'sortBy'),

  actions: {
    saveRoomRent(params){
      this.sendAction('saveRoomRent', params);
    }
  }
});
