import DS from 'ember-data';
// import Serializer from '../application/serializer';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        user: { embedded: 'always' }
    }
});

// export default DS.RESTSerializer.extend({
//     primaryKey : '_id',
//     attrs: {
//         user: { embedded: 'always' } 
//     }
// });
