<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="true"/>
    
    <main>
        <div class="area">
            <barraTitulo :texto="'Nossos Cursos'" />
            <div class="blocoCards">
                <div class="cardCurso" v-for="curso in cursos">
                    <RouterLink :to="{name: 'exibirCurso', params: {id: curso.id} }">
                    <img class="curso-capa" :src="curso.capa" alt="Capa do curso">
                    <div class="area-text" >
                        <h2 class="curso-titulo">{{curso.titulo}}</h2>
                        <h5 class="curso-autores">{{curso.autor}} • {{ curso.modulos.length }} Módulos</h5>
                        <p class="curso-avaliacao"><i class="fa fa-star"></i> {{ curso.avaliacao }}</p>
                    </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        
        <div class="area">
            <barraTitulo :texto="'Notícias Sobre Tecnologia'" />
            <div class="blocoCards">
            </div>
        </div>
    </main>

    <tmFooter />
</template>

<script setup>
import cabecalho from '../componentes/header.vue';
import barraTitulo from '../componentes/barraTitulo.vue';
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

            .cardCurso {
                width: 250px;
                height: 350px;
                margin-inline: 15px;
                box-shadow: 0px 0px 100px 3px rgba(0,0,0,0.1);
                transition: .5s all;
                overflow: hidden;
                border-radius:20px;
                margin-block: 20px;
            
                h2, h5, a, p {
                    margin: 0;
                    color: #000;
                }
                img {
                    width: 100%;
                }
            
                a {
                    text-decoration: none;
                }
            
                .curso-titulo {
                    max-width: 20ch;
                    overflow: hidden;
                    text-overflow: ellipsis;
            
                    display: -webkit-box;
                    -webkit-line-clamp: 2; // Quantidade de linhas  
                    -webkit-box-orient: vertical;
            
                    font-weight: 700;
                    transition: .5s;
                    margin-bottom: 5px;
                }
            
                a:hover h2 {
                    color: #990EF1;
                }
                .area-text {
                    padding: 10px;
                }
            
                h5 {
                    font-style: italic
                }
            }
            
            .cardCurso:hover {
                box-shadow: 0px 0px 50px 3px rgba(0,0,0,0.3);
                transform: scale(1.05)
            }
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