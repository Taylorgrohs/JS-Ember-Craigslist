import DS from 'ember-data';

export default DS.Model.extend({
  misconnection: DS.hasMany('misconnection', { async: true }),
  singles-profile: DS.hasMany('singles-profile', { async: true }),
});
