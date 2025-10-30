# Trusted publishing

This package uses Trusted Publishing, which securely handles authentication.\
As a result, an NPM_TOKEN is not required or stored in the repository secrets.

> [!IMPORTANT]
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
>   uses: actions/setup-node@v6
>   with:
>     node-version-file: '.nvmrc'
>     cache: 'pnpm'
>     registry-url: 'https://registry.npmjs.org'
> ```

---

> [!CAUTION]
> Before publishing, ensure that Trusted Publishing is enabled in npm package settings.\
> This is a critical security feature that must be configured for successful deployment.\
> Yes, I forget do that 😅.

## References

- <https://docs.npmjs.com/trusted-publishers>
- <https://github.blog/changelog/2025-07-31-npm-trusted-publishing-with-oidc-is-generally-available/>
