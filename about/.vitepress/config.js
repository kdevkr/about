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
        [
            "script",
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-V8LF04VMBF",
            },
        ],
        [
            "script",
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-V8LF04VMBF');",
        ],
    ],

    // Theme related configurations.
    themeConfig: {
        logo: "./favicon/favicon.ico",
        sidebar: [
            {
                items: [
                    { text: "Introduction", link: "/" },
                    { text: "Experience", link: "/experience" },
                    { text: "Skills", link: "/skills" },
                    { text: "Troubleshooting", link: "/troubleshooting" },
                ],
            },
        ],
        footer: {
            copyright:
                'Copyright © 2023 <a href="https://github.com/kdevkr">Mambo<a/>',
        },
    },
};
