import { Sequelize } from "sequelize";

const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_USER = process.env.POSTGRES_USER;
console.log(POSTGRES_DB, POSTGRES_USER)

export default new Sequelize(`postgres://${POSTGRES_DB}:${POSTGRES_USER}@mouse.db.elephantsql.com/${POSTGRES_DB}`)