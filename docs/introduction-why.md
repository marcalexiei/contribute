# Introduction

## Purpose

This site maintains the shared setup guide used by all my repositories.

## This seems useless... why have you done it?

> [!TIP]
> Rather than copying and pasting the same steps into every repo,
> this central snippet keeps your setup instructions dry and consistent.

::: details Try a robust deploy with GitHub Actions {open}

Only the `main` branch triggers the `CD` workflow—after the `CI` workflow
completes successfully.

<!-- prettier-ignore -->
> [!NOTE]
> `workflow_dispatch` trigger has been added for maintenance purpose.

<<< @/../.github/workflows/cd.yml#triggers

However, be aware:
the `CD` workflow will fire whenever `CI` finishes—regardless of success or failure.

To ensure deployments only run on successful `CI`,
you have to check the `conclusion` property of `github.event.workflow_run`:

<<< @/../.github/workflows/cd.yml#condition

<!-- prettier-ignore -->
> [!NOTE]
> The `github.event_name` check is required to allow manual dispatches as well.

:::
