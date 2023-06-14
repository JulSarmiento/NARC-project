import { onRequest } from 'firebase-functions/v2/https';
import  app from './src/app.js'
import sequelize from './src/utils/postgresql.config.js';

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