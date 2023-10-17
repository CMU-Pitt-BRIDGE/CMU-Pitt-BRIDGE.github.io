# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Environment Variables

Remember to copy the `.env`, `.env.production`, `.env.development`, and `.env.test` files and rename them to `.env.local`, `.env.production.local`, `.env.development` and `.env.test.local` respectively.

- Running `NODE_ENV=development npm ...` will load `.env.development.local`.
- Running `NODE_ENV=test npm ...` will load `.env.test.local`.
- Running `NODE_ENV=production ...` will load `.env.production.local`.
- If `NODE_ENV` is not specified, it defaults to `development`.

## Blog

Currently, blog is disabled. Please change the `docusaurus.config.js` configuration to re-enable:

1. In `presets` remove `blog: false,` and uncomment the lines before it.
2. In `themeConfig` uncomment the line: `// { to: "/blog", label: "Blog", position: "left" },
`
