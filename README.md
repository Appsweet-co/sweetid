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

The `sweetid()` function generates IDs with a length 6, 12, 18, 24, or 30
characters. IDs are 6 characters long by default.

Pass in an optional [`SweetIdSize`](./src/const.ts) as the first argument to set
the output size of the ID.

```ts
sweetid("xshort" || "xs");
// => hBuWX4

sweetid("short" || "s");
// => Wquah5yfIIzR

sweetid("medium" || "m");
// => Hk1vsftT8rC8nHcMqD

sweetid("long" || "l");
// => wUKmpxmz0Ev6IdRK69vbMPns

sweetid("xlong" | "xl");
// => bdbXvHTcA1en402e9D5RYpg07hCOU1
```

Use the `--size <SweetIdSize>` (`-s <SweetIdSize>`) flag on the command line to
set the output size.

```zsh
deno run https://deno.land/x/sweetid/cli.ts -s xs
# nzcXUU

deno run https://deno.land/x/sweetid/cli.ts -s s
# wBHhb5CmSlem

deno run https://deno.land/x/sweetid/cli.ts -s m
# ZZUlWbUtFCsX6BLnCK

deno run https://deno.land/x/sweetid/cli.ts -s l
# lKhy2y9DueKPgqZLEQ0r09XP

deno run https://deno.land/x/sweetid/cli.ts -s xl
# ogpGsLiLQGwS4SccP4C7ID1tArzTCF
```

## Generate Multiple IDs

Use the `--count <NUMBER>` (`-c <NUMBER>`) flag on the command line to generate
multiple IDs of the same length.

```zsh
deno run https://deno.land/x/sweetid/cli.ts -c 3
# l3V2WTtbEeCs
# Co0qj9SvlsSl
# dEeTjgqAajnp

deno run https://deno.land/x/sweetid/cli.ts -s m -c 3
# ZTBMGbJsyf7CGKRkEf
# les3F2W2EpGe7hr1iM
# EzUQIgK6J7IhZstuzp
```

## TypeScript Types

Use [`SweetId`](src/const.ts) and [`SweetIdSize`](src/const.ts) to add type info
to your project. This is great for things like custom wrapper functions.

```ts
import type { SweetId, SweetIdSize } from "https://deno.land/x/sweetid/mod.ts";
import { sweetid } from "https://deno.land/x/sweetid/mod.ts";

export function customSweetId(size: SweetIdSize = "long"): SweetId {
  return sweetid(size);
}
```

_**NOTE: `SweetId` is a
[flexible nominal type](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/)
and plays nicely with generic `string` types if needed.**_
