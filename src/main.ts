import { SweetId, SweetIdSize } from "./const.ts";
import { generate, getIdLength, validate } from "./utils.ts";

export function sweetid(size: SweetIdSize = "short"): SweetId {
  const id = generate(getIdLength(size));

  return validate(id) ? id : sweetid(size);
}
