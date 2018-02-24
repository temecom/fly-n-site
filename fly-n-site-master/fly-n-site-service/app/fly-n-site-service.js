// flyn-site-service.js
const mongoose = require('mongoose');
const UUID = require('uuid');
//set Promise provider to bluebird
mongoose.Promise = require('bluebird');
const mongoUrl = 'mongodb://localhost/flynsite';
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
		classes.postalAddress = {type:'postalAddress',path: 'postal-addresses', clazz:require('./model/postalAddress')};
		classes.country = {type:'country',path: 'countries', clazz:require('./model/country')};
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
	
	findAll(type) {
		var clazz = classes[type].clazz;
		return clazz.find().exec();
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