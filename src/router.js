import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import store from "@/store";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: () => import("./views/AboutUs"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/our-work",
      name: "ourwork",
      component: () => import("./views/OurWork"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./views/FAQ"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () => import("./views/NotFound")
    }
  ]
});

export default router;
