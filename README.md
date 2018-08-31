# fly-n-site
Open source application for the management of local HG and PG flying sites.
The object is to pool resources and to provide a best of breed web experience for club members and an effective tool for managing club resources. The application will center around current Web frameworks and server technologies to ensure that it is scalable and enjoys a supportable future.

# flynsite.org
The domain name flynsite.org has been reserved as an entry point for all sites. Each site will have it's own 'tenancy' and will be maintained by the local club members. This is 'your' site and our job is create an easy to manage and maintain site not tell you how and what to put there.

# Try it (Bash Command Line)
* Install [node.js](https://nodejs.org/en/)
* Install and start [MongoDB](https://www.mongodb.com/cloud/atlas/lp/general?jmp=search&utm_source=google&utm_campaign=Americas-US-MongoDB-to-Atlas-Brand-Alpha&utm_keyword=mongodb&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=248596149315&utm_matchtype=e&_bt=248596149315&_bk=mongodb&_bm=e&_bn=g&gclid=CjwKCAiAt8TUBRAKEiwAOI9pAO7Sq6qEt0DrNlnkDTj2TssYyjGsQsMkHmfjuwm6CQpYVs5AOmy6fBoCenoQAvD_BwE)
* Install [Robo3T](https://robomongo.org/download)
* Clone this site

git clone https://github.com/temecom/fly-n-site.git

* Prepare UI application and services
 * Service

``` bash
cd fly-n-site/fly-n-site-master/fly-n-site-service
npm install
cd app
node index &
```

* Inject test data
 * Open fly-n-site/fly-n-site-master/fly-n-site-service/data/sample-site.json
 * Copy/Paste data into Robo3T/flynstieentities collection
  * Use the 'Insert Document' Utility
 * UI App

``` bash
cd fly-n-site/fly-n-site-master/fly-n-site-ui
npm install
ember serve --proxy=http://localhost:3000
```
* Open the site at:
[Fly'n Site](http://localhost:4200)

# Deploy it

# Architecture
## StarUml diagram
## Front end
## Server
## Flickr account details
# Contribute (Development)
## Signup
##
## Pull Requests
# Contribute $
This is a none profit effort but it is not free of costs. In an effort to sustain the development and longevity of this effort we ask you to contribute to a common fund. Out hope is that a large part of the effort and cost that goes into maintaining your current site will be offset and some of that savings will be contributed to this common effort. More details to come.
