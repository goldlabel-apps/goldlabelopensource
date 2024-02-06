import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const helloWorld = onRequest((request, response) => {
  logger.info("Goldlabel API", {structuredData: true});
  response.send("Goldlabel API");
});
