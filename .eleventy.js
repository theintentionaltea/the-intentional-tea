module.exports = function(eleventyConfig) {
  // Copy static assets unchanged
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");

  // Pass through all existing HTML pages (don't process them as templates)
  // blog.html is excluded — blog.njk generates it instead
  eleventyConfig.ignores.add("blog.html");

  // Date filter for post display
  eleventyConfig.addFilter("postDate", (dateStr) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  });

  // Short date for structured data
  eleventyConfig.addFilter("isoDate", (dateStr) => {
    return new Date(dateStr + "T12:00:00").toISOString().slice(0, 10);
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
