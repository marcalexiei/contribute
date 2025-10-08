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
