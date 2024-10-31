<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="true"/>
    
    <main>
        <div class="area">
            <barraTitulo :texto="'Nossos Cursos'" />
            <div class="blocoCards">
                <!-- <cardCurso v-for="c in cursos" :idCurso="c.id" :capa_curso="c.capa" :curso="true" :titulo="c.titulo" :criador="c.autor" :nModulos="c.totalModulos"  :avaliacao="c.avaliacao.toString()"/> -->
                 <cardCurso v-for="curso in cursos" :curso="curso" />
            </div>
        </div>
        
        <div class="area">
            <barraTitulo :texto="'Notícias Sobre Tecnologia'" />
            <div class="blocoCards">
                <cardCurso :curso="false" :titulo="'Uma Noticia'" :criador="'Google'" :data_post="'25/10/1921'" :link_noticia="'https://google.com'"/>
            </div>
        </div>
    </main>

    <tmFooter />
</template>

<script setup>
import cabecalho from '../componentes/header.vue';
import barraTitulo from '../componentes/barraTitulo.vue';
import cardCurso from '../componentes/cardCurso.vue';
import tmFooter from '@/componentes/tmFooter.vue';

import dados from '@/assets/cursos/dados.json';
let cursos = dados.cursos;
console.log(cursos);
</script>

<style lang="scss">
main {
    padding-block: 3vh;
    padding-inline: 10vw;

    .area {
        display: flex;
        flex-direction: column;
        padding: 10px;

        .blocoCards {
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: row;
            row-gap: wrap;
            justify-content: start;
        }
    }
}

@media (max-width: 576px) {
    main {
        padding: 2vh 5vw;
        
        .area {

            .blocoCards {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
}
</style>