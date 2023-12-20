import { assertStrictEquals } from "https://deno.land/std@0.120.0/testing/asserts.ts";
import { sweetid, SweetIdSize } from "./mod.ts";

const tests = [
  { type: "short", size: 6 },
  { type: "s", size: 6 },
  { type: "medium", size: 12 },
  { type: "m", size: 12 },
  { type: "long", size: 18 },
  { type: "l", size: 18 },
  { type: "xlong", size: 24 },
  { type: "xl", size: 24 },
] as const satisfies ReadonlyArray<{ type: SweetIdSize; size: number }>;

tests.forEach(({ type, size }) => {
  Deno.test(`sweetid() returns an ID of type '${type}' with a length of ${size}`, () => {
    assertStrictEquals(sweetid(type).length, size);
  });
});
