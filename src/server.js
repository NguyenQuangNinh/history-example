'use strict';

import config from '../config';
import app from './app';
import Mongodb from './libs/Mongodb';
import RabbitMq from './libs/RabbitMq';
import queueController from './queueController';

const init = async () => {
	// config mongodb
	try {
		await Mongodb(config.mongodb);
	} catch(e) {
		console.error(e);
		process.exit(1);
	}

	// RabbitMq
	try {
		const rabbitMqClient = await RabbitMq(config.rabbitMq);
		queueController(rabbitMqClient);
	} catch (e) {
		console.error(e);
		process.exit(1);
	}

	// webserver API
	const server = app.listen(config.port, config.hostname, () => {
		const {address, port} = server.address();
		console.log(`History app listening at http://${address}:${port}`);
	});
};

process.on('SIGINT', () => {
	setTimeout(()=>{
		process.exit(0);
	},1000);
});

init();