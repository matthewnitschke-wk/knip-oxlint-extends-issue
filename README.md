## Knip + oxlint + `extends` replication

Replicating an issue with knip's oxlint plugin demonstrating that it ignores the `extends` keyword


### Running

```sh
pnpm install
pnpm knip
```

Observe that the output is:

```console
$ pnpm knip
Unused devDependencies (1)
eslint-plugin-formatjs  package.json:11:6
```

Since `other.config.ts` includes `eslint-plugin-formatjs` in its `jsPlugins` array, and `other.config.ts` is imported in `oxlint.config.ts`, the above error _should not_ occur
