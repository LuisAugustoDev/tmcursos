<template>
    <cabecalho :busca_exibir="true" :usuario_exibir="true" />

    <main>
        <div class="area-curso">
            <img :src="cursoFiltrado.capa" alt="Capa do curso">
            <div class="area-text">
                <h1 class="titulo-curso">{{cursoFiltrado.titulo}}</h1>
                <h5 class="autor-curso">{{cursoFiltrado.autor}}</h5>
                <p class="nota"><i class="fa fa-star"></i> {{cursoFiltrado.avaliacao}}</p>
                <a>Inscrever-se</a>
            </div>
        </div>

        
        <div class="area-descricao">
            <div class="sobre" id="sobre">
                <h2 class="titulos">Sobre o Curso</h2>
                <div v-html="'<span class=\'space\'></span>' + cursoFiltrado.descricao"></div>
            </div>
            <div class="modulos">
                <h2 class="titulos">Módulos</h2>
                
                <div class="sumarios">
                    <details v-for="(modulo, indice) in cursoFiltrado.modulos">
                        <summary>Módulo {{indice+1}} - {{modulo.titulo}}</summary>
                        <p><span class="space"></span>{{modulo.descricao}}</p>
                    </details>
                </div>
            </div>
        </div>
    </main>
    <tmFooter></tmFooter>
</template>

<script setup>
import cabecalho from '../componentes/header.vue';
import tmFooter from '@/componentes/tmFooter.vue';
</script>

<script>
import dados from '../../../assets/cursos/dados.json';
let cursos = dados.cursos;

export default {
    data() {
        return {
            cursoFiltrado: null
        };
    },
    created() {
        const id = parseInt(this.$route.params.id);
        this.cursoFiltrado = cursos.find(item => item.id === id);
        console.log(this.cursoFiltrado);
    }
}
</script>
<style lang="scss">
.space {
    margin-inline: 30px;
}
.desc-curso {
    text-align: justify;
    padding-inline: 10px;
}
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
            background-color: #990EF1;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
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

.area-descricao {
    width: 100%;
    overflow: hidden;
    padding: 30px 10vw;
    display: flex;
    flex-direction: column;

    .sobre {
        div {
            font-size: 18px;
        }
    }
    .titulos {
        font-weight: bold;
        color: #990EF1;
    }

    .sumarios{
        padding-inline: 10px;

        summary {
            padding: 10px 15px;
            border-bottom: 1px solid #777;
            margin-bottom: 5px;
            font-weight: bold;
            transition: 0.5s;
            cursor: pointer;

            p {
                font-size: 18px;
            }
        }

        details summary::-webkit-details-marker {
            background-color: red;
        }
        summary:hover {
            background-color: #eceaea;
        }

        p {
            padding: 10px;
            margin: 0;
            text-align: justify;
        }

        details[open] summary ~ * {
            animation: sweep .5s ease-in-out;
        }

        @keyframes sweep {
            from{
                opacity: 0; margin-top: -10px;
            }
            to{
                opacity: 1; margin-top: 0;
            }
        }
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
    .area-descricao {
        padding-inline: 5vw;

        .sobre {
            div {
                text-align: justify;
            }
        }
    }
}
</style>