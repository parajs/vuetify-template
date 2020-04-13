import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/Home.vue";
import Layout from "layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "views/login/index.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
