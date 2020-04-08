import SocialMediaConstants from '../../../constants/social-media-constants';

const footerLinks = [
  {
    header: 'Projects'
  },
  {
    header: 'Resources',
    links: [
      {
        label: 'Blog',
        path: '/blogs',
        internal: true
      },
      {
        label: 'Learn',
        path: '/learn',
        internal: true
      },
      {
        label: 'Support',
        path: '/support',
        internal: true
      }
    ]
  },
  {
    header: 'Community',
    links: [
      {
        label: 'Discord',
        path: SocialMediaConstants.DISCORD_LINK,
        internal: false
      },
      {
        label: 'Github',
        path: SocialMediaConstants.GITHUB_LINK,
        internal: false
      },
      {
        label: 'Dribble',
        path: SocialMediaConstants.DRIBBLE_LINK,
        internal: false
      }
    ]
  },
  {
    header: 'Organization',
    links: [
      {
        label: 'Team',
        path: '/meet-the-team',
        internal: true
      },
      {
        label: 'About',
        path: '/about-us',
        internal: true
      },
      {
        label: 'Contact Us',
        path: '/contact-us',
        internal: true
      }
    ]
  }
];

export default footerLinks;
