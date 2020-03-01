module.exports = {
  title: 'Schema Driven: REST', // Title for your website.
  tagline: 'GraphQL Based Schema For Your REST API',
  url: 'https://schema-first-rest.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */

  favicon: 'img/favicon.ico',
  projectName: 'schema-first-rest.github.io',
  organizationName: 'schema-first-rest',
  themeConfig: {
    navbar: {
      title: 'Schema Driven: REST',
      logo: {
        alt: 'Schema Driven: REST Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/introduction/theory', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/schema-first-rest',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/introduction/getStarted',
            },
            {
              label: 'CLI',
              to: 'docs/commands/cli',
            },
          ],
        },
        /*
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        }
*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dested LLC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
