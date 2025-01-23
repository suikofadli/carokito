import "../css/app.css";
import "./bootstrap";

import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
// import BaseLayout from "./Layouts/BaseLayout.vue";

// const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const appName = "Warta Bengkulu";

createInertiaApp({
    title: (title) =>
        title
            ? `${title} - ${appName}`
            : `${appName} - Berita Bengkulu Terkini`,
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        );

        // page.default.layout ??= BaseLayout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
