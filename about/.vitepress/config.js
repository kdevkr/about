export default {
    lang: "ko-KR",
    title: "Mambo",
    description: "Just playing around.",
    appearance: true,
    base: "/about/",
    lastUpdated: true,
    head: [
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "./favicon/apple-touch-icon.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon/favicon-16x16.png",
            },
        ],
        ["link", { rel: "shortcut icon", href: "./favicon/favicon.ico" }],
    ],

    // Theme related configurations.
    themeConfig: {
        logo: "./favicon/favicon.ico",
        sidebar: [
            {
                text: "Resume",
                items: [
                    { text: "Introduction", link: "/" },
                    { text: "Experience", link: "/experience" },
                    { text: "Skills", link: "/skills" },
                ],
            },
        ],
        footer: {
            copyright:
                'Copyright © 2023 <a href="https://github.com/kdevkr">Mambo<a/>',
        },
    },
};
