module.exports = {
    title: 'Lasco',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            {
                text: 'Guide',
                link: 'introduction'
            },
            {
                text: 'Changelog',
                link: 'https://github.com/magnesiumlabs/lasco/blob/main/CHANGELOG.md'
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                collapsible: true,
                items: [
                    {
                        text: 'Introduction',
                        link: 'introduction'
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
                        text: 'Min-Width',
                        link: 'guide/min-width'
                    },
                    {
                        text: 'Max-Width',
                        link: 'guide/max-width'
                    },
                    {
                        text: 'Height',
                        link: 'guide/min-height'
                    },
                    {
                        text: 'Min-Height',
                        link: 'guide/min-height'
                    },
                    {
                        text: 'Max-Height',
                        link: 'guide/max-height'
                    }
                ]
            },
            {
                text: 'Typography',
                collapsible: true,
                items: [
                    {
                        text: 'Font-Style',
                        link: 'guide/font-style'
                    },
                    {
                        text: 'Font-Weight',
                        link: 'guide/font-weight'
                    },
                    {
                        text: 'Text-Align',
                        link: 'guide/text-align'
                    },
                    {
                        text: 'Text-Transform',
                        link: 'guide/text-transform'
                    }
                ]
            },
            {
                text: 'Backgrounds',
                collapsible: true,
                items: []
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
                items: []
            }
        ]
    }
};
