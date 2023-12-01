import {onRequest} from "firebase-functions/v2/https";
import {OpenSourceShape} from "./types";
import express, {Request, Response} from "express";
import cors from "cors";
import moment from "moment";

const version = "2.0.3";
const app = express();
app.use(cors({credentials: true}));

const respond = (req: Request, res: Response, data: OpenSourceShape) => {
  const {output} = data;
  const unixEpoch = Date.now();
  const api = {
    app: "Open Source RESTful API",
    version: `${version}`,
    time: moment(unixEpoch).add(2, "hours").format("MMMM Do YYYY, h:mm:ssa"),
    response: output,
  };
  res.json(api);
};

app.all("**", async (req, res) => {
  respond(req, res, {
    output: {
      code: "200",
      status: "success",
      message: "Welcome to Open Source API. How can we help?",
    },
  });
});

export const api = onRequest(app);
