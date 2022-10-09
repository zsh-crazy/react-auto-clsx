module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "react-auto-clsx",
      },
    ],
  ],
  compact: false
};
