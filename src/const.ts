import { ArgParsingOptions } from "../deps.ts";

export type SweetId = string & {
  __flavor?: "SweetId";
};

export type SweetIdSize =
  | "xshort"
  | "short"
  | "medium"
  | "long"
  | "xlong"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl";

export const enum CharSets {
  Alphanumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  Decimal = "0123456789",
}

export const options: ArgParsingOptions = {
  alias: {
    count: "c",
    size: "s",
  },

  default: {
    count: 1,
    size: "xshort",
  },
};
