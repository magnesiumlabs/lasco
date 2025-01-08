// ============================================================================================= //
//                                            ESLINT                                             //
// ============================================================================================= //

import frontFactoryConfig from '@front-factory/eslint-config';

export default [
    ...frontFactoryConfig,
    {
        ignores: [
            'docs/.vitepress/cache/'
        ]
    }
];
