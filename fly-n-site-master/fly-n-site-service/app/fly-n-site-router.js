// flyn-site-router.js

/**
 * The system router
 * Sets up the routes
 * Executes the route functions using the Mongoose service
 */
class FlyNSiteRouter {
	constructor(app, service) {
		this.app = app;
		this.service = service;
	}
	/**
	 * Start the routes
	 */
	route() {
		var self = this;
		// Main Greeting
		this.app.get('/', function (req, res) {
			//TODO: set up swagger
			  res.send('Fly-n-site API');

		});
		var classes = this.service.getClasses();
		Object.keys(classes).forEach(function(key) {
			self.createRoute(classes[key]);
		});
	}
	/**
	 * Create a rout definition from the class definition
	 */
	createRoute(classDefinition) {
		var self = this;

		this.app.get('/' + classDefinition.path, function (req, res) {
			self.getAllEntities(self,req,res,classDefinition);
		});


		this.app.get('/' + classDefinition.path +'/:id', function (req, res) {
			self.getEntity(self,req,res,classDefinition);
		});
		/**
		 * Create a new entity
		 */
		this.app.post('/' + classDefinition.path, function (req,res){
			self.save(self, req, res, classDefinition);
		});

		this.app.patch('/' + classDefinition.path +'/:id', function (req, res) {
			self.update(self, req, res, classDefinition);
		});
	}

	/**
	 * Create and save a record
	 * @param self the context
	 * @param req the http request
	 * @param res the http response
	 * @param classsDEfinition the class definition to use
	 */
	save(self,req, res, classDefinition) {
		// Assuming this is from a POST request and the body of the
		// request contained the JSON of the new "entity" item to be saved
		var body = req.body;
		console.log(body);
		var relationships = req.body.data.relationships;
		var entity = new classDefinition.clazz(req.body.data.attributes);
		if(relationships) {
			var keys = Object.keys(relationships);
			keys.forEach ( function(key ) {
				var id = relationships[key].data.id;
				body.data.attributes[key]=id;
			});
		}

		entity.save((err, createdEntity) => {
		    if (err) {
		        res.status(500).send(err);
		    }

		    var payload = {data: self.packageEntity(classDefinition, createdEntity._doc)};
		    console.log(payload);
		    res.status(200).send(payload);
		});
	}

	/**
	 * Update a record
	 * @param self the context
	 * @param req the http request
	 * @param res the http response
	 * @param classsDEfinition the class definition to use
	 */
	update(self,req, res, classDefinition) {
		classDefinition.clazz.findById(req.params.id, (err, entity) => {
		    // Handle any possible database errors
		    if (err) {
		        res.status(500).send(err);
		    } else {
		        // Update each attribute with any possible attribute that may have been submitted in the body of the request
		        // If that attribute isn't in the request body, default back to whatever it was before.
		    	var attributes = req.body.data.attributes;
		    	var attributeKeys = Object.keys(attributes);
		    	for (var index=0; index<attributeKeys.length; index++) {
		    		var key = attributeKeys[index];
		    		entity[key] = attributes[key];
		    	}

				var relationships = req.body.data.relationships;
				if(relationships) {
					var relationshipKeys = Object.keys(relationships);
					for (var index=0;index<relationshipKeys.length;index++) {
						var key = relationshipKeys[index];
						var data = relationships[key].data;
						var id;
						if (Array.isArray(data)) {
							// Convert array objects to id's
							var objects = [];
							objects = data.map(function(object) {
								return object.id;
							});
							entity[key]=objects;
						} else {
							id = data.id;
							entity[key]=id;
						}
					}
				}

		        // Save the updated document back to the database
		        entity.save((err, updatedEntity) => {
		            if (err) {
		                res.status(500).send(err)
		            }
		            var payload = {data: self.packageEntity(classDefinition, updatedEntity._doc)};
		            res.status(200).send(payload);
		        });
		    }
		});
	}
	/**
	 * Get a list of entities using the optional passed query parameters as a JSON hash in the form:
	 * {"parameter":"value"}
	 * See: http://mongoosejs.com/docs/api.html#find_find
	 */
	getAllEntities(self,req, res, classDefinition) {

		var type = classDefinition.type;
		var queryParameter = req.query.query;
		var query ;
		if (queryParameter) {
			query = JSON.parse(queryParameter);
			/**
			 * Check for a regex
			 */
			var key = Object.keys(query)[0];
			var value = query[key];
			if (value.includes('/'))  {
				var parts = value.split('/');
				console.log(parts[0] + ':' + parts[1] + ':' +  parts[2]);
				var regex = new RegExp(parts[1], parts[2]);
				query[key]=regex;
			}
		}


		  self.service.findAll(type, query)
	  		.then(function(rawEntities){
	  			var entities = rawEntities.map(function(entity){
	  				return this.packageEntity(classDefinition,entity._doc);
	  			}, self);
	  			var payload = {data:entities}
	  			res.send(payload);
			})
			.catch(function(err) {
				res.send(self.packageError("Failed to find entities", err,501));
			});
	}



	getEntity(self,req, res, classDefinition) {
		var type = classDefinition.type;
		var id = req.params.id;
		  self.service.findById(type, id)
	  		.then(function(entity){
	  			var payload = {data: self.packageEntity(classDefinition, entity._doc)};
	  			res.send(payload);
			})
			.catch(function(err) {
				var error = self.packageError("Failed to find entity", err,404);
				res.send(error);
		});

	}
	/**
	 * Package the entity given the classDefinition and entity retrieved
	 */
	packageEntity(classDefinition, entity) {
		var type = classDefinition.type;
		var relationships = {};
		var clazz = classDefinition.clazz;
		var record = entity;
		var fields = Object.keys(entity);
		var id = entity._id;
		delete(entity["_id"]);
		delete(entity["__v"]);
		delete(entity["_class"]);
		for (var index=0;index<fields.length;index++) {
			var key = fields[index];
			if (key !== 'id') {
				var value = entity[key];
				if (value && ((typeof value) == 'object' )) {
					if (!Array.isArray(value)) {
						var schemaTree = clazz.schema.tree[key];
						if (schemaTree) {
							var className = clazz.schema.tree[key].ref;
							relationships[key] = {data:{type:className, id:value.toString()}};
						} else {
							console.log("Could not find class for " + key);
						}
					} else {
						relationships[key] = {data:[]};
						value.forEach(function(value){
							var arrayType = clazz.schema.tree[key][0].ref;
							arrayType = arrayType.substring(0,1).toLowerCase() + arrayType.substring(1);
							relationships[key].data.push({type:arrayType, id:value.toString()});
						});
					}
					delete(entity[key]);
				}
			}

		}
		var payload =  {type: type, id: id, attributes: entity,relationships:relationships};

		return payload;
	}

	/**
	 * Package an error
	 */
	packageError(title, err, status) {
		return {errors: {title: title, detail: err.message, status:status} };
	}
}

module.exports = FlyNSiteRouter;
