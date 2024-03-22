import { assertStrictEquals } from "https://deno.land/std@0.220.1/testing/asserts.ts";
import { sweetid, type SweetIdSize } from "./mod.ts";

const tests = [
  { type: "xshort", size: 6 },
  { type: "xs", size: 6 },
  { type: "short", size: 12 },
  { type: "s", size: 12 },
  { type: "medium", size: 24 },
  { type: "m", size: 24 },
  { type: "long", size: 48 },
  { type: "l", size: 48 },
  { type: "xlong", size: 96 },
  { type: "xl", size: 96 },
] as const satisfies ReadonlyArray<{ type: SweetIdSize; size: number }>;

tests.forEach(({ type, size }) => {
  Deno.test(`sweetid() returns an ID of type '${type}' with a length of ${size}`, () => {
    assertStrictEquals(sweetid(type).length, size);
  });
});
