import Ember from 'ember';

export function noImage(params) {
  var noImage = params[0];

  if(noImage === ""){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-sunglasses"></span>');
  }
}

export default Ember.Helper.helper(noImage);
