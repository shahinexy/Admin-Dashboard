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
        title: 'Overview',
        href: '/dashboards/minimal',
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
      },
      {
        title: 'All Theme',
        href: '/tables/all-product',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: 'Add Theme',
        href: '/addTheme',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      // {
      //   title: 'Upload Image',
      //   href: '/upload/image',
      //   icon: <Icon.Disc />,
      //   id: 1.1,
      //   collapisble: false,
      // },
      {
        title: 'All Users',
        href: '/all/users',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },

    ],
  },

  // {
  //   title: 'Ecommerce',
  //   href: '/ecom',
  //   icon: <Icon.ShoppingCart />,
  //   id: 2.7,
  //   collapisble: true,
  //   children: [
  //     {
  //       title: 'Shop',
  //       href: 'dashboards/shop',
  //       icon: <Icon.Disc />,
  //     },
  //     {
  //       title: 'Shop Detail',
  //       href: '/ecom/shopdetail',
  //       icon: <Icon.Disc />,
  //     },
  //   ],
  // },
  // start

];

export default SidebarData;
