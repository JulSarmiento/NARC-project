import Express  from "express";
import log from "morgan";

import routes from "./routes/index.js";

const app = Express();

app.use(log('dev'));

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(routes);


export default app;