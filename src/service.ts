import { customAlphabet } from "../deps.ts";
import { CharSets, SweetId, SweetIdSize } from "./const.ts";

export function generate(length: number): SweetId {
  return customAlphabet(CharSets.Alphanumeric, length)();
}

export function isValid(id: SweetId): boolean {
  return !CharSets.Decimal.split("").some((item) => id[0] === item);
}

export function getIdLength(size: SweetIdSize): number {
  const BLOCK_SIZE = 6;

  if (size === "xshort" || size === "xs") return BLOCK_SIZE * 1;
  if (size === "short" || size === "s") return BLOCK_SIZE * 2;
  if (size === "medium" || size === "m") return BLOCK_SIZE * 3;
  if (size === "long" || size === "l") return BLOCK_SIZE * 4;
  if (size === "xlong" || size === "xl") return BLOCK_SIZE * 5;

  return BLOCK_SIZE * 1;
}
