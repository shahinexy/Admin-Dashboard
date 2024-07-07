import * as Icon from 'react-feather';

const SidebarData = [
  { caption: 'Personal' },
  {
    title: 'Dashboards',
    href: '/dashboards',
    id: 1,
    suffix: '4',
    suffixColor: 'bg-cyan rounded-pill text-dark-white',
    icon: <Icon.Home />,
    collapisble: true,
    children: [
      {
        title: 'Minimal',
        href: '/dashboards/minimal',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      }
      
    ],
  },

  {
    title: 'Ecommerce',
    href: '/ecom',
    icon: <Icon.ShoppingCart />,
    id: 2.7,
    collapisble: true,
    children: [
      {
        title: 'Shop',
        href: 'dashboards/shop',
        icon: <Icon.Disc />,
      },
      {
        title: 'Shop Detail',
        href: '/ecom/shopdetail',
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: 'Test',
    href: '/test',
    icon: <Icon.Bluetooth />,
  },
// start
  
];

export default SidebarData;
