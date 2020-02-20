import matter from 'gray-matter'
import moment from 'moment'

const fs = require('fs')
const path = require('path')

const DIR = path.join(process.cwd(), './content/')

const files =
  !process.browser && fs?.readdirSync(DIR).filter(file => file.endsWith('.md'))

module.exports = !process.browser
  ? Promise.all(
      files.map(async file => {
        const name = path.join(DIR, file)

        const contents = fs.readFileSync(name, 'utf8')

        const data = await matter(contents, { excerpt: true })

        return {
          ...data,
          slug: file.replace('.md', ''),
        }
      })
    ).then(result =>
      result.sort(
        (a, b) =>
          moment(b?.data?.date, 'MM/DD/YYYY, h:mm a').toDate() -
          moment(a?.data?.date, 'MM/DD/YYYY, h:mm a').toDate()
      )
    )
  : null
