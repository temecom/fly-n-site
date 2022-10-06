// fly-n-site-service.js
const mongoose = require('mongoose');
const UUID = require('uuid');
//set Promise provider to bluebird
mongoose.Promise = require('bluebird');
const mongoUrl = 'mongodb://localhost/fly-n-site';
const Club = require('./model/club');
const initialData = require('../config/initial-data.json');
var classes = {};
/**
 * The site service
 *  - provide the repository  functions for Fly-N-Site
 */
class FlyNSiteService {
	constructor() {
		classes.club = {type:'club',path: 'clubs', clazz:require('./model/club')};
		classes.site = {type:'site',path: 'sites', clazz:require('./model/site')};
		classes.person = {type:'person',path: 'people', clazz:require('./model/person')};
		classes.membership = {type:'membership',path: 'memberships', clazz:require('./model/membership')};
		classes.postalAddress = {type:'postal-addresses',path: 'postal-addresses', clazz:require('./model/postalAddress')};
		classes.country = {type:'country',path: 'countries', clazz:require('./model/country')};
		classes.mapMarker = {type:'mapMarker',path: 'map-markers', clazz:require('./model/mapMarker')};
		classes.map = {type:'map',path: 'maps', clazz:require('./model/map')};
		classes.location = {type:'location',path: 'locations', clazz:require('./model/location')};
		classes.event = {type:'event',path: 'events', clazz:require('./model/event')};
		classes.chat = {type:'chat',path: 'chats', clazz:require('./model/chat')};
		classes.chatStatus = {type:'chatStatus',path: 'chatStatuses', clazz:require('./model/chatStatus')};
		classes.chatPost = {type:'chatPost',path: 'chatPosts', clazz:require('./model/chatPost')};
		classes.chatPostStatus = {type:'chatPostStatus',path: 'chatPostStatuses', clazz:require('./model/chatPostStatus')};
		classes.regulation = {type:'regulation',path: 'regulations', clazz:require('./model/regulation')};
		classes.regulationStatus = {type:'regulationStatus',path: 'regulationStatuses', clazz:require('./model/regulationStatus')};
	}

	/**
	 * Open the connection to the Mongo DB
	 */
	open() {
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
		  console.log("Connected to " + mongoUrl);
		});
		mongoose.connect(mongoUrl);
		this.checkData();
	}

	checkData() {
		var self = this;
		this.findAll('country')
		.then(function(countries){

			if (countries.length===0) {
				initialData.forEach(function(entry){
					var entity = new classes[entry.type].clazz(entry);
					self.save(entity);
				});
			}
		});

	}

	getClasses() {
		return classes;
	}
	/**
	 * Save the model
	 */
	save(model) {
		console.log("Saving:" + model);
		if (!model._id) {
			model._id = UUID.v4();
		}
		return model.save(function(err, model){
			if(err) { return console.error('Failed to save' + model);}
			return model;
		});
	}

	addClub(name) {
		var club = new Club(name)
		this.post(club);
	}
	/**
	 * Find all of the clubs in the system
	 */
	findAllClubs() {
		return Club.find().exec();

	}

	/**
	 * Find by the passed JSON query hash in the form:
	 *
	 * {"attribute1":"value1",...}
	 */
	findAll(type, query) {
		var clazz = classes[type].clazz;
		console.log("Querying for class: " + type + " with: " + JSON.stringify(query));
		return clazz.find(query).exec();
	}


	findClubById(id)  {
		return Club.findById(id).exec();
	}

	findById(type, id)  {
		var clazz = classes[type].clazz;
		return clazz.findById(id).exec();
	}
}

module.exports = FlyNSiteService;
