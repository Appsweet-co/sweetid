import { parse } from "./deps.ts";
import { options } from "./src/const.ts";
import { sweetid } from "./src/main.ts";
import { getSizeString } from "./src/service.ts";

const args = parse(Deno.args, options);

const size = getSizeString(args);

sweetid(size);
