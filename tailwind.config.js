/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: "var(--primary-color)",
                primaryLight: "var(--primary-light)",
                primaryDark: "var(--primary-dark)",
                surface: "var(--surface-color)",
                background: "var(--background-color)",
                textPrimary: "var(--text-primary)",
                textSecondary: "var(--text-secondary)",
                borderColor: "var(--border-color)",
                hoverColor: "var(--hover-color)",
                seatOccupied: "var(--seat-occupied-bg)",
            },
        },
    },
    plugins: [],
};
