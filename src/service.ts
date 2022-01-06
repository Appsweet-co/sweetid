import { CharSets, Sizes, SweetId, SweetIdSize } from "./const.ts";
import { Args, customAlphabet } from "../deps.ts";

export function generate(length: number): SweetId {
  return customAlphabet(CharSets.Alphanumeric, length)();
}

export function isValid(id: SweetId): boolean {
  return !CharSets.Decimal.split("").some((item) => id[0] === item);
}

export function getIdLength(size: SweetIdSize): number {
  const BLOCK_SIZE = 6;

  if (size === "short" || size === "s") return BLOCK_SIZE * 1;
  if (size === "medium" || size === "m") return BLOCK_SIZE * 2;
  if (size === "long" || size === "l") return BLOCK_SIZE * 3;
  if (size === "xlong" || size === "x") return BLOCK_SIZE * 4;

  return BLOCK_SIZE * 1;
}

export function getSizeString(args: Sizes | Args): SweetIdSize {
  if (args.small) return "short";
  if (args.medium) return "medium";
  if (args.long) return "long";
  if (args.xlong) return "xlong";

  return "short";
}
