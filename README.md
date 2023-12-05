# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── remark/
│   └── style/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any `Astro`/`React`/`Vue`/`Svelte`/`Preact` components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:4321`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |


## Custom Markdown

### Directive

You can use `:x` to add classes or styles.


```md
:::x{.demo}
::x[**Hello Arial**]{style="font-family: Arial"}
:::
```

use `:i` to add an icon.

```md
:i{#icon-park:experiment}
```

You can search icon from [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
