const { getDefaultConfig } = require('@expo/metro-config');
// const { getMetroConfig, mergeConfig } = require('@cbhq/mobile-runtime');

// const path = require('path');

// const defaultSourceExts = ['ts', 'tsx', 'jsx', 'js', 'cjs', 'json'];
// const defaultE2ESourceExts = defaultSourceExts.map((ext) => `e2e.${ext}`);
// const defaultSourceExtsForE2E = [...defaultE2ESourceExts, ...defaultSourceExts];

// // When running E2E tests with detox, we want to prioritize loading mocked modules.
// const baseSourceExts = process.env.TARGET_ENV?.includes('e2e')
//   ? defaultSourceExtsForE2E
//   : defaultSourceExts;

// function isPackageExportModule(moduleName) {
//   const included = moduleName.startsWith('@cb') || moduleName.startsWith('@wagmi/core');
//   const excluded = moduleName === '@cbhq/typeorm' || moduleName === '@cbhq/mmkv-storage';

//   return included && !excluded;
// }

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {
// Without this, sometimes changes to babel.config.js do not get applied
// resetCache: true,
// transformer: {
//   minifierPath: 'metro-minify-terser',
//   workerPath: require.resolve('metro/src/DeltaBundler/Worker'),
//   getTransformOptions: async () => ({
//     transform: {
//       experimentalImportSupport: false,
//       inlineRequires: true,
//     },
//   }),
// },
// server: {
//   // Implements Retail team's solution to fix DatePickIOS OOM issue: https://github.cbhq.net/consumer/react-native/blob/master/src/packages/app/metro.config.js#L25-L47
//   rewriteRequestUrl: (url) => {
//     const splitUrl = url.split('?');
//     const hasQueryParams = splitUrl?.[1];
//     /*
//      * Temporary fix for Metro bundling error on /symbolicate calls when using
//      * iOS 16.4 due to a regression caused by JSC. The lack of query params in
//      * the URL is only present on iOS 16.4 thus we can just define platform
//      * as IOS.
//      *
//      * See React Native issue: https://github.com/facebook/react-native/issues/36794#issuecomment-1498306479
//      * */
//     // Exclude /json/* URL since it broke JS engine introspection by debuggers such as Hermes Debugger.
//     const jsonPath = /^\/json(\/.+)*/;
//     if (!jsonPath.test(url) && !hasQueryParams) {
//       return `${url}?platform=ios&dev=true&lazy=false&minify=false&modulesOnly=false&runModule=true&inlineSourceMap=true`;
//     }
//     return url.replace('lazy=true', 'lazy=false');
//   },
// },
//   resolver: {
//     sourceExts: process.env.RN_SRC_EXT
//       ? process.env.RN_SRC_EXT.split(',').concat(baseSourceExts)
//       : baseSourceExts,
//     extraNodeModules: {
//       http: path.resolve(__dirname, '../../node_modules/stream-http'),
//       https: path.resolve(__dirname, '../../node_modules/https-browserify'),
//       ':rn': path.resolve(__dirname, './src'),
//     },
//   },
// };

module.exports = getDefaultConfig(__dirname);
// module.exports = mergeConfig(getMetroConfig(__dirname), config);
