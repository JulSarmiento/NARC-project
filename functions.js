import { onRequest } from 'firebase-functions/vs/https';
import  app from './app';
import sequelize from './src/utils/postgresql.config';

export const api = onRequest({
  maxInstances: 10,
  secrets: [
    "POSTGRES_PASSWORD",
    "POSTGRES_DB",
    "JWT_SECRET"
  ]
}, async (req, res) => {
  await sequelize.authenticate();
  return app(req, res);
});