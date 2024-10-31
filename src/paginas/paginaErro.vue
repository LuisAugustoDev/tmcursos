<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="false" />

    <main>
        <h1>Ocorreu um erro!</h1>
        <h5>A página que você tentou acessar (<span id="link" style="margin: 0;">/{{this.$route.params.pathMatch[0]}}</span>) não está disponível.</h5>
        <p>Você pode voltar para a <RouterLink to="/home">página home</RouterLink>.</p>
    </main>

    <tmFooter />
</template>

<script setup>
import cabecalho from '../paginas/sistema/componentes/header.vue';
import tmFooter from '@/componentes/tmFooter.vue';
</script>

<style lang="scss" scoped>
main {
    width: 70vw;
    margin-inline: auto;
    text-align: center;
    padding-block: 25vh;

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        margin: 0;
    }

    h5 {
        margin-block: 20px;
        font-weight: 500;
        span {
            color: #990EF1;
            font-weight: 700;
        }
    }

    p {
        margin: 0;
        font-style: italic;

        a {
            color: #990EF1;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    }
}
</style>