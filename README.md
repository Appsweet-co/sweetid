<p align="center">
  <img src="assets/readme/logo.svg" alt="Logo" height="150" width="auto" />
</p>

<h1 align="center">Sweet ID</h1>

<p align="center">
  <b>Alphanumeric, cryptographically secure IDs</b>
</p>

<br />

## Quick Start

Import `sweetid()` directly into your projects.

```ts
import {
  SweetId,
  sweetid,
} from "https://deno.land/x/foo/bar/baz@v0.0.4/mod.ts";

const id: SweetId = sweetid();
// => CUXuq1
```

Or use it on the command line.

```zsh
deno run https://deno.land/x/foo/bar/baz@v0.0.4/cli.ts
# buGdUo
```

## Details

Use `sweetid()` to generate [cryptographically secure](#security) IDs with a
length of 6, 12, 18, or 24 alphanumeric characters. IDs will always start with a
letter of the alphabet. This means you can use them for HTML `id` attributes.

## ID Length

Pass in an optional [`SweetIdSize`](./src/const.ts) as the first argument to set
the output size of the ID. IDs are 6 characters long by default.

```ts
sweetid();
// => aklxIt

sweetid("small" || "s");
// => hBuWX4

sweetid("medium" || "m");
// => b1eOHzXq6iK0

sweetid("long" || "l");
// => Rk3ulcSjeoyigV1zYn

sweetid("xlong" | "x");
// => CYhSN6DvdNZajwKhDjmdFXAD
```

## Security

We use [Nano ID](https://github.com/ai/nanoid) under the hood to guarantee
high-quality, cryptographically secure IDs.
