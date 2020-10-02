module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Not Only — But Also", // Navigation and Site Title
  titleAlt: "Not Only — But Also", // Title for JSONLD
  description:
    "Helping young creatives explore and find a career that is right for them by shedding light on the other roles that exist in the industry with features, advice and resources.",
  headline:
    "A platform to shed light on the other roles in the creative industry.", // Headline for schema.org JSONLD
  url: "https://notonlybutalso.org", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/favicon.png", // Used for manifest favicon generation
  shortName: "Not Only", // shortname for manifest. MUST be shorter than 12 characters
  author: "Guy Munday", // Author for schemaORGJSONLD
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  twitter: "n/a", // Twitter Username
  facebook: "n/a", // Facebook Site Name
  googleAnalyticsID: "UA-171543390-1",
};
