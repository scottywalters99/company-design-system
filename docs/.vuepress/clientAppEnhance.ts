import { defineClientAppEnhance } from '@vuepress/client'
import ComponentLibrary from './../../src/main.js';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ComponentLibrary);
})
