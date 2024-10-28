# Introduction

## Purpose

This site is used to host common setup instructions between my repositories.

## This seems useless... why have you done it?

::: tip
This is useful to avoid copy paste the same instructions every time.
:::

::: details Tryout a more “solid” deploy approach using GitHub Actions {open}

Only on `main` branch, after a completed run of `CI` workflow,
the `CD` workflow is triggered:

<!-- prettier-ignore -->
> [!NOTE]
> `workflow_dispatch` trigger has been added for maintenance purpose.

<<< @/../.github/workflows/CD.yml#triggers

However there is a caveat: the `CD` workflow is called after `CI` is completed,
whenever the result is.

In order to execute the `CD` workflow `deploy` and `deploy` jobs
you have to check the `conclusion` property of `github.event.workflow_run`.

<<< @/../.github/workflows/CD.yml#condition

<!-- prettier-ignore -->
> [!NOTE]
> `github.event_name` is checked to allow manual deploy

:::
