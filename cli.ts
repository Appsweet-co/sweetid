import { parseArgs } from "./deps.ts";
import { options, USAGE } from "./src/const.ts";
import { sweetid } from "./src/main.ts";

const { count, size, help } = parseArgs(Deno.args, options);

if (help) {
  console.log(USAGE);
  Deno.exit();
}

for (let i = count; i > 0; i--) {
  console.log(sweetid(size));
}
