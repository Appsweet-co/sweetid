<p align="center">
  <img src="assets/readme/logo.svg" alt="Logo" height="150" width="auto" />
</p>

<h1 align="center">Sweet ID</h1>

<p align="center">
  <b>Alphanumeric IDs, powered by Nano ID</b>
</p>

<br />

## Quick Start

Import `sweetid()` directly into your project.

```ts
import { sweetid } from "https://deno.land/x/foo/bar/baz@v0.0.4/mod.ts";

sweetid();
// => CUXuq1
```

Or use Sweet ID in the command line.

```zsh
deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts
# buGdUo
```

## Details

We use [Nano ID](https://github.com/ai/nanoid) under the hood to guarantee
high-quality, cryptographically secure IDs.

Sweet ID are alphanumeric and always start with a letter.

## ID Length

The `sweetid()` function generates IDs with a length 6, 12, 18, or 24
characters. IDs are 6 characters long by default.

Pass in an optional [`SweetIdSize`](./src/const.ts) as the first argument to set
the output size of the ID.

```ts
sweetid("small" || "s");
// => hBuWX4

sweetid("medium" || "m");
// => b1eOHzXq6iK0

sweetid("long" || "l");
// => Rk3ulcSjeoyigV1zYn

sweetid("xlong" | "x");
// => CYhSN6DvdNZajwKhDjmdFXAD
```

Pass in the same `SweetIdSize` as an optional flag to set the output size on the
command line.

```zsh
deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts --small || -s
# PLmh1V

deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts --medium || -m
# so24iHcuI86i

deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts --long || -l
# lugJNFIFYYLWJ8SAnb

deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts --xlong || -x
# NsiHnUqK3cbADQ9cIzsi0Og0
```

## TypeScript Types

Use [`SweetId`](src/const.ts) and [`SweetIdSize`](src/const.ts) to add type info
to your project. This is great for things like custom wrapper functions.

```ts
import type {
  SweetId,
  SweetIdSize,
} from "https://deno.land/x/foo/bar/baz@v0.0.4/mod.ts";
import { sweetid } from "https://deno.land/x/foo/bar/baz@v0.0.4/mod.ts";

export function customSweetId(size: SweetIdSize = "medium"): SweetId {
  return sweetid(size);
}
```

***NOTE: `SweetId` is a
[flexible nominal type](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/)
and will play nicely with generic `string` types if needed.
