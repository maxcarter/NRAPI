# NRAPI

NRAPI (Node.js RESTful API) is a simple Node.js RESTful API solution created using the [Node-Restful](https://github.com/baugarten/node-restful) library with Mongo DB integrations.


See the [Node-Restful Documentation](https://github.com/baugarten/node-restful/blob/master/README.md#built-in-filters) for more information about the built-in filters associated with the API.

## Installation 

```
npm install
```

## Server

* Prerequisite: [Install Mongo DB](https://docs.mongodb.org/manual/installation/)  

1. [Configure](https://github.com/maxcarter/NRAPI/blob/master/config.js) the server to connect to your Mongo DB database.
2. Start the ExpressJS server by running the following commands:
```
node server.js
```

## Development 

The [Node-Restful Documentation](https://github.com/baugarten/node-restful/blob/master/README.md) contains various details with respect to the features and functionality of the library.

### Adding a new model

1. Create a new model using a [Mongoose Schema](http://mongoosejs.com/docs/guide.html) and save it in `api/v1/models`.
2. Modify `api/v1/routes/routes.js` to specify the desired HTTP requests associated with your model.
```
var customModel = require('../models/customModel');
customModel.methods(['get', 'put', 'post', 'delete']);
customModel.register(router, '/customModel');
```