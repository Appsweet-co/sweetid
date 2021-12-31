import { options } from "./const.ts";
import { parse } from "../deps.ts";
import { generate, getSize, isValid } from "./service.ts";

const args = parse(Deno.args, options);

function main(): string {
  const size = getSize(args);
  const id = generate(size);

  if (isValid(id)) {
    console.log(id);
    return id;
  }

  return main();
}

main();
