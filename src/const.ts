import { ArgParsingOptions, Args } from "../deps.ts";

export type SweetId = string & {
  __flavor?: "SweetId";
};

export type SweetIdSize =
  | "short"
  | "medium"
  | "long"
  | "xlong"
  | "s"
  | "m"
  | "l"
  | "x";

export const enum CharSets {
  Alphanumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  Decimal = "0123456789",
}

export interface Sizes extends Args {
  short: boolean;
  medium: boolean;
  long: boolean;
  xlong: boolean;
}

export const options: ArgParsingOptions = {
  alias: {
    short: "s",
    medium: "m",
    long: "l",
    xlong: "x",
  },
};
