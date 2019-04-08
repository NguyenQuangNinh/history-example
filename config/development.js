'use strict';

module.exports = {
	port: 1212,
	hostname: '127.0.0.1',
	publish: false,
	server_static: '',
	server_upload: '',
	mongodb: {
		connect: 'mongodb://127.0.0.1:27017/history',
		option: {
			useNewUrlParser: true,
			useCreateIndex: false,
			autoReconnect: true,
			autoIndex: false,
			reconnectInterval: 500,
			// user: null,
			// pass: null
		},
		debug: true
	},
	redis: {

	},

	rabbitMq: {
		host: 'localhost',
		port: 5672,
		login: 'admin',
		password: 'admin@123',
		connectionTimeout: 10000,
		noDelay: true,
		ssl: {
			enabled : false
		}
	}
};