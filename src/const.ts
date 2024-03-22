import { ParseOptions } from "../deps.ts";

const FLAVOR = Symbol('FLAVOR');

export type SweetId = string & {
  [FLAVOR]?: "SweetId";
};

export const BLOCK_SIZE = 6;

export const BlockCount = {
  xshort: 1,
  xs: 1,
  short: 2,
  s: 2,
  medium: 4,
  m: 4,
  long: 8,
  l: 8,
  xlong: 16,
  xl: 16,
} as const;

export type SweetIdSize = keyof typeof BlockCount;

export const CharSets = {
  Alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  Decimal: "0123456789",
} as const;

export const options: ParseOptions = {
  alias: {
    count: "c",
    size: "s",
  },

  default: {
    count: 1,
    size: "xshort",
  },
};
