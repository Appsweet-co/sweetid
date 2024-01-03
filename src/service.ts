import { customAlphabet } from "../deps.ts";
import {
  BLOCK_SIZE,
  BlockCount,
  CharSets,
  SweetId,
  SweetIdSize,
} from "./const.ts";

export function generate(length: number): SweetId {
  return customAlphabet(CharSets.Alphanumeric, length)();
}

export function validate(id: SweetId): boolean {
  return !CharSets.Decimal.split("").some((item) => id[0] === item);
}

export function getIdLength(size: SweetIdSize): number {
  return BlockCount[size] ? BLOCK_SIZE * BlockCount[size] : BLOCK_SIZE;
}
