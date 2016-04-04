import Ember from 'ember';

export default Ember.Component.extend({
  addNewRoomRent: false,
  actions: {
    roomrentFormShow(){
      this.set('addNewRoomRent', true);
    },

    roomrentFormHide(){
      this.set('addNewRoomRent', false);
    }

  }
});
