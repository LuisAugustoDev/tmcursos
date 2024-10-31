<template>
    <div class="cursos">
        <barraTitulo :texto="'Meus Cursos'" />

        <div class="area-cursos">
            <div class="bloco-curso" v-for="c in curso">
                <img :src="c.capa" :alt="c.titulo">
                <div class="lateral">
                    <h2 class="curso-titulo">{{c.titulo}}</h2>
                    <h5 class="curso-autores">{{c.autor}}</h5>
                    <a :href="'/cursando/' + c.id">Acessar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import barraTitulo from '../../componentes/barraTitulo.vue';

import dados from '../../../../assets/cursos/dados.json';
let curso = dados.cursos;
</script>

<script>

export default {
    components: {
        barraTitulo
    }
}
</script>

<style lang="scss">
.cursos {
    padding: 30px;

    .area-cursos {
        width: 100%;
        padding: 10px;
        max-height: 75vh !important;
        overflow-y: scroll;
        margin-block: 20px;

        &::-webkit-scrollbar {
            width: 16px;             /* width of the entire scrollbar */
            border-radius: 20px;
        }
      
        &::-webkit-scrollbar-track {
            background: #f4f4f4;        /* color of the tracking area */
        }
      
        &::-webkit-scrollbar-thumb {
            background-color: #990EF1;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
        }

        .bloco-curso {
            width: 100%;
            height: 200px;
            padding: 10px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border: 1px solid #000;
            border-radius: 10px;
            margin-bottom: 20px;

            

            img {
                height: 90%;
                border-radius: 10px;
            }

            .lateral {
                margin-left: 40px;
                height: 90%;
                padding-top: 20px;
                overflow: hidden;

                h2, h5 {
                    margin: 0;
                    margin-bottom: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    display: -webkit-box;
                    -webkit-line-clamp: 2; // Quantidade de linhas  
                    -webkit-box-orient: vertical;
                }

                h2 {
                    font-weight: bold;
                }
                h5 {
                    font-style: italic;
                }

                a {
                    padding: 10px 60px;
                    background-color: #990EF1;
                    color: #fff;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: 10px;
                    transition: .5s;
                    cursor: pointer;
                }
        
                a:hover {
                    color: #990EF1;
                    background-color: #fff;
                    border: 3px solid #990EF1;
                }
            }
        }
    }
}

@media (max-width: 576px) {
    .cursos {
        .area-cursos {
            .bloco-curso {
                flex-direction: column;
                padding: 10px;
                height: auto;

                img {
                    width: 100%;
                }

                .lateral {
                    margin: 0;
                    height: 100%;
                    padding: 10px 0px;

                    display: flex;
                    flex-direction: column;

                    h2, h5 {
                        margin: 0;
                    }
                    h5 {
                        margin-bottom: 20px;
                    }

                    a {
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>