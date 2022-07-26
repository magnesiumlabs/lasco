module.exports = {
    title: 'Lasco',
    description: 'Just playing around.',
    themeConfig: {
        logo: '/assets/logo.svg',
        siteTitle: false,
        nav: [
            {
                text: 'Guide',
                link: 'guide/getting-started',
                activeMatch: '/guide/'
            },
            {
                text: '1.x',
                items: [
                    {
                        text: '1.x',
                        link: '/'
                    }
                ]
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/magnesiumlabs/lasco'
            },
            {
                icon: 'twitter',
                link: 'https://twitter.com/lascocss'
            }
        ],
        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [
                    {
                        text: 'Getting Started',
                        link: 'guide/getting-started'
                    },
                    {
                        text: 'Configuration',
                        link: 'guide/configuration'
                    },
                    {
                        text: 'Changelog',
                        link: 'guide/changelog'
                    }
                ]
            },
            {
                text: 'Layout',
                collapsible: true,
                items: [
                    {
                        text: 'Aspect Ratio',
                        link: 'guide/aspect-ratio'
                    },
                    {
                        text: 'Clear',
                        link: 'guide/clear'
                    },
                    {
                        text: 'Display',
                        link: 'guide/display'
                    },
                    {
                        text: 'Float',
                        link: 'guide/float'
                    },
                    {
                        text: 'Position',
                        link: 'guide/position'
                    },
                    {
                        text: 'Z-Index',
                        link: 'guide/z-index'
                    }
                ]
            },
            {
                text: 'Effects',
                collapsible: true,
                items: [
                    {
                        text: 'Opacity',
                        link: 'guide/opacity'
                    }
                ]
            },
            {
                text: 'Sizing',
                collapsible: true,
                items: [
                    {
                        text: 'Width',
                        link: 'guide/width'
                    },
                    {
                        text: 'Min Width',
                        link: 'guide/min-width'
                    },
                    {
                        text: 'Max Width',
                        link: 'guide/max-width'
                    },
                    {
                        text: 'Height',
                        link: 'guide/min-height'
                    },
                    {
                        text: 'Min Height',
                        link: 'guide/min-height'
                    },
                    {
                        text: 'Max Height',
                        link: 'guide/max-height'
                    }
                ]
            },
            {
                text: 'Typography',
                collapsible: true,
                items: [
                    {
                        text: 'Font Style',
                        link: 'guide/font-style'
                    },
                    {
                        text: 'Font Weight',
                        link: 'guide/font-weight'
                    },
                    {
                        text: 'Text Align',
                        link: 'guide/text-align'
                    },
                    {
                        text: 'Text Transform',
                        link: 'guide/text-transform'
                    }
                ]
            },
            {
                text: 'Backgrounds',
                collapsible: true,
                items: [
                    {
                        text: 'Background Attachment',
                        link: 'guide/background-attachment'
                    },
                    {
                        text: 'Background Clip',
                        link: 'guide/background-clip'
                    },
                    {
                        text: 'Background Color',
                        link: 'guide/background-color'
                    },
                    {
                        text: 'Background Image',
                        link: 'guide/background-image'
                    },
                    {
                        text: 'Background Origin',
                        link: 'guide/background-origin'
                    },
                    {
                        text: 'Background Position',
                        link: 'guide/background-position'
                    },
                    {
                        text: 'Background Repeat',
                        link: 'guide/background-repeat'
                    },
                    {
                        text: 'Background Size',
                        link: 'guide/background-size'
                    }
                ]
            },
            {
                text: 'Filters',
                collapsible: true,
                items: [
                    {
                        text: 'Blur',
                        link: 'guide/blur'
                    },
                    {
                        text: 'Brightness',
                        link: 'guide/brightness'
                    },
                    {
                        text: 'Contrast',
                        link: 'guide/contrast'
                    },
                    {
                        text: 'Grayscale',
                        link: 'guide/grayscale'
                    }
                ]
            },
            {
                text: 'Flexbox & Grid',
                collapsible: true,
                items: [
                    {
                        text: 'Flex',
                        link: 'guide/flex'
                    },
                    {
                        text: 'Flex Direction',
                        link: 'guide/flex-direction'
                    },
                    {
                        text: 'Flex Wrap',
                        link: 'guide/flex-wrap'
                    },
                    {
                        text: 'Flex Grow',
                        link: 'guide/flex-grow'
                    },
                    {
                        text: 'Flex Shrink',
                        link: 'guide/flex-shrink'
                    },
                    {
                        text: 'Flex Basis',
                        link: 'guide/flex-basis'
                    },
                    {
                        text: 'Order',
                        link: 'guide/order'
                    },
                    {
                        text: 'Grid Template Columns',
                        link: 'guide/grid-template-columns'
                    },
                    {
                        text: 'Grid Template Rows',
                        link: 'guide/grid-template-rows'
                    },
                    {
                        text: 'Gap',
                        link: 'guide/gap'
                    },
                    {
                        text: 'Align Self',
                        link: 'guide/align-self'
                    },
                    {
                        text: 'Align Content',
                        link: 'guide/align-content'
                    },
                    {
                        text: 'Align Items',
                        link: 'guide/align-items'
                    },
                    {
                        text: 'Justify Self',
                        link: 'guide/justify-self'
                    },
                    {
                        text: 'Justify Content',
                        link: 'guide/justify-content'
                    },
                    {
                        text: 'Justify Items',
                        link: 'guide/justify-items'
                    },
                    {
                        text: 'Place Self',
                        link: 'guide/place-self'
                    },
                    {
                        text: 'Place Content',
                        link: 'guide/place-content'
                    },
                    {
                        text: 'Place Items',
                        link: 'guide/place-items'
                    }
                ]
            },
            {
                text: 'Spacing',
                collapsible: true,
                items: [
                    {
                        text: 'Margin',
                        link: 'guide/margin'
                    },
                    {
                        text: 'Padding',
                        link: 'guide/padding'
                    }
                ]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present'
        }
    }
};
