import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  plugins: [
    dotenvPlugin()
  ]
};
