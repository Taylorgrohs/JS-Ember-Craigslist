import Ember from 'ember';

export default Ember.Component.extend({
  addNewRoomRent: false,
  actions: {
    roomrentFormShow(){
      this.set('addNewRoomRent', true);
    },

    roomrentFormHide(){
      this.set('addNewRoomRent', false);
    },

    saveRoomRent() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        image:  this.get('image') ? this.get('image') : "",
        price: parseInt(this.get('price')),
      }
      this.set('addNewRoomRent', false);
      this.sendAction('saveRoomRent', params);
    }
  }
});
