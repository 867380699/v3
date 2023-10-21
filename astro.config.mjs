import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkDirective from 'remark-directive';
import remarkBreaks from 'remark-breaks';
import remarkEmoji from 'remark-gemoji';
import remarkTwemoji from 'remark-twemoji';

import xDirective from './src/directives/xDirective.ts';
import iDirective from './src/directives/iDirective.ts';


import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [
      remarkBreaks,
      remarkEmoji,
      // remarkTwemoji,
      remarkDirective,
      xDirective,
      iDirective
    ],
    rehypePlugins: [
      rehypeSlug, 
      [rehypeAutolinkHeadings, { behavior: 'wrap'}], 
      [rehypeToc, {}]
    ]
  },
  integrations: [preact(), tailwind(), mdx()]
});