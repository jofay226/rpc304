import { publicProcedure, router } from '../trpc/trpc.ts';
 
export const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v11!'),
  getDate: publicProcedure.query(() => new Date().toISOString()),
});
 

export type AppRouter = typeof appRouter;
