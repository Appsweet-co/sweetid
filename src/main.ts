import { SweetId, SweetIdSize } from "./const.ts";
import { generate, getIdLength, validate } from "./service.ts";

export function sweetid(size: SweetIdSize = "short"): SweetId {
  const id = generate(getIdLength(size));
  
  return validate(id) ? id : sweetid(size);
}
