import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
