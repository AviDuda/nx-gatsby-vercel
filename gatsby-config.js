require("dotenv").config();
const path = require("path");

const siteName = "NX Gatsby Vercel starter";
const siteUrl = `https://${process.env.GATSBY_SUBDOMAIN}.example.com`;

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "..",
  "..",
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: siteName,
    description: siteName,
    siteUrl: siteUrl,
  },
  plugins: [
    "gatsby-plugin-tsconfig-paths",

    /* --- meta --- */
    `gatsby-plugin-offline`,

    /* --- CSS --- */
    "gatsby-plugin-styled-components",

    /* --- pages --- */
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", ".cache", "public"],
        failOnError: false,
      },
    },
  ],
};

module.exports = config;
