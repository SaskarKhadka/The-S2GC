(async ({ chrome, netscape }) => {
  if (!chrome && !netscape)
    await import("https://unpkg.com/@ungap/custom-elements");
  const { default: HighlightedCode } = await import(
    "https://unpkg.com/highlighted-code"
  );
  HighlightedCode.useTheme("github-dark");
})(self);
