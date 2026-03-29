import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './routers/user.router.ts';
import cors from "cors";
 
const server = createHTTPServer({
  router: appRouter,
  basePath: "/trpc/",
  middleware: cors({
    origin: "http://localhost:3000"
  }),
  createContext() {
    return {role: 'admin'};
  },
})


server.listen(4000, () => {
    console.log('server is running');
})