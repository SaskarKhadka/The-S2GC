(async ({ chrome, netscape }) => {
  // add Safari polyfill if needed
  if (!chrome && !netscape)
    await import("https://unpkg.com/@ungap/custom-elements");

  const { default: HighlightedCode } = await import(
    "https://unpkg.com/highlighted-code"
  );

  // bootstrap a theme through one of these names
  // https://github.com/highlightjs/highlight.js/tree/main/src/styles
  HighlightedCode.useTheme("github-dark");
})(self);
