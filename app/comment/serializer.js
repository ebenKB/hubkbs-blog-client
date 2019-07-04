import DS from 'ember-data';
// import Serializer from '../application/serializer';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: '_id',
  attrs: {
    user: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  },
  // attrs: {
  //     // user: { embedded: 'always' }
  //     user: { serialize: 'records' , deserialize: 'records'},
  // }
});
