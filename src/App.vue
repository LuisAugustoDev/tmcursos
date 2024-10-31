<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
export default {
    name: 'App',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = (to.meta.title) ? "TecnoMinds" + to.meta.title : "TecnoMinds";
            }
        },
    }
};
</script>
<style scoped>
</style>
