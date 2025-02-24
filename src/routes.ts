import {
    type RouteConfig,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./pages/ProjectLayout.tsx", [
        route("/", "./pages/HomePage.tsx"),
        route("/login", "./pages/LoginPage.tsx"),
        route("/register", "./pages/RegisterPage.tsx"),
        route("/juicingstation", "./pages/JuicingStationPage.tsx"),
        route("*?", "catchall.tsx"),
    ])
] satisfies RouteConfig