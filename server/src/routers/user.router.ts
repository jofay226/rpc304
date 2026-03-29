import { prisma } from '../db/db.ts';
import { publicProcedure, router } from '../trpc/trpc.ts';
import z from 'zod';
 
export const appRouter = router({
  getAllUsers: publicProcedure.query( async () => await prisma.findMany()),
  getSingleUser: publicProcedure.input(z.object({id: z.string()})).query(({input}) => {

    const user = prisma.findUnique(input.id) 

    return user
  })
});
 

export type AppRouter = typeof appRouter;


