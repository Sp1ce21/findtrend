import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/facebook",
    name: "facebook",
    component: () =>
      import(
        /* webpackChunkName: "facebook" */ "../components/posts/FacebookPosts.vue"
      ),
  },
  {
    path: "/twitter",
    name: "twitter",
    component: () =>
      import(
        /* webpackChunkName: "twitter" */ "../components/posts/TwitterPosts.vue"
      ),
  },
  {
    path: "/ball",
    name: "ball",
    component: () =>
      import(
        /* webpackChunkName: "ball" */ "../components/posts/BallPosts.vue"
      ),
  },
  {
    path: "/pinterest",
    name: "pinterest",
    component: () =>
      import(
        /* webpackChunkName: "pinterest" */ "../components/posts/PinterestPosts.vue"
      ),
  },
  {
    path: "/m",
    name: "m",
    component: () =>
      import(/* webpackChunkName: "m" */ "../components/posts/MPosts.vue"),
  },
  {
    path: "/reddit",
    name: "reddit",
    component: () =>
      import(
        /* webpackChunkName: "reddit" */ "../components/posts/RedditPosts.vue"
      ),
  },
  {
    path: "/vk",
    name: "vk",
    component: () =>
      import(/* webpackChunkName: "vk" */ "../components/posts/VkPosts.vue"),
  },
  {
    path: "/linkedin",
    name: "linkedin",
    component: () =>
      import(
        /* webpackChunkName: "linkedin" */ "../components/posts/LinkedinPosts.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
