import { SweetId, SweetIdSize } from "./const.ts";
import { generate, getIdLength, isValid } from "./service.ts";

export function sweetid(size: SweetIdSize = "short"): SweetId {
  const id = generate(getIdLength(size));

  return isValid(id) ? id : sweetid(size);
}
