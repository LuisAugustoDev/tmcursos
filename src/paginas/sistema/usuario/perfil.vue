<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="false" />
    
    <main>
        <div class="sidebar">
            <sidebar/>
        </div>
        <div class="tela">
            <RouterView />
        </div> 
    </main>
    
    <tmFooter class="footer" />
</template>

<script setup>
import cabecalho from '../componentes/header.vue';
import sidebar from './componentes/sidebar.vue';

import tmFooter from '@/componentes/tmFooter.vue';
</script>

<style lang="scss">
main {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
}
.sidebar {
    width: 25%;
    height: 100vh;
    border-right: 1px solid #000000;
}

.tela {
    width: 75%;
}

.footer {
    width: 100%;
}

@media (max-width: 576px) {
    main {
        flex-direction: column;

        .sidebar {
            width: 100%;
            height: auto;
            border-right: none;
        }

        .tela {
            width: 100%;
        }
    }
}
</style>