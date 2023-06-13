import { onRequest } from 'firebase-functions/v2/https';
// import {defineSecret } from 'firebase-functions/params';
import  app from './src/app.js'
import sequelize from './src/utils/postgresql.config.js';

// const PG_PASSWORD = defineSecret(process.env.POSTGRES_PASSWORD);
// const PG_DB = defineSecret(process.env.POSTGRES_DB);
// const JWT_KEY = defineSecret(process.env.JWT_SECRET);

export const api = onRequest({
  maxInstances: 10,
  secrets: [
    'PG_PASSWORD',
    'PG_DB',
    'JWT_KEY'
  ]
}, async (req, res) => {
  await sequelize.authenticate();
  return app(req, res);
});