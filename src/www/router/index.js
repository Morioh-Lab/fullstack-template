import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

var router = new Router({
  mode: "history",
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: "/detail/:id/:slg?", name: "post-info", component: () => import("../views/post/info.vue") },    
    { path: "/about", component: () => import("../views/about.vue") }, 
    { path: "/services", component: () => import("../views/services.vue") }, 
    { path: "/contact", component: () => import("../views/contact.vue") },    

    { path: "/", component: () => import("../views/index.vue") },    
    { path: "*", component: () => import("../views/404.vue") },

  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.meta.auth && !localStorage.getItem("auth")) {
    next({
      path: to.meta.next ? to.meta.next : '/login',
      query: { next: to.fullPath }
    })
  } else {
    next()
  }
});

export default router;
