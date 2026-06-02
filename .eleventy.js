module.exports = function(eleventyConfig) {
  // Copy static assets unchanged
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");

  // Pass through all existing HTML pages (don't process them as templates)
  // blog.html is excluded — blog.njk generates it instead
  eleventyConfig.ignores.add("blog.html");

  // Exclude internal/operational files from the build
  eleventyConfig.ignores.add(".claude/**");
  eleventyConfig.ignores.add("content-audit/**");
  eleventyConfig.ignores.add("products/**");
  eleventyConfig.ignores.add("node_modules/**");

  // Date filter for post display
  eleventyConfig.addFilter("postDate", (dateStr) => {
    const d = dateStr instanceof Date ? dateStr : new Date(dateStr + "T12:00:00");
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  });

  // Short date for structured data
  eleventyConfig.addFilter("isoDate", (dateStr) => {
    const d = dateStr instanceof Date ? dateStr : new Date(dateStr + "T12:00:00");
    return d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    // Don't process .html files as Nunjucks — copy them as-is
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
  };
};
