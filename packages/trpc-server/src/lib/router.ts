import {publicProcedure, router} from './trpc';
import {
  Connection,
  getConnectionSchema,
  Program,
  programConnectionQueryParamSchema,
  programSchema
} from "./entities";

export const appRouter = router({
  programConnection: publicProcedure
    .input(programConnectionQueryParamSchema)
    .query<Connection<Program>>(async () => {
      const programs: Program[] = []
      const responseSchema = getConnectionSchema(programSchema)
      return responseSchema.parse({
        total: 5,
        edges: programs.map(p => ({
         node: p,
        })),
        pageInfo: {
          endCursor: null,
          hasNextPage: false
        }
      })
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
