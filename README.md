<p align="center">
  <img src="assets/readme/logo.png" alt="Logo" height="150" width="auto" />
</p>

<h1 align="center">Sweet ID</h1>

<p align="center">
  <b>Alphanumeric IDs, powered by Nano ID</b>
</p>

<br />

<p align="center">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/Appsweet-co/sweetid?sort=semver&style=for-the-badge">
</p>

<br />

## Quick Start

Import `mod.ts` directly into your project.

```ts
import { sweetid } from "https://deno.land/x/sweetid/mod.ts";

sweetid();
// => CUXuq1
```

Or use Sweet ID in the command line.

```zsh
deno run https://deno.land/x/sweetid/cli.ts
# buGdUo
```

## Details

We use [Nano ID](https://github.com/ai/nanoid) under the hood to guarantee
high-quality, cryptographically secure IDs.

Sweet IDs are alphanumeric and always start with a letter.

## ID Length

The `sweetid()` function generates IDs with a length 6, 12, 18, or 24
characters. IDs are 6 characters long by default.

Pass in an optional [`SweetIdSize`](./src/const.ts) as the first argument to set
the output size of the ID.

```ts
sweetid("short" || "s");
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
deno run https://deno.land/x/sweetid/cli.ts --short || -s
# PLmh1V

deno run https://deno.land/x/sweetid/cli.ts --medium || -m
# so24iHcuI86i

deno run https://deno.land/x/sweetid/cli.ts --long || -l
# lugJNFIFYYLWJ8SAnb

deno run https://deno.land/x/sweetid/cli.ts --xlong || -x
# NsiHnUqK3cbADQ9cIzsi0Og0
```

## Generate Multiple IDs

Use the `--count <NUMBER>` (`-c <NUMBER>`) flag on the command line to generate
multiple IDs of the same length.

```zsh
deno run https://deno.land/x/sweetid/cli.ts --count 3 || -c 3
# hrWYHA
# GlTos0
# YRH3Xe

deno run https://deno.land/x/sweetid/cli.ts --medium --count 3 || -m -c 3
# C71kkaC0BRSn
# CkBfX6pEjPDL
# siQRcoFa8fTz
```

## TypeScript Types

Use [`SweetId`](src/const.ts) and [`SweetIdSize`](src/const.ts) to add type info
to your project. This is great for things like custom wrapper functions.

```ts
import type { SweetId, SweetIdSize } from "https://deno.land/x/sweetid/mod.ts";
import { sweetid } from "https://deno.land/x/sweetid/mod.ts";

export function customSweetId(size: SweetIdSize = "medium"): SweetId {
  return sweetid(size);
}
```

_**NOTE: `SweetId` is a
[flexible nominal type](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/)
and plays nicely with generic `string` types if needed.**_
