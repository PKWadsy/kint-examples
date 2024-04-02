import { makeEndpoint } from '../app.js';
import { z } from 'zod';

export default makeEndpoint(
	{
		requestBody: z.string().min(1),
	},
	(req, res, ctx) => {
		const text = req.body;

		res.status(200).send(`You sent: ${text}`);
	}
);
