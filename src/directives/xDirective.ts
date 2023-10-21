import {visit} from 'unist-util-visit';
import {h} from 'hastscript';

export default () => {
  return (tree: any) => {
    visit(tree, function (node) {
      if (['containerDirective', 'leafDirective', 'textDirective'].includes(node.type)) {
        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';
        if (node.name === 'x') {
          data.hName = tagName;
          data.hProperties = h(tagName, node.attributes || {}).properties;
        } else {
          // console.log('directive', node)
        }
      }
    })
  }
}