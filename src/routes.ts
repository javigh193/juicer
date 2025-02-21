import {
type RouteConfig,
route,
} from "@react-router/dev/routes";

export default [
    route("/", "./pages/Home.tsx"),
    route("*?", "catchall.tsx"),
] satisfies RouteConfig