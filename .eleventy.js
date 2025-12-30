module.exports = function (eleventyConfig) {
  // Copy `images/` to `_site/images/`
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("downloads");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
