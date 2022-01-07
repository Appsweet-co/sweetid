import { assertStrictEquals } from "https://deno.land/std@0.120.0/testing/asserts.ts";
import { sweetid, SweetIdSize } from "./mod.ts";

const tests: ReadonlyArray<{ type: SweetIdSize; size: number }> = [
  { type: "short", size: 6 },
  { type: "medium", size: 12 },
  { type: "long", size: 18 },
  { type: "xlong", size: 24 },
];

tests.forEach((test) => {
  const { type, size } = test;
  Deno.test(`sweetid() returns an ID of type '${type}' with a length of ${size}`, () => {
    assertStrictEquals(sweetid(type).length, size);
  });
});
