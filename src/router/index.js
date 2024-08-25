import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: '/sing-in',
    name: 'singin',
    component: () => import("@/views/SingInView.vue"),
  },
  {
    path: '/restricted',
    name: 'restricted',
    component: () => import("@/views/RestrictedView.vue"),
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//guardianes para proteger las rutas restringidas, solo se permite el acceso a usuarios logeados

router.beforeEach((to, from, next) =>
{
  const requiresAuth = to.meta.requiresAuth
  if(requiresAuth){
    if(store.state.user){
      next()
    }else{
      alert('Debes estar autenticado')
      next('/login')
    }
  } else{
    next()
  }
})

//guardian para que usuarios logeados NO PUEDAN acceder a logino register

router.beforeEach((to, from, next)=>{
  //si el nombre de ruta es login y ademas el usuario esta logeado, o el nombre de ruta es signin y el usuario está logeado
  if(to.name == 'login' && store.state.user ||
    to.name == 'signin' && store.state.user
  ){
    alert('Ya estás autenticado')
    next('/restricted')
  }else {
    //si está restringido y quiere ir a otra página, le damos el acceso que pide
    next();
  }
});

export default router
