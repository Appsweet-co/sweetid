import { SweetId, SweetIdSize } from "./const.ts";
import { generate, getIdLength, isValid } from "./service.ts";

export function sweetid(size: SweetIdSize = "short"): SweetId {
  const id = generate(getIdLength(size));

  if (isValid(id)) return id;

  return sweetid(size);
}
