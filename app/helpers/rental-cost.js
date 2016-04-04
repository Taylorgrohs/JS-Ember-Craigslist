import Ember from 'ember';

export function rentalCost(params/*, hash*/) {
  var rentalPrice = params[0];

  if(rentalPrice >= 150){
    return '$$$'
  } else if (rentalPrice >= 100){
    return '$$'
  } else if (rentalPrice <= 99){
    return '$'
  }
}

export default Ember.Helper.helper(rentalCost);
