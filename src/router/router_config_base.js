const login = r => require.ensure([], () => r(require('../components/login')), 'login');
const home = r => require.ensure([], () => r(require('../components/home')), 'home');
const dashboard = r => require.ensure([], () => r(require('../components/dashboard')), 'dashboard');
const dashboard1 = r => require.ensure([], () => r(require('../components/dashboard1')), 'dashboard1');
const routerConfig = [{
  path: '',
  redirect:"/login"
}
, {
  path: '/home',
  component: home
}
, {
  path: '/login',
  component: login
},{
  path:'/home/dashboard',
  component:dashboard
},{
  path:'/home/dashboard1',
  component:dashboard1
}
];

export default routerConfig;
