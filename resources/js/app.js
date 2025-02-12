import "../css/app.css";
import "./bootstrap";

import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { getSeoTitle } from "./utils";
// import BaseLayout from "./Layouts/BaseLayout.vue";

createInertiaApp({
    title: (title) => getSeoTitle(title),
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        );

        // page.default.layout ??= BaseLayout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
