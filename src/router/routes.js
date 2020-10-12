
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/test', component: () => import('pages/Teste.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
