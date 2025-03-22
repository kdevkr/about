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

    locales: {
        root: {
            label: "한국어",
            lang: "ko-KR",
            title: "Mambo",
            description: "개발자 Mambo의 포트폴리오",
            themeConfig: {
                logo: "./favicon/favicon.ico",
                nav: [
                    { text: "경험", link: "/experience" },
                    { text: "블로그", link: "https://kdev.ing" },
                    { text: "Github", link: "https://github.com/kdevkr" },
                ],
                sidebar: [
                    {
                        items: [
                            { text: "경험", link: "/experience" },
                            { text: "기술", link: "/skills" },
                            { text: "활동", link: "/activities" },
                            { text: "문제해결", link: "/troubleshooting" },
                        ],
                    },
                ],
                footer: {
                    copyright: 'Copyright © 2023-2025 <a href="https://github.com/kdevkr">Mambo<a/>',
                },
            },
        },
        en: {
            label: "English",
            lang: "en-US",
            title: "Mambo",
            description: "Developer Mambo's Portfolio",
            themeConfig: {
                logo: "./favicon/favicon.ico",
                nav: [
                    { text: "Experience", link: "/en/experience" },
                    { text: "Blog", link: "https://kdev.ing" },
                    { text: "Github", link: "https://github.com/kdevkr" },
                ],
                sidebar: [
                    {
                        items: [
                            { text: "Experience", link: "/en/experience" },
                            { text: "Skills", link: "/en/skills" },
                            { text: "Activities", link: "/en/activities" },
                            { text: "Troubleshooting", link: "/en/troubleshooting" },
                        ],
                    },
                ],
                footer: {
                    copyright: 'Copyright © 2023-2025 <a href="https://github.com/kdevkr">Mambo<a/>',
                },
            },
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
};
