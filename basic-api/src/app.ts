import { KintApp } from 'express-kint';

export const app = new KintApp('Hello world');

export const makeEndpoint = app.defineExpressEndpoint;
