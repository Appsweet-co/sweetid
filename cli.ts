import { parse } from "./deps.ts";
import { options } from "./src/const.ts";
import { sweetid } from "./src/main.ts";

const args = parse(Deno.args, options);

const { count, size } = args;

for (let i = count; i > 0; i--) {
  console.log(sweetid(size));
}
