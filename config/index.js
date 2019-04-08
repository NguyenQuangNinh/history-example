'use strict';

const production = require('./production');
const development = require('./development');

const config = {
	port: 1212,
	hostname: '127.0.0.1',
	publish: false,
	server_static: '',
	server_upload: '',
	mongodb: {
		// connect: 'mongodb://127.0.0.1:27017/history',
		option: {
			// useMongoClient: true,
			// poolSize: 10,
			autoReconnect: true,
			// user: null,
			// pass: null,
			//replset: { rs_name: 'HorusRS', auto_reconnect: true, poolSize: 100, connectWithNoPrimary: true,},
			config: { autoIndex: false}
		},
		// debug: true
	},
	redis: {

	},

	rabbitMq: {
		// host: 'localhost',
		port: 5672,
		// login: 'admin',
		// password: 'admin@123',
		connectionTimeout: 10000,
		noDelay: true,
		ssl: {
			enabled : false
		}
	}
};

const configFinal = process.env.NODE_ENV === 'production' ? Object.assign(config, production): Object.assign(config, development);
module.exports = configFinal;
// export default configFinal;