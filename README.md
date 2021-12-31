<p align="center">
  <img src="assets/readme/logo.svg" alt="Logo" height="150" width="auto" />
</p>

<h1 align="center">Sweet ID</h1>

<p align="center">
  <b>Alphanumeric, cryptographically secure IDs</b>
</p>

<br />

## Quick Start

```ts
import { sweetid } from "https://deno.land/x/foo/bar/baz@v0.0.4";

sweetid() || sweetid("s") || sweetid("small");
// => CUXuq1

sweetid("m") || sweetid("medium");
// => X0Y0AwhJR0bz

sweetid("l") || sweetid("long");
// => Qv6LdldbSfeNlRJFEi

sweetid("x") || sweetid("xlong");
// => fKvmFV9Lw9NKNQ7xQ5A3Jctf
```
