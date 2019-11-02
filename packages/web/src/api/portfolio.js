const projects = [
  {
    title: `PaprInk`,
    description: `An isomorphic webapp for writers to make habit of writing everyday. Complete CRUD interface built on Server Side using React, Apollo, Prisma and GraphQL.`,
    link: `https://paprink.com`,
    image: `https://i.ibb.co/QXLsPdD/logo.jpg`, // `https://i.ibb.co/pQRG5ZT/PaprInk.jpg`
  },
  {
    title: `JoinMyCall`,
    description: `This app makes your colleagues take a connection/camera/mic test before joining a call. Hosts can create infinite JoinMyCall links to invite guests in meeting. Guests can either skip or do the connection test.`,
    link: `https://joinmycall.now.sh`,
    image: `https://i.ibb.co/fd2rF97/favicon.jpg`,
  },
  {
    title: `bulk-mail-cli`,
    description: `A command line interface (cli) application that sends automated and dynamic emails to the list.`,
    link: `https://bulkmail.now.sh`,
    image: `/static/prebuilt/images/bulkmail.gif`,
  },
  {
    title: `FlusLive`,
    description: `Twitch clone, made with React and Redux.`,
    link: `https://www.github.com/KumarAbhirup/fluslive`,
    image: `https://camo.githubusercontent.com/027828828ff2d084a4273b71e4a8b9d8f048288b/68747470733a2f2f692e6962622e636f2f507a4e5350354b2f666c75736c6976652e6a7067`,
  },
  {
    title: `kumarabhirup.com`,
    description: `This website itself is a part of my portfolio... It is created in React.JS and uses GraphQL to empower the content.`,
    link: `https://www.github.com/KumarAbhirup/kumarabhirup`,
    image: `/static/prebuilt/images/kumarabhirupwebsite.jpg`,
  },
  {
    title: `Glitter (twitter bot)`,
    description: `Automate your Twitter. Endlessly.`,
    link: `https://github.com/KumarAbhirup/glitter`,
    image: `/static/prebuilt/images/glitterbot.png`,
  },
  {
    title: `iconic-input`,
    description: `A react-native input component library which deals with appealing and attractive input boxes.`,
    link: `https://www.github.com/KumarAbhirup/iconic-input`,
    image: `/static/prebuilt/images/iconic-input.jpg`,
  },
  {
    title: `WP Iconizer`,
    description: `Replace the well-known WordPress icon of the TopLeft into a firey WordPress Icon, or into your OWN!`,
    link: `https://wordpress.org/plugins/iconizer`,
    image: `/static/prebuilt/images/iconizer.png`,
  },
  {
    title: `WP Festgreets`,
    description: `Greet your readers with exciting animated GIFs on your WordPress website, anywhere placed decoratively in theme!`,
    link: `https://wordpress.org/plugins/wp-festgreets`,
    image: `https://ps.w.org/wp-festgreets/assets/icon-256x256.png`,
  },
]

const projectsAtHomepage = 3

export const portfolio = {
  title: `Portfolio 🍊`,
  portfolio: projects,
  moreButtonText:
    projects.length > projectsAtHomepage
      ? `Wanna see more of my projects? ☕`
      : null,
  projectsAtHomepage,
}
