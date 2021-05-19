/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Subsocial Documentation',
  tagline: `“Subsocial, a general set of Substrate and IPFS-based social-network tools is looking awesome.
  There are ideas on the table to purpose this for the Kusama, and perhaps Polkadot, governance
  platform. I think that this is exactly the sort of thing that we'll be seeing supported increasingly
  into 2020 through the Polkadot and Kusama treasuries.” – Gavin Wood`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Subsocial',
  projectName: 'subsocial',
  themeConfig: {
    navbar: {
      title: 'Subsocial Docs',
      logo: {
        alt: 'Subsocial Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/DappForce',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Lightpaper',
              to: 'docs/',
            },
            {
              label: 'Tokenomics',
              href: 'https://drive.google.com/file/d/1MKaFkyXW7YkHvzobXA4GzajfhYptsmOU/view',
            },
            {
              label: 'FAQ',
              href: 'https://docs.google.com/document/d/1LtLOztEUNXc-tnDjCFRLqjQkOm7qIcx0rw4e3CrhUYY/edit',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '📢 Announcements',
              href: 'https://t.me/SubsocialNetwork',
            },
            {
              label: 'Blog',
              href: 'https://app.subsocial.network/@subsocial',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/SubsocialChain',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/w2Rqy2M',
            },
            // {
            //   label: 'Medium',
            //   href: 'https://medium.com/dappforce',
            // },
            {
              label: 'Telegram',
              href: 'https://t.me/Subsocial',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://app.subsocial.network/legal/privacy',
            },
            {
              label: 'Terms of Use',
              href: 'https://app.subsocial.network/legal/terms',
            },
            {
              label: 'Token Disclaimer',
              href: 'https://app.subsocial.network/legal/token',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} DappForce`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dappforce/subsocial-docs?organization=dappforce&organization=dappforce',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
