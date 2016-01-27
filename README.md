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