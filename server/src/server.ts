import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './routers/user.router.ts';
 
const server = createHTTPServer({
  router: appRouter,
  basePath: "/trpc/",
//   createContext() {
//     return {};
//   },
})


server.listen(4000, () => {
    console.log('server is running');
})