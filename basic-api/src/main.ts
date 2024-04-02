import path from 'path';
import { app } from './app.js';
import express from 'express';
import bodyParser from 'body-parser';

async function main() {
	const server = express();

	const routePath = path.join(__dirname, 'routes');

	const router = await app.buildExpressRouterFromDirectory(routePath);

	server.use(bodyParser.text());

	server.use(router);

	server.listen(3000, () => {
		console.log('Server started on http://localhost:3000');
	});
}

main();
