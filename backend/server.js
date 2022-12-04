import http from 'http';
import cors from "cors";
import express from "express";
import helmet from 'helmet';
import morgan from "morgan";

import mongoInit from "./src/init.js";
import config from "./src/config.js";
import logger from "./src/log.js"

import routes from "./src/routes/index.js";
import bodyParser from 'body-parser'

const log = logger("server");
const app = express();

app.enable("json spaces");
app.enable("strict routing");
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(routes);

const server = http.createServer(app)

process.on('uncaughtException',(err)=>{
  log.fatal({err}, `Unhandled exception ${err}`)
})
process.on('unhandledRejection',(reason)=>{
  log.error(`Unhandled promise rejection : ${reason}`)
})

const main = async () => {
  await mongoInit(config.DATABASE_URL);
  log.info(`Listening on Port ${config.PORT}`);
  await server.listen(config.PORT);
};

main();