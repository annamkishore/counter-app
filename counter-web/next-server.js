import * as http from "http"
import * as url from "url"
import * as next from "next"
import {CounterEndpoints} from "./src/app/services/rest-endpoints.js";

const dev = process.env.NODE_ENV !== 'production';
const app = next.default({dev});
const nextJSRequestHandler = app.getRequestHandler();

async function main() {
  await app.prepare()
  let Server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    nextJSRequestHandler(req, res, parsedUrl);
  })
  const port = process.env.port;
  Server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log("----counter-service Endpoints---- ", CounterEndpoints)
  });
}

main()