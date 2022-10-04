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

The `sweetid()` function generates IDs with a length 6, 12, 24, or 48
characters. IDs are 6 characters long by default.

Pass in an optional [`SweetIdSize`](./src/const.ts) as the first argument to set
the output size of the ID.

```ts
sweetid("short" || "s");
// => MkSofu

sweetid("medium" || "m");
// => bzAuoVKRo1rJ

sweetid("long" || "l");
// => XGPCQUqrEVMzMyaU4V52u1LQ

sweetid("xlong" | "xl");
// => dRjFNY7TrZFqizgKLBwWXAQSErCk51gheMFlBNVAZFM5DuLr
```

Use the `--size <SweetIdSize>` (`-s <SweetIdSize>`) flag on the command line to
set the output size.

```zsh
deno run https://deno.land/x/sweetid/cli.ts -s s
# HrcZ9u

deno run https://deno.land/x/sweetid/cli.ts -s m
# s75rHr14EJYJ

deno run https://deno.land/x/sweetid/cli.ts -s l
# rCJLcqqHW4yuvsSeGPH4INok

deno run https://deno.land/x/sweetid/cli.ts -s xl
# hMASSfdHZDbpZFHL2UZFWEduk6Ltt5OcxaidVcxXU1K0cyyD
```

## Generate Multiple IDs

Use the `--count <NUMBER>` (`-c <NUMBER>`) flag on the command line to generate
multiple IDs of the same length.

```zsh
deno run https://deno.land/x/sweetid/cli.ts -c 3
# B4a6Xc
# uRYkkT
# NJZtjW

deno run https://deno.land/x/sweetid/cli.ts -s l -c 3
# hxzRSWPX5TDcQieHk2B7fPkA
# LXaAyksi6d3HgCAyw2Y4EKM8
# sZhCDNUjQRJzptbNqGco1HdL
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
