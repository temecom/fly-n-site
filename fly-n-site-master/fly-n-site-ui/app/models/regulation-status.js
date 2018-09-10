import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';

export default FlynSiteEntity.extend({
  description: DS.attr('string')
});
