/** Tailwind config for theintentionaltea.com
 *
 * Replaces the Tailwind Play CDN (cdn.tailwindcss.com), which logs its own console warning against
 * production use and ships the entire compiler to every visitor on every page load.
 *
 * The site uses stock Tailwind with no customisation — no inline tailwind.config existed anywhere —
 * so this is deliberately bare. Arbitrary values like text-[#1a1a1a]/65 are handled by the JIT
 * engine as long as the content globs below see the file that uses them.
 */
module.exports = {
  content: [
    './*.html',
    './shop/*.html',
  ],
  theme: { extend: {} },
  plugins: [],
};
