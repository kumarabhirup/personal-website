import { META } from './Meta'

export const TECH = {
  title: 'Technologies I work with',
  data: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Next.js',
    'GraphQL',
    'TypeScript',
    'Apollo GraphQL',
    'ZEIT',
    'Node.js',
    'WordPress',
    'Git',
    'Docker',
    'Electron',
    'DigitalOcean',
    'Redux',
    'Heroku',
    'MongoDB',
  ],
}

export const SOCIAL = {
  title: 'Available here',
  data: [
    { platform: 'Twitter', link: `https://twitter.com/${META.social.twitter}` },
    {
      platform: 'LinkedIn',
      link: `https://linkedin.com/in/${META.social.linkedin}`,
    },
    {
      platform: 'GitHub',
      link: `https://github.com/${META.social.github}`,
    },
    {
      platform: 'YouTube',
      link: `https://www.youtube.com/${META.social.youtube}`,
    },
    {
      platform: 'DEV.TO',
      link: `https://dev.to/${META.social.dev}`,
    },
    {
      platform: 'Facebook',
      link: `https://www.facebook.com/${META.social.facebook}`,
    },
  ],
}

export const PROJECTS = {
  title: 'Work Experience',
  data: [
    {
      image: 'https://i.ibb.co/F0hmv9N/Beam-Community.jpg',
      // width: 100,
      name: 'Beam Community, Inc.',
      link: 'https://itsbeam.com',
      description: (
        <>
          <span style={{filter: "opacity(0.5)"}}>Founder, March 2020 - Present</span>. <br /> It is the Substack for SMS. It is a SaaS service that enables
          companies and creators to connect to their fans via text, and also
          enables them to earn money via subscriptions. <br /> <br /> It is my
          biggest project so far :)
        </>
      ),
    },
    {
      image: 'https://i.ibb.co/dPRzYZv/pkgreview-2.jpg',
      name: 'pkgreview.dev',
      link: 'https://pkgreview.now.sh',
      description:
        <><span style={{filter: "opacity(0.5)"}}>Maintainer, February 2020 - June 2020</span>. <br /> A lot of people find it very difficult to decide what NPM Package to use. pkgreview.dev helps developers in the JavaScript Community review and analyze each module before they start using it.</>,
    },
    {
      image: 'https://i.ibb.co/fd2rF97/favicon.jpg',
      name: 'JoinMyCall',
      link: 'https://joinmycall.now.sh',
      description:
        <><span style={{filter: "opacity(0.5)"}}>Co-Maintainer, June 2019 - August 2019</span>. <br /> This app makes your colleagues take a connection/camera/mic test before joining a call. Hosts can create infinite JoinMyCall links to invite guests in meeting. Guests can either skip or do the connection test.</>,
    },
    {
      image:
        'https://ph-files.imgix.net/32a6ac11-e7b0-4c3f-82fc-bc92c38dba34?auto=format',
      name: 'bulk-mail-cli',
      link: 'https://bulkmail.now.sh',
      description:
        <><span style={{filter: "opacity(0.5)"}}>Maintainer, December 2018 - March 2020</span>. <br /> A command line interface (cli) application that sends automated and dynamic emails to the list.</>,
    },
  ],
}

export const SKILLS = [
  'Abhirup',
  'codes',
  'debugs',
  'learns',
  'helps',
  'jokes',
  'speaks',
  'tweets',
  'lives',
  'chats',
]
