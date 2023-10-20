import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkDirective from 'remark-directive';
import remarkBreaks from 'remark-breaks';
import {visit} from 'unist-util-visit';
import {h} from 'hastscript';


import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [
      remarkBreaks,
      remarkDirective,
      () => {
        return (tree, file) => {
          visit(tree, function (node) {
            if (['containerDirective', 'leafDirective', 'textDirective'].includes(node.type)) {
              const data = node.data || (node.data = {});
              const tagName = node.type === 'textDirective' ? 'span' : 'div';
              if (node.name === 'x') {
                data.hName = tagName;
                data.hProperties = h(tagName, node.attributes || {}).properties;
              } else if (node.name === 'demo') {
                data.hName = tagName;
                data.hProperties = h(tagName, {class: 'demo'}).properties;
              } else {
                console.log('directive', node)
              }
            }
          })
        }
      }
    ],
    rehypePlugins: [
      rehypeSlug, 
      [rehypeAutolinkHeadings, { behavior: 'wrap'}], 
      [rehypeToc, {}]
    ]
  },
  integrations: [preact(), tailwind(), mdx()]
});