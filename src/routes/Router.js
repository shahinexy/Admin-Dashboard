import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
import Test from '../views/Test';
import BasicTable from '../views/tables/TableBasic';
import AddProduct from '../views/ui/AddProduct';
// import FormGrids from '../views/form-layouts/FormGrid';
/****Layouts*****/
const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/
const Minimal = Loadable(lazy(() => import('../views/dashboards/Minimal')));
const Shop = Loadable(lazy(() => import('../views/apps/ecommerce/Shop')));


/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', name: 'Home', element: <Navigate to="/dashboards/minimal" /> },
      { path: '/dashboards/minimal', name: 'Minimal', exact: true, element: <Minimal /> },
      { path: '/dashboards/shop', name: 'Shop', exact: true, element: <Shop /> },
      { path: '/test', name: 'Test', exact: true, element: <Test /> },
      { path: '/addTheme', name: 'addTheme', exact: true, element: <AddProduct /> },
      
      // { path: '/dashboards/analytical', name: 'Analytical', exact: true, element: <Analytical /> },
      // { path: '/dashboards/demographical', name: 'Demographical', exact: true, element: <Demographical /> },
      // { path: '/dashboards/modern', name: 'Modern', exact: true, element: <Modern /> },
      // { path: '/apps/notes', name: 'notes', exact: true, element: <Notes /> },
      // { path: '/apps/chat', name: 'chat', exact: true, element: <Chat /> },
      // { path: '/apps/contacts', name: 'contacts', exact: true, element: <Contacts /> },
      // { path: '/apps/calendar', name: 'calendar', exact: true, element: <Calendar /> },
      // { path: '/apps/email', name: 'email', exact: true, element: <Email /> },
      // { path: '/ecom/shop', name: 'email', exact: true, element: <Shop /> },
      // { path: '/ecom/shopdetail', name: 'email', exact: true, element: <ShopDetail /> },
      // { path: '/tickt/ticket-list', name: 'ticket list', exact: true, element: <TicketList /> },
      // {
      //   path: '/tickt/ticket-detail',
      //   name: 'ticket detail',
      //   exact: true,
      //   element: <TicketDetail />,
      // },
      // { path: '/apps/treeview', name: 'email', exact: true, element: <Treeview /> },
      // { path: '/ui/alerts', name: 'alerts', exact: true, element: <Alerts /> },
      // { path: '/ui/badges', name: 'badges', exact: true, element: <Badges /> },
      // { path: '/ui/buttons', name: 'buttons', exact: true, element: <Buttons /> },
      // { path: '/ui/cards', name: 'cards', exact: true, element: <Cards /> },
      // { path: '/ui/grid', name: 'grid', exact: true, element: <Grid /> },
      // { path: '/ui/table', name: 'table', exact: true, element: <Tables /> },
      // { path: '/ui/forms', name: 'forms', exact: true, element: <Forms /> },
      // { path: '/ui/breadcrumbs', name: 'breadcrumbs', exact: true, element: <Breadcrumbs /> },
      // { path: '/ui/dropdown', name: 'dropdown', exact: true, element: <Dropdowns /> },
      // { path: '/ui/button-group', name: 'button group', exact: true, element: <BtnGroup /> },
      // { path: '/ui/collapse', name: 'collapse', exact: true, element: <Collapse /> },
      // { path: '/ui/list-group', name: 'list-group', exact: true, element: <ListGroup /> },
      // { path: '/ui/modal', name: 'modal', exact: true, element: <Modal /> },
      // { path: '/ui/navbar', name: 'navbar', exact: true, element: <Navbar /> },
      // { path: '/ui/nav', name: 'nav', exact: true, element: <Nav /> },
      // { path: '/ui/pagination', name: 'pagination', exact: true, element: <Pagination /> },
      // { path: '/ui/popover', name: 'popover', exact: true, element: <Popover /> },
      // { path: '/ui/progress', name: 'progress', exact: true, element: <Progress /> },
      // { path: '/ui/spinner', name: 'spinner', exact: true, element: <Spinner /> },
      // { path: '/ui/tabs', name: 'tabs', exact: true, element: <Tabs /> },
      // { path: '/ui/toasts', name: 'toasts', exact: true, element: <Toasts /> },
      // { path: '/ui/tooltip', name: 'tooltip', exact: true, element: <Tooltip /> },
      // { path: '/form-layout/form-basic', name: 'form-basic', exact: true, element: <FormBasic /> },
      // { path: ' ', name: 'form-grid', exact: true, element: <FormGrids /> },
      // { path: '/form-layout/form-group', name: 'form-group', exact: true, element: <FormGroup /> },
      // { path: '/form-layout/form-input', name: 'form-input', exact: true, element: <FormInput /> },
      // {
      //   path: '/form-pickers/datepicker',
      //   name: 'datepicker',
      //   exact: true,
      //   element: <Datepicker />,
      // },
      // { path: '/form-pickers/tag-select', name: 'tag-select', exact: true, element: <TagSelect /> },
      // { path: '/form-validation', name: 'form-validation', exact: true, element: <FormValidate /> },
      // { path: '/form-steps', name: 'form-steps', exact: true, element: <FormSteps /> },
      // { path: '/form-editor', name: 'form-editor', exact: true, element: <FormEditor /> },

      // { path: '/tables/basic-table', name: 'basic-table', exact: true, element: <Basictable /> },
      {
        path: '/tables/all-product',
        name: 'react-table',
        exact: true,
        element: <BasicTable />,
      },
      // {
      //   path: '/add-theme/add',
      //   name: 'add-theme',
      //   exact: true,
      //   element: <AddProduct />,
      // },
      // {
      //   path: '/tables/data-table',
      //   name: 'data-table',
      //   exact: true,
      //   element: <ReactBootstrapTable />,
      // },
      // { path: '/charts/apex', name: 'apex', exact: true, element: <ApexCharts /> },
      // { path: '/charts/chartjs', name: 'chartjs', exact: true, element: <ChartJs /> },
      // { path: '/sample-pages/profile', name: 'profile', exact: true, element: <Profile /> },
      // {
      //   path: '/sample-pages/helper-class',
      //   name: 'helper-class',
      //   exact: true,
      //   element: <HelperClass />,
      // },
      // {
      //   path: '/sample-pages/starterkit',
      //   name: 'starterkit',
      //   exact: true,
      //   element: <StarterKit />,
      // },
      // { path: '/sample-pages/gallery', name: 'gallery', exact: true, element: <Gallery /> },
      // {
      //   path: '/sample-pages/search-result',
      //   name: 'search-result',
      //   exact: true,
      //   element: <SearchResult />,
      // },
      // { path: '/icons/bootstrap', name: 'bootstrap', exact: true, element: <Bootstrap /> },
      // { path: '/icons/feather', name: 'feather', exact: true, element: <Feather /> },
      // { path: '/map/vector', name: 'vector', exact: true, element: <CustomVectorMap /> },
      // { path: '/widget', name: 'widget', exact: true, element: <Widget /> },
      // { path: '/casl', name: 'casl', exact: true, element: <CASL /> },
      // { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
      { path: 'registerformik', element: <RegisterFormik /> },
      { path: 'loginformik', element: <LoginFormik /> },
      { path: 'maintanance', element: <Maintanance /> },
      { path: 'lockscreen', element: <LockScreen /> },
      { path: 'recoverpwd', element: <RecoverPassword /> },
    ],
  },
];

export default ThemeRoutes;
