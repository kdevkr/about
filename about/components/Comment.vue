<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title, lang } = useData()

const langCd = lang.value.split('-')[0];

const repo = import.meta.env.VITE_GISCUS_REPO;
const repoId = import.meta.env.VITE_GISCUS_REPO_ID;
const category = import.meta.env.VITE_GISCUS_CATEGORY;
const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID;
const mapping = import.meta.env.VITE_GISCUS_MAPPING;
const theme = import.meta.env.VITE_GISCUS_THEME;
</script>

<template>
    <component v-if="frontmatter.comment !== false" :key="title" :is="'script'" src="https://giscus.app/client.js"
        :data-repo="repo" :data-repo-id="repoId" :data-category="category" :data-category-id="categoryId"
        :data-mapping="mapping" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0"
        data-input-position="bottom" :data-lang="langCd" :data-theme="theme" data-loading="lazy" crossorigin="anonymous"
        async />
</template>
