const config = {
  mode: "production",
  entry: {
    main: "./src/js/main.js",
    swiper:"./src/js/swiper.js"
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
