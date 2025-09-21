# speirs.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a5730bc-4386-4a96-aaeb-58ab996dabb9/deploy-status)](https://app.netlify.com/sites/afspeirs/deploys)
![GitHub package.json version](https://img.shields.io/github/package-json/v/afspeirs/speirs.dev)
[![LICENSE](https://img.shields.io/github/license/afspeirs/speirs.dev)](LICENSE)

A website to showcase projects created by [AFSpeirs](https://github.com/afspeirs)

## Available Scripts

### start

Runs the site in the development mode.

```bash
npm start

#### or start the server and open the app in a new browser tab
npm start -- --open
```

### build

Build the project for production

```bash
npm run build
```

### preview

Used to preview the contents of a production build

```bash
npm run preview

# Commonly used with the build command
npm run build && npm run preview
```

### lint

Lint the project and returns issues if any are found.

```bash
npm run lint
```

### check

Check for typescript issues in the project

```bash
npm run check

# Can also watch for changes to files
npm run check:watch
```

### test

Run the end to end (e2e) test scripts

```bash
npm run test
```

To visually view the tests running

```bash
npm run test:open
```
