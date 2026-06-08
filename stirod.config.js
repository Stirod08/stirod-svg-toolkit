export default {
  iconsDir: "./svg-icons",

  output: {
    sprite: "./public/icons/sprite.svg",
    generated: "./src/generated",
  },

  generate: {
    types: true,
    metadata: true,
    preview: true,
  },
};
