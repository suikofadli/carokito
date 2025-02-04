import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "#0292E4",
                    50: "#9FDCFE",
                    100: "#8BD4FE",
                    200: "#63C5FE",
                    300: "#3AB7FD",
                    400: "#12A8FD",
                    500: "#0292E4",
                    600: "#026EAC",
                    700: "#014B75",
                    800: "#01273D",
                    900: "#000406",
                    950: "#000000",
                },
            },
        },
    },

    plugins: [forms, typography],
};
