require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        excludeOptions: {
          separator: ".",
        },
        autoGenHomeLabel: "Overview",
        crumbLabelUpdates: [
          {
            pathname: "/self-services",
            crumbLabel: "Self services",
          },
          {
            pathname: "/my-messages",
            crumbLabel: "My messages",
          },
          {
            pathname: "/my-messages/[messageId]",
            crumbLabel: "Message",
          },
          {
            pathname: "/my-cases",
            crumbLabel: "My cases",
          },
          {
            pathname: "/my-cases/[caseId]",
            crumbLabel: "Case",
          },
          {
            pathname: "/my-account",
            crumbLabel: "My account",
          },
          {
            pathname: "/self-services/marriage",
            crumbLabel: "Marriage / Partnership",
          },
          {
            pathname: "/self-services/moving",
            crumbLabel: "Moving away",
          },
          {
            pathname: "/self-services/moving/form",
            crumbLabel: "Form",
          },
        ],
      },
    },
  ],
};
