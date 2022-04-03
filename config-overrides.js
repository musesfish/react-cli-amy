const path = require('path')
const { override, fixBabelImports, addLessLoader ,addWebpackAlias} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addWebpackAlias({
    "@pages": path.resolve(__dirname, "src/pages"),
    "@components": path.resolve(__dirname, "src/components"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@config": path.resolve(__dirname, "src/config"),
    "@models": path.resolve(__dirname, "src/models"),
    "@service": path.resolve(__dirname, "src/service"),
    "@utils": path.resolve(__dirname, "src/utils")
  })
);