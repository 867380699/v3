import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, [rehypeToc, {}]]
  },
  integrations: [preact(), tailwind(), mdx()]
});