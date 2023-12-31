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
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeDocument from 'rehype-document';

import xDirective from './src/remark/directive/xDirective.ts';
import iDirective from './src/remark/directive/iDirective.ts';


import mdx from "@astrojs/mdx";

const base = process.env.ASTRO_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base,
  markdown: {
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [
      remarkBreaks,
      remarkEmoji,
      remarkMath,
      // remarkTwemoji,
      remarkDirective,
      xDirective,
      iDirective
    ],
    rehypePlugins: [
      rehypeSlug, 
      [rehypeAutolinkHeadings, { behavior: 'wrap'}], 
      [rehypeToc, {}],
      [rehypeDocument, {}],
      rehypeKatex,
    ]
  },
  integrations: [preact(), tailwind(), mdx()]
});