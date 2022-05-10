module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'doctor-pattern': "url('../../Projects/doctors-portal-client/src/assets/images/bg.png')",

            }
        },
    },
    daisyui: {
        themes: [{
                doctortheme: {
                    primary: "#0fcfec",
                    secondary: "#19d3ae",
                    accent: "#3a4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
}