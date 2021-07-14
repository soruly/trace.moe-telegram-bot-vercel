import { NowRequest, NowResponse } from "@now/node";
import fetch from "node-fetch";

export default async (request: NowRequest, response: NowResponse) => {
  const { body } = request;

  // const res = await fetch("");

  // if (res.status >= 400) {
  //   return response.status(res.status).send(await res.text());
  // }

  // if (!contentType) return response.status(400).send("Error: Unknown Content-Type");

  // return response.status(400).send("Error: Unsupported Content-Type");

  return response.status(204).send("");
};
