import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type {AppRouter} from "@copilot/trpc-server";

console.log('dews')
export const trpcProxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4040',
    }),
  ],
});
