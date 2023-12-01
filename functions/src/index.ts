import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const api = onRequest((request, response) => {
  logger.info("Staging", {structuredData: true});
  response.send("Goldlabel API");
});
