export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    title: true,
    name: 'Theme',
  },
  {
    name: 'Browse',
    url: '/browse',
    icon: 'icon-drop',
  },
  {
    name: 'search',
    url: '/search',
    icon: 'icon-search',
  },
  {
    title: true,
    name: 'Components',
  },
  {
    name: 'stats',
    url: '/stats',
    icon: 'icon-pie-chart',
  },
  {
    name: 'settings',
    url: '/settings',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    divider: true,
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star',
      },
      {
        name: 'Register',
        url: '/pages/register',
        icon: 'icon-star',
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star',
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star',
      },
    ],
  },
  {
    name: 'Github page',
    url: 'https://github.com/guedouari/xstr.me/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
  },
  {
    name: 'Github for the api',
    url: 'https://github.com/guedouari/api.xstr.me/',
    icon: 'icon-layers',
    variant: 'danger',
  },
];
