import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    params: true,
    component: () => import("@/pages/index"),
  },
  {
    path: "/admin/index",
    params: true,
    component: () => import("@/pages/admin"),
  },
  {
    path: "/admin/create-product",
    params: true,
    component: () => import("@/pages/admin/CreateProduct"),
  },
  {
    path: "/admin/all-products",
    params: true,
    component: () => import("@/pages/admin/AllProducts"),
  },
  {
    path: "/admin/categories",
    params: true,
    component: () => import("@/pages/admin/Categories"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
