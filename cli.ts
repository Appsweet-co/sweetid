import { parseArgs } from "./deps.ts";
import { options } from "./src/const.ts";
import { sweetid } from "./src/main.ts";

const { count, size } = parseArgs(Deno.args, options);

for (let i = count; i > 0; i--) {
  console.log(sweetid(size));
}
