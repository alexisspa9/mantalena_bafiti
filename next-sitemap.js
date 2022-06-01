/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://mantalenabafiti.gr',
    changefreq: "monthly",
    generateRobotsTxt: true, // (optional)
    // ...other options
  }