import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
    plugins: [
        sass()
    ],
    outputTargets: [{
        type: 'www',
        serviceWorker: null
    }],
    globalScript: 'src/global/app.ts',
    globalStyle: 'src/global/app.css'
};
