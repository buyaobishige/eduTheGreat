const routes = [
  {
    path: "/main",
    name: "main",
    meta: { title: "main" },
    component: () => import("../pages/main")
  },
  {
    path: "/",
    name: "main",
    meta: { title: "main" },
    component: () => import("../pages/main")
  },
  {
    path: "/lecture",
    name: "lecture",
    meta: { title: "lecture" },
    component: () => import("../pages/lecture")
  },
  {
    path: "/charts",
    name: "charts",
    meta: { title: "charts" },
    component: () => import("../pages/Chartsview")
  },
];
export default routes;
//绝对不能加大括号！！！！
