import { createRouter, createWebHistory } from "vue-router";
import AirportSearch from "../components/AirportSearch.vue";
import AirportDetails from "../components/AirportDetails.vue";

const routes = [
  {
    path: "/",
    name: "Search",
    component: AirportSearch,
  },
  {
    path: "/airport-details",
    name: "Details",
    component: AirportDetails,
    props: true, // Pass route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
