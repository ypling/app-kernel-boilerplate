module.exports = {
  context: __dirname + "/src",
  entry: "./server/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  target: 'node'
};
