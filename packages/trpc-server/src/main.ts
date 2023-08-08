import { createHTTPServer } from '@trpc/server/adapters/standalone';

import {appRouter} from "@copilot/trpc-router";

import cors from 'cors';


export const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

const PORT = 4040

server.listen(PORT)

console.log(`Server listening on port ${PORT}`)
