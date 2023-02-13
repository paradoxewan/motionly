import { render } from "./routers/render";
import { projects } from "./routers/projects";
import { createTRPCRouter } from "./trpc";
import { stock } from "./routers/stock";
import { ai } from "./routers/ai";
import { media } from "./routers/media";
import { transcriptions } from "./routers/transcriptions";
import { keys } from "./routers/keys";

export const appRouter = createTRPCRouter({
  projects,
  render,
  stock,
  ai,
  media,
  transcriptions,
  keys
});

export type AppRouter = typeof appRouter;
