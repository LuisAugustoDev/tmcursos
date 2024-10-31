<template>
    <div class="titulo">
        <h1>{{texto}}</h1>
    </div>
</template>

<script setup>
defineProps({
  texto: String
})
</script>

<style>
.titulo {
    border-bottom: 2px solid #000;
    padding-left: 15px;
    padding-block: 5px;
    h1 {
        margin: 0;
        font-size: 30px;
        font-weight: bold;
    }
}
</style>