// import appSerializer from '../application/serializer'
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        author: { embedded: 'always' },
        comments:{ embedded: 'always' },
    }
});
