const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"), //путь к входному файлу
      filename: "index.html", //имя выходного файла
    }),
  ],
};
