import matter from 'gray-matter'
import moment from 'moment'

const fs = require('fs')
const path = require('path')

const DIR = path.join(process.cwd(), './content/')

const files =
  !process.browser && fs?.readdirSync(DIR).filter(file => file.endsWith('.md'))

module.exports = !process.browser
  ? Promise.all(
      files
        .map(async file => {
          const name = path.join(DIR, file)

          const contents = fs.readFileSync(name, 'utf8')

          const data = await matter(contents, { excerpt: true })

          // console.log({
          //   ...data,
          //   fileName: file,
          // })

          return {
            ...data,
            slug: file.replace('.md', ''),
          }
        })
        // .filter(async meta => {
        //   const { data } = await meta
        //   return data?.date
        // })
        .sort(async (a, b) => {
          const i = await a
          const j = await b

          return j?.data?.date.localeCompare(i?.data?.date)
        })
    )
  : null
