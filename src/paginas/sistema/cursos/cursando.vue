<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="false"/>

    <main v-if="cursoFiltrado">
        <div class="area-curso">
            <img :src="cursoFiltrado.capa" alt="Capa do curso">
            <div class="area-text">
                <h1 class="titulo-curso">{{cursoFiltrado.titulo}}</h1>
                <h5 class="autor-curso">{{cursoFiltrado.autor}}</h5>
                <p class="nota"><i class="fa fa-star"></i> {{cursoFiltrado.avaliacao}}</p>
                <a>Cursando</a>
            </div> 
        </div>

        <div class="area-modulos">
            <div class="modulos">
                <div class="modulo"
                    v-for="(modulo, index) in cursoFiltrado.modulos" 
                    :key="modulo.id" 
                    @click="setModulo(index + 1)" 
                    :class="getModulo(index + 1) ? 'ativo' : ''">

                    <p :id="'modulo' + (index+1)">Modulo {{ index + 1 }}</p>
                </div>
            </div>  

            <div class="modulos-content" v-for="(modulo, indice) in cursoFiltrado.modulos" :key="modulo.id" v-show="getModulo(indice+1)">
                <div class="modulo-conteudo">
                    <h2 id="titulo_conteudo">Módulo {{modulo.id}} - {{ modulo.titulo }}</h2>
            
                    <div class="area-texto">
                        <div class="paragrafo" v-html="modulo.textoum"></div>
                        <div id="div-video" v-if="modulo.videoId">
                            <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + modulo.videoId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="paragrafo" v-html="modulo.segundoTexto"></div>
                    </div>
                </div>
                <div class="area-botao">
                    <button class="botao" v-if="(indice+1) < cursoFiltrado.modulos.length" @click="concluirModulo()">Concluir módulo</button>
                    <button class="botao" v-if="(indice+1) === cursoFiltrado.modulos.length" @click="concluirCurso">Concluir curso</button>
                </div>
            </div>
        </div>
    </main>

    <main v-else>
        <div class="erro">
            <h5>Que pena! O curso que você acessou não existe. :(</h5>
            <p>Você pode voltar para a <RouterLink to="/home">página inicial</RouterLink>!</p>
        </div>
    </main>

    <tmFooter />
</template>

<script setup>
import cabecalho from '../../sistema/componentes/header.vue';
import tmFooter from '@/componentes/tmFooter.vue';
</script>

<script>
import meusCursos from '@/assets/cursos/dados.json';
let myCursos = meusCursos;

export default {
    data() {
        return {
            cursoFiltrado: null,
            nModulos: 8,
            moduloAtual: 1
        };
    },
    created() {
        const id = Number(this.$route.params.id);
        this.cursoFiltrado = myCursos.cursos.find(curso => curso.id === id);
    },
    methods: {
        setModulo(index) {
            console.log(index);
            this.moduloAtual = index;
            console.log("modulo atual = " + this.moduloAtual);
        },
        getModulo(index) {
            return this.moduloAtual === index;
        },

        concluirModulo() {
            let parag = document.querySelector('#modulo' + this.moduloAtual);
            parag.innerHTML += ' <i class="fa-solid fa-circle-check" style="color: green;"></i>';
            this.moduloAtual++;
        },
        concluirCurso() {
            this.$router.push('/concluircurso/' + this.$route.params.id);
        }
    }
}
</script>

<style lang="scss">
.area-curso {
    width: 100%;
    height: 35vh;
    overflow: hidden;
    padding: 30px 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #777;
    margin-bottom: 10px;

    img {
        height: 100%;
        border-radius: 10px;
    }

    .area-text {
        padding: 10px 25px;

        .titulo-curso {
            font-weight: bold;
            margin: 0;
            text-transform: uppercase;
        }

        .autor-curso {
            font-style: italic;
            margin-top: 0;
        }

        .nota {
            margin-bottom: 10px;
        }

        a {
            padding: 10px 60px;
            background-color: #9d9d9d;
            color: #464646;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 10px;
            transition: .5s;
            cursor: pointer;
        }
    }
}

.area-modulos {
    width: 80%;
    margin-inline: auto;
    margin-block: 40px;

    .modulos-content {
        .modulo-conteudo {
            padding: 30px 40px;
        
            #titulo_conteudo {
                font-weight: bold;
            }
        
            .area-texto {
                padding-inline: 30px;
        
                .paragrafo {
                    font-size: 20px;
                    margin: 0;
                    text-align: justify;
                }
        
                #div-video {
                    display: flex;
                    justify-content: center;
                    padding-block: 30px;
        
                    width:  560px;
                    height: 330px;
                    margin-inline: auto;
                }
        
                .space {
                    margin-inline: 30px;
                }
            }
        }
    }
    .area-botao {
        display: flex;
        justify-content: end;
        padding-inline: 20px;

        button {
            outline: none;
            padding: 15px 50px;
            border: none;
            background-color: #990EF1;
            color: #fff;
            font-weight: 600;
            text-transform: uppercase;
            border-radius: 10px;
            transition: .3s;

            &:hover {
                background-color: #fff;
                border: 3px solid #990EF1;
                color: #990EF1;
                box-shadow: 0px 5px 34px -3px rgba(0,0,0,0.5);
            }
        }
    }

    .modulos {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .modulo {
            width: 100%;
            padding-block: 10px;
            transition: 0.1s;

            p {
                text-align: center;
                margin: 0;
                transition: inherit;
                cursor: pointer;
            }

            &:hover {
                background-color: #e3e3e3;

                p {
                    font-weight: bold;
                }
            }

            &.ativo {
                border-bottom: 3px solid #990EF1;

                p {
                    color: #990EF1;
                    font-weight: bold;
                }
            }
        }
    }
}

.erro {
    width: 60vw;
    margin-inline: auto;
    margin-top: 30vh;
    text-align: center;
    
    h5 {
        text-transform: uppercase;
        font-weight: 700;
    }

    a {
        color: #990EF1;
        text-decoration: none;
    }
}

@media (max-width: 576px) {
    .space {
        margin-inline: 10px;
    }
    .area-curso {
        flex-direction: column;
        height: auto;
        padding-inline: 5vw;
        img {
            width: 100%;
            border-radius: 10px;
        }

        .area-text {
            text-align: center;
            padding: 15px;
        }
    }

    .area-modulos {
        .modulos {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .modulo {
                width: 50%;
            }
        }

        .modulos-content {
            .modulo-conteudo {
                padding-inline: 20px;
        
                #titulo_conteudo {
                    font-size: 22px;
                }
        
                .area-texto {
                    padding-inline: 0;
        
                    #div-video {
                        margin: 0;
                        width: 100%;
                        height: 40%
                    }
                }
            }
        }
    }
}
</style>
