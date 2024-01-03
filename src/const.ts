import { ParseOptions } from "../deps.ts";

const FLAVOR = Symbol('FLAVOR');

export type SweetId = string & {
  [FLAVOR]?: "SweetId";
};

export const BLOCK_SIZE = 6;

export const BlockCount = {
  short: 1,
  s: 1,
  medium: 2,
  m: 2,
  long: 4,
  l: 4,
  xlong: 8,
  xl: 8,
} as const;

export type SweetIdSize = keyof typeof BlockCount;

export const CharSets = {
  Alphanumeric:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  Decimal: "0123456789",
} as const;

export const options: ParseOptions = {
  alias: {
    count: "c",
    size: "s",
  },

  default: {
    count: 1,
    size: "short",
  },
};
