module.exports = {
  //-- SITE SETTINGS -----
  author: "@Y4HYA4",
  siteTitle: "Yahya Abulhaj | Portfolio",
  siteShortTitle: "Yahya", // Used as logo text in header, footer, and splash screen
  siteDescription: "This is the portfolio site for Yahya Abulhaj.",
  siteUrl: "https://www.itzyahya.tech/",
  siteLanguage: "en_US",
  siteIcon: "avatar.png", // Relative to gatsby-config file
  seoTitleSuffix: "Yahya Abulhaj", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#536DFE",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  //mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fyahya-abulhaj.hashnode.dev%2Frss.xml",
  rssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fyahya-abulhaj.hashnode.dev%2Frss.xml",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yahya-abulhaj/",
    },
    {
      name: "Blog",
      url: "https://blog.yahya-abulhaj.dev/",
    },
    {
      name: "Github",
      url: "https://github.com/Y4HYA4/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/AbulhajYahya/",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Blog",
      url: "https://blog.yahya-abulhaj.dev/",
    },
    {
      name: "Copyright",
      url: "https://github.com/Y4HYA4/portfolio_v1/blob/master/LICENSE",
    },
  ],
}
