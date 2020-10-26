import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Application, Context } from 'https://deno.land/x/oak/mod.ts';
import { green, yellow, bold } from "https://deno.land/std@0.56.0/fmt/colors.ts";

import router from './routes.ts';


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(config().PORT ?? 8080);
const hostname = config().HOST ?? '127.0.0.1';


console.log(bold(yellow('Deno is running: ') + green(`${hostname}:${port}`)));
await app.listen({ port, hostname }).then(() => {
});
