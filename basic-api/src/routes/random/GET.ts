import { z } from 'zod';
import { makeEndpoint } from '../../app';

export default makeEndpoint(
	{
		responseBody: { number: z.number() },
		queryParams: {
			min: z.coerce.number().optional(),
			max: z.coerce.number().optional(),
		},
	},
	(req, res, ctx) => {
		const min = req.query.min ?? 0;
		const max = req.query.max ?? 100;

		const random = Math.random() * (max - min) + min;

		res.status(200).send({ number: random });
	}
);
