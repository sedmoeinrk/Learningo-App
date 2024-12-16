import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/auth/layout.tsx", [
    route("auth", "routes/auth/login.tsx"),
    route("auth/register", "routes/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
