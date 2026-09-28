# PNPM and NVM Setup

This repository uses:

- `node` via [`nvm`](https://github.com/nvm-sh)
- `pnpm` as package manager via [`corepack`](https://nodejs.org/api/corepack.html).

::: tip
If you do not have any of this tool installed follow
the instructions on their relative site.
:::

---

1. Use project specific Node version (version is located in `.nvmrc` file)

   ```shell
   nvm use
   ```

2. Install and enable `corepack` (no longer bundled with Node.js from v25)

   ```shell
   npm install -g corepack
   corepack enable
   ```

3. Use `pnpm` via `corepack`

   ```shell
   corepack install
   ```
