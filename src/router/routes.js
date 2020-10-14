
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/storeselect', component: () => import('pages/StoreSelect.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/order', component: () => import('pages/Pedido.vue') },
      { path: '/selection', component: () => import('pages/ItemsSelect.vue') }
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
