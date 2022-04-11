import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/public', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
