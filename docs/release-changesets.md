# Changesets

## Release Workflow

This workflow automates the release process for the project.
It runs automatically when the CI workflow completes on the `main` branch.

> [!NOTE]
> When changeset files are present, a PR titled chore: release will be opened.
> Merging it will trigger the release process, automatically publishing a new version.

### Authentication

- Uses a GitHub App for authentication
- Configures git user settings using the GitHub App bot credentials
- Implements secure token handling

For more information about credential handling you can see this repository:

- <https://github.com/marcalexiei/changesets-action-playground-app>

### Process Steps

1. **Trigger**: Activates when CI workflow completes on `main` branch
2. **Setup**:
   - Creates GitHub App token
   - Configures git user
   - Checks out code
   - Installs dependencies
3. **Release Action**:
   - Uses [Changesets action](https://github.com/changesets/action) for version management
   - Either creates a release Pull Request
   - Or publishes the package to npm

### Security Features

- Specific permissions model
- Concurrency controls to prevent parallel runs
- GitHub App authentication instead of personal tokens
- npm provenance through ID token permissions

### Failure Handling

Includes a separate job that runs if CI fails,
preventing release execution in case of CI failures.

## Trusted publishing

The package has Trusted publishing enabled so no `NPM_TOKEN` is stored
among repository secrets.

> [!CAUTION]
> Ensure to have a `npm` version `>= 11.5.0` \
> Refs:
>
> - <https://github.com/npm/cli/releases/tag/v11.5.0>
> - <https://github.com/npm/cli/pull/8336>

---

> [!WARNING]
> To avoid 404 errors while publishing,
> be sure to set an explicit registry url:
>
> ```yml
> - name: Setup Node.js (via .nvmrc)
>   uses: actions/setup-node@v4
>   with:
>     node-version-file: '.nvmrc'
>     cache: 'pnpm'
>     registry-url: 'https://registry.npmjs.org'
> ```

---

> [!WARNING]
>
> **THIS NEEDS FURTHER INVESTIGATION**
>
> During setup be sure to create a `.nvmrc` file in the repo,
> this will avoid unauthorized errors when publishing to the registry.
>
> ::: details Ref: 1.0.0 release of `eslint-plugin-zod-x`:
>
> ```text
> an error occurred while publishing eslint-plugin-zod-x:
> ENEEDAUTH This command requires you to be logged in to https://registry.npmjs.org/
> You need to authorize this machine using npm adduser
> npm error code ENEEDAUTH
> npm error need auth This command requires you to be logged in to https://registry.npmjs.org/
> npm error need auth You need to authorize this machine using npm adduser
> npm error A complete log of this run can be found in: [...]
>
> packages failed to publish:
> eslint-plugin-zod-x@1.0.0  ELIFECYCLE  Command failed with exit code 1.
> ```
>
> :::

### References

- <https://docs.npmjs.com/trusted-publishers>
- <https://github.blog/changelog/2025-07-31-npm-trusted-publishing-with-oidc-is-generally-available/>
