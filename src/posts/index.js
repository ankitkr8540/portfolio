const markdownContext = require.context('./', false, /\.md$/);
const markdownModules = markdownContext.keys().map((filePath) => {
  const module = markdownContext(filePath);
  return module.default || module;
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw.trim() };

  const meta = {};
  match[1].split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      // Array: ['a', 'b'] or [a, b]
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^['"]|['"]$/g, ''));
    } else if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }

    meta[key] = value;
  });

  return { meta, content: match[2].trim() };
}

export const posts = markdownModules
  .map(parseFrontmatter)
  .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

export function getPostBySlug(slug) {
  return posts.find((p) => p.meta.slug === slug) || null;
}
