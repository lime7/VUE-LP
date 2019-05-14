import Home from "../views/Home";
import About from "../views/About";
import Recipe from "../views/Recipe";
import Post from "../views/Post";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

import NotFound from "../views/404";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../views/Dashboard";
import DashboardSubpage from "../views/DashboardSubpage";

const routes = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home
  },
  {
    path: "/404",
    name: "NotFound",
    title: "NotFound",
    component: NotFound
  },
  {
    path: "/about",
    name: "about",
    title: "About",
    component: About
  },
  {
    path: "/recipe",
    name: "recipe",
    title: "Recipe",
    component: Recipe
  },
  {
    path: "/post",
    name: "post",
    title: "Post",
    component: Post
  },
  {
    path: "/signin",
    name: "signin",
    title: "Sign In",
    component: SignIn
  },
  {
    path: "/signup",
    name: "signup",
    title: "Sign Up",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: "DashboardLayout",
    title: "DashboardLayout",
    component: DashboardLayout,
    meta: {
      authRequired: true
    },
    redirect: { name: "DashboardPage" },
    children: [
      {
        path: "dashboard",
        name: "DashboardPage",
        title: "DashboardPage",
        component: DashboardPage
      },
      {
        path: "subpage",
        name: "DashboardSubpage",
        title: "DashboardSubpage",
        component: DashboardSubpage
      }
    ]
  },
  {
    path: "*",
    redirect: { name: "/" }
  }
];

export default routes;
