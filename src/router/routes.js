const routes = [
  {
    path: "/main",
    name: "main",
    meta: { title: "main" },
    component: () => import("../pages/main")
  }
];
export default routes;
//绝对不能加大括号！！！！
