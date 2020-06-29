// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Harmony',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: 'https://harmony-yar.netlify.app/',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Гармония' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            items: [
              '/docs/',
              ],
          },
          {
            title: '',
            items: [
              '/docs/lesson-1/',
              '/docs/lesson-2/',
              '/docs/lesson-3/',
              '/docs/lesson-4/',
              '/docs/lesson-5/',
              '/docs/lesson-6/',
              '/docs/lesson-7/',
              '/docs/lesson-8/',
              '/docs/lesson-9/',
              '/docs/lesson-10/',
              '/docs/lesson-11/',
              '/docs/lesson-12/',
              '/docs/lesson-13/',
              '/docs/lesson-14/',
              '/docs/lesson-15/',
              '/docs/lesson-16/',
              '/docs/lesson-17/',
              '/docs/lesson-18/',
              '/docs/lesson-19/',
              '/docs/lesson-20/',
              '/docs/lesson-21/',
              '/docs/lesson-22/',
              '/docs/lesson-23/',
              '/docs/lesson-24/',
              '/docs/lesson-25/',
              '/docs/lesson-26/',
              '/docs/lesson-27/',
              '/docs/lesson-28/',
              '/docs/lesson-29/',
              '/docs/lesson-30/',
            ]
          },
          {
            title: 'Дополнение',
            items: [
              '/docs/',
            ],
          },
          {
            title: 'Приложение',
            items: [
              '/docs/',
            ],
          },
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}
