const fs = require('fs')

// eslint-disable-next-line import/no-extraneous-dependencies
const globby = require('globby')

// eslint-disable-next-line import/no-extraneous-dependencies
const prettier = require('prettier')

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx,.jsx}',
    'writings/**/*{.mdx,.md}',
    '!pages/subscribe/thanks{.js,.jsx}',
    '!writings/drafts',
    '!pages/_*.js',
    '!pages/api',
    '!pages/writings/[slug]{.js,.jsx}',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('pages/', '')
                  .replace('.js', '')
                  .replace('.jsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '')

                const route = path.endsWith('index')
                  ? path.replace('index', '')
                  : path

                return `
                        <url>
                            <loc>${`https://kumareth.com/${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
