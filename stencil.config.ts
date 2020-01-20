import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import dotenvPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
    plugins: [
        sass(),
        dotenvPlugin()
    ],
    outputTargets: [{
        type: 'www',
        serviceWorker: null
    }],
    globalScript: 'src/global/app.ts',
    globalStyle: 'src/global/app.scss'
};
