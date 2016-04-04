import DS from 'ember-data';

export default DS.Model.extend({
  rooms-rent: DS.hasMany('rooms-rent', { async: true }),
  rooms-wanted: DS.hasMany('rooms-wanted', { async: true }),
});
