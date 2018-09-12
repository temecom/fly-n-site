//app/models/clubmember

/*
 * (C)  Copyright 2017, FlynSite.
 * All rights reserved
 */

/**
 * Generated On: 2017-8-15
 * Class: ClubMember
 */

import DS from 'ember-data';
import FlynSiteEntity from '../models/flyn-site-entity';
import { computed } from '@ember/object';
const separator = '-';
export default FlynSiteEntity.extend({

	joined: DS.attr('date'),
	renewal: DS.attr('date'),
	membershipId: DS.attr('string'),
	person: DS.belongsTo('person'),
	club: DS.belongsTo('club'),
	name: computed('club', 'membershipId','person', function() {
		var clubName=this.get('club.name');
		var membershipId = this.get('membershipId');
		var person = this.get('person');
		var surname=person.get('surName');
		var givenName=person.get('givenName');
		var name = "";
		if (clubName) {
			name = clubName;
		}
		if (surname) {
			name = name + separator + givenName + ' ' + surname ;
		}
		return name + separator + membershipId;
	})
});
