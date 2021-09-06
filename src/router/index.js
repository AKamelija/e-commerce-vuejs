import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Intro",
    component: () => import("../components/Intro.vue"),
  },
  {
    path: "/phones",
    name: "AllPhones",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/AllPhones.vue"),
  },
  {
    path: "/add-phone",
    name: "AddPhone",
    component: () => import("../components/AddPhone.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/moreInfo",
    name: "MoreInfo",
    component: () => import("../components/MoreInfo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
