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
                items: []
            },
            {
                text: 'Sizing',
                collapsible: true,
                items: []
            },
            {
                text: 'Typography',
                collapsible: true,
                items: []
            },
            {
                text: 'Backgrounds',
                collapsible: true,
                items: []
            },
            {
                text: 'Filters',
                collapsible: true,
                items: []
            },
            {
                text: 'Flexbox & Grid',
                collapsible: true,
                items: []
            }
        ]
    }
};
