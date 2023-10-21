import {visit} from 'unist-util-visit';
import {h, s} from 'hastscript';

import { locate } from '@iconify/json';
import { readFileSync } from 'node:fs';
import { getIconsCSSData } from '@iconify/utils/lib/css/icons';

const cache = new Map<string, any>;

const getIconSet = (prefix: string) => {
  const filename = locate(prefix) as string;
  if (!cache.get(filename)) {
    cache.set(filename, JSON.parse(readFileSync(filename, 'utf8')));
  }
  return cache.get(filename);
}

export default () => {
  return (tree: any) => {
    visit(tree, function (node) {
      if (['containerDirective', 'leafDirective', 'textDirective'].includes(node.type)) {
        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';
        if (node.name === 'i') {
          const logo: string = node.attributes.id;
          if (logo) {
            // console.log('iDirective', node);
            const [prefix, icon] = logo.split(':');
            
            const iconSet = getIconSet(prefix);
            const cssData = getIconsCSSData(iconSet,[icon]);
            const style = cssData.css.reduce((s,d)=>{
              Object.assign(s,d.rules)
              return s
            },{})

            data.hName = tagName;
            data.hProperties = h(tagName, {style: {
              ...style,
              'vertical-align': 'middle'
            }}).properties;
          }
        }
      }
    })
  }
}