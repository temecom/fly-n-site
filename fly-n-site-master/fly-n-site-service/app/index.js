const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const FlyNSiteService = require('./fly-n-site-service.js');
const FlyNSiteRouter = require('./fly-n-site-router.js');
app.get('/', function (req, res) {
  res.send('Fly-n-site API');
})


app.listen(3000, function () {

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  var service = new FlyNSiteService();
  service.open();
  var router = new FlyNSiteRouter(app, service);
  router.route();
  console.log('Fly-n-site API listening on port 3000!')
})