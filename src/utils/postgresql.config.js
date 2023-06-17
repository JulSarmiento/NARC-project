import { Sequelize } from "sequelize";

const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

export default new Sequelize(`postgres://${POSTGRES_DB}:${POSTGRES_PASSWORD}@mouse.db.elephantsql.com/${POSTGRES_DB}`, {
  define: {
    timestamps: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    define: {
      underscore: true,
    }
  },
})