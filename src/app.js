import Express  from "express";
import log from "morgan";

import routes from "./routes/index.js";
import { errorHandler, notPageFound } from "./middlewares/index.js";

const app = Express();

app.use(log('dev'));

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(errorHandler)
app.use(notPageFound);


export default app;