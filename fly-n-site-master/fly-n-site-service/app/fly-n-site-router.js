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
			self.getEntities(self,req,res,classDefinition.type);
		});
		
		this.app.get('/' + classDefinition.path +'/:id', function (req, res) {
			self.getEntity(self,req,res,classDefinition.type);
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
		var entity = new classDefinition.clazz(req.body.data.attributes);
		entity.save((err, createdEntity) => {  
		    if (err) {
		        res.status(500).send(err);
		    }

		    var payload = {data: self.packageEntity(classDefinition.type, createdEntity)};
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

		        // Save the updated document back to the database
		        entity.save((err, updatedEtity) => {
		            if (err) {
		                res.status(500).send(err)
		            }
		            var payload = {data: self.packageEntity(classDefinition.type, updatedEtity)};
		            res.status(200).send(payload);
		        });
		    }
		});
	}
	/**
	 * Get a list of entities
	 */
	getEntities(self,req, res, type) {
		  self.service.findAll(type)
	  		.then(function(rawEntities){
	  			var entities = rawEntities.map(function(entity){
	  				return this.packageEntity(type,entity._doc);
	  			}, self);
	  			var payload = {data:entities}
	  			res.send(payload); 
			})
			.catch(function(err) {
				res.send(self.packageError("Failed to find entities", err,501)); 
		});
		   
	}
	
	getEntity(self,req, res, type) {
		var id = req.params.id;
		  self.service.findById(type, id)
	  		.then(function(entity){
	  			var payload = {data: self.packageEntity(type, entity)};
	  			res.send(payload); 
			})
			.catch(function(err) {
				var error = self.packageError("Failed to find entity", err,404);
				res.send(error); 
		});
		
	}
	/**
	 * Package the entity given the type and id 
	 */
	packageEntity(type, entity) {

		var payload =  {type: type, id: entity._id, attributes: entity};
		delete(entity["_id"]);
		delete(entity["__v"]);
		delete(entity["_class"]);
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