import { defineConfig } from 'umi';
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  // chainWebpack(memo) {
  //   memo.plugin('monaco-editor-webpack-plugin')
  //     .use(MonacoWebpackPlugin, [{
  //       languages: ['html', 'css', 'javascript', 'json', 'xml']
  //     }]);
  // }
});
