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
      },
      {
<<<<<<< HEAD
        title: 'Order List',
        href: '/dashboards/order-list',
=======
        title: 'All Product',
        href: '/tables/all-product',
>>>>>>> 08af5ed092d85310e3747b07e9c34929b1d90351
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: 'All Product',
        href: '/tables/all-product',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: 'Order List',
        href: '/dashboards/order-list',
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
