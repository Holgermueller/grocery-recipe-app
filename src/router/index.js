import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Dash from "../components/Dash";
import GroceryList from "../components/GroceryListPage";
import AllRecipes from "../components/AllRecipes";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/dash",
      name: "Dash",
      component: Dash,
    },

    {
      path: "/groceryList",
      name: "GroceryList",
      component: GroceryList,
    },

    {
      path: "/allRecipes",
      name: "AllRecipes",
      component: AllRecipes,
    },
  ],
});

export default router;
