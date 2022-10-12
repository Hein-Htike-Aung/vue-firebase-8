import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import InvoiceView from "../views/InvoiceView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/invoice/:invoiceId",
    name: "invoice-view",
    component: InvoiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
