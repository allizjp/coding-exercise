import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const catchAllRoute = route("*", "routes/NotFound.tsx");
const HomeRoute = index("routes/Home.tsx");

const DefaultLayoutRoute = layout("layouts/DefaultLayout.tsx", [
  catchAllRoute,
  HomeRoute,
]);

export default [DefaultLayoutRoute] satisfies RouteConfig;
