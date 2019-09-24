//File that contains all the routing logic
export default [
  {
    path: '/',
    name: 'home',
    component: () =>
      import('@/pages/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/pages/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('@/pages/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import('@/pages/Profile.vue')
  },
  {
    path: '/users',
    name: 'user-list',
    component: () =>
      import('@/pages/UserList.vue')
  },
  {
    path: '/user/:id?',
    name: 'user',
    props: true,
    component: () =>
      import('@/pages/User.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    props: true,
    component: () =>
      import('@/pages/GroupList.vue')
  },
  {
    path: '/group/:id?',
    name: 'group',
    props: true,
    component: () =>
      import('@/pages/Group.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('@/pages/About.vue')
  },
  {
    path: '/about/design-diary',
    name: 'design-diary',
    component: () =>
      import('@/pages/DesignDiary.vue')
  }
]