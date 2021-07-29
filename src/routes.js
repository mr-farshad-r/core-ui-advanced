import React from 'react';

const Toaster = React.lazy(() => import('./__DONT_USE__/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./__DONT_USE__/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./__DONT_USE__/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./__DONT_USE__/base/cards/Cards'));
const Carousels = React.lazy(() => import('./__DONT_USE__/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./__DONT_USE__/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./__DONT_USE__/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./__DONT_USE__/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./__DONT_USE__/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./__DONT_USE__/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./__DONT_USE__/base/navs/Navs'));
const Paginations = React.lazy(() => import('./__DONT_USE__/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./__DONT_USE__/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./__DONT_USE__/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./__DONT_USE__/base/switches/Switches'));

const Tabs = React.lazy(() => import('./__DONT_USE__/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./__DONT_USE__/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./__DONT_USE__/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./__DONT_USE__/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./__DONT_USE__/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./__DONT_USE__/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./__DONT_USE__/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./__DONT_USE__/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./__DONT_USE__/icons/flags/Flags'));
const Brands = React.lazy(() => import('./__DONT_USE__/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./__DONT_USE__/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./__DONT_USE__/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./__DONT_USE__/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./__DONT_USE__/theme/colors/Colors'));
const Typography = React.lazy(() => import('./__DONT_USE__/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./__DONT_USE__/widgets/Widgets'));
const Users = React.lazy(() => import('./__DONT_USE__/users/Users'));
const User = React.lazy(() => import('./__DONT_USE__/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/dont-use/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/dont-use/theme/colors', name: 'Colors', component: Colors },
  { path: '/dont-use/theme/typography', name: 'Typography', component: Typography },
  { path: '/dont-use/base', name: 'Base', component: Cards, exact: true },
  { path: '/dont-use/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/dont-use/base/cards', name: 'Cards', component: Cards },
  { path: '/dont-use/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/dont-use/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/dont-use/base/forms', name: 'Forms', component: BasicForms },
  { path: '/dont-use/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/dont-use/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/dont-use/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/dont-use/base/navs', name: 'Navs', component: Navs },
  { path: '/dont-use/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/dont-use/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/dont-use/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/dont-use/base/switches', name: 'Switches', component: Switches },
  { path: '/dont-use/base/tables', name: 'Tables', component: Tables },
  { path: '/dont-use/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/dont-use/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/dont-use/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/dont-use/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/dont-use/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/dont-use/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/dont-use/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/dont-use/charts', name: 'Charts', component: Charts },
  { path: '/dont-use/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/dont-use/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/dont-use/icons/flags', name: 'Flags', component: Flags },
  { path: '/dont-use/icons/brands', name: 'Brands', component: Brands },
  { path: '/dont-use/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/dont-use/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/dont-use/notifications/badges', name: 'Badges', component: Badges },
  { path: '/dont-use/notifications/modals', name: 'Modals', component: Modals },
  { path: '/dont-use/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/dont-use/widgets', name: 'Widgets', component: Widgets },
  { path: '/dont-use/users', exact: true,  name: 'Users', component: Users },
  { path: '/dont-use/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
