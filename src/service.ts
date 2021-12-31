import { CharSets, Sizes } from "./const.ts";
import { Args, customAlphabet } from "../deps.ts";

export function generate(size: number): string {
  return customAlphabet(CharSets.Alphanumeric, size)();
}

export function isValid(id: string): boolean {
  return !CharSets.Decimal.split("").some((item) => id[0] === item);
}

export function getSize(sizes: Sizes | Args): number {
  const BLOCK_SIZE = 6;

  if (sizes.small) return BLOCK_SIZE * 1;
  if (sizes.medium) return BLOCK_SIZE * 2;
  if (sizes.long) return BLOCK_SIZE * 3;
  if (sizes.xlong) return BLOCK_SIZE * 4;

  return BLOCK_SIZE * 1;
}
