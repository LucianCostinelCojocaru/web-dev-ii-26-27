import originalCopy from '../assets/text-content.md?raw';

const copy = originalCopy.replace(/\r\n/g, '\n').trim();
const [article, author, readerComments] = copy.split(/^## (?:The Author|Comments)$/m);
const [title, introduction, ...body] = article.trim().split(/\n[ \t]*\n+/);
const [titleName, subtitle] = title.slice(2).split(': ');
const [biography, copyright] = author.trim().split(/\n[ \t]*\n+/);

// The supplied Markdown uses level-two headings and blank lines between paragraphs.
const articleBlocks = body.flatMap((block) => {
  if (!block.startsWith('## ')) {
    return [{ type: 'paragraph', text: block.trim() }];
  }

  const [heading, ...lines] = block.split('\n');
  return [
    { type: 'heading', text: heading.slice(3) },
    { type: 'paragraph', text: lines.join('\n').trim() },
  ];
});

const comments = readerComments.trim().split(/\n[ \t]*\n+/).map((block) => {
  const [nameLine, ...lines] = block.split('\n');
  return {
    name: nameLine.trim().slice(2, -2),
    text: lines.join('\n').trim(),
  };
});

export { articleBlocks, biography, comments, copyright, introduction, subtitle, titleName };
