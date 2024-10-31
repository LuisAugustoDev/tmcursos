<template>
    <cabecalho :busca_exibir="false" :usuario_exibir="false" />

    <main>
        <div class="titulo_respostas">
            <p id="respondendo">Responda às questões - {{ cursofiltrado.titulo }}</p>
            <p id="questao_atual" v-show="feedback === null">{{questaoAtual}}/{{cursofiltrado.questoes.length}}</p>
        </div>

        <div class="questao" v-for="q in cursofiltrado.questoes" :key="q.id" v-show="q.id === questaoAtual">
            <div id="titulo">
                <h5 id="enunciado">{{ q.id }}. {{ q.enunciado }}</h5>
             </div>
    
            <div id="area-alternativas">
                <div class="alternativa" 
                    v-for="alt in q.alternativas" 
                    :key="alt.id" 
                    @click="selecionarQuestao(alt.id)"
                    :class="(alternativaSelecionada === alt.id) ? 'selecionado' : ''">
                        <a :id="'alt' + alt.id">{{letras[alt.id-1]}}) {{ alt.resposta }}</a>
                </div>
    
                <div id="botao">
                    <button @click="responder()" v-show="alternativaSelecionada != null">Responder questão</button>
                </div>
            </div>
        </div>

        <div class="resultado" v-html="feedback" v-show="feedback != null"></div>
    </main>

    <tmFooter />
</template>

<script setup>
import cabecalho from '@/paginas/sistema/componentes/header.vue';
import tmFooter from '@/componentes/tmFooter.vue';
</script>

<script>
import dados from '../../../assets/cursos/dados.json';
import { ref } from 'vue';
let cursos = dados.cursos;

let letras = ['A', 'B', 'C', 'D', 'E', 'F'];

export default {
    data() {
        return {
            cursofiltrado: null,
            questaoAtual: 1,
            alternativaSelecionada: null,
            respostasCorretas: 0,
            feedback: null
        };
    },
    created() {
        const id = this.$route.params.id;
        this.cursofiltrado = cursos.find(curso => curso.id === Number(id));
        console.log(this.cursofiltrado);
    },
    methods: {
        selecionarQuestao(id) {
            this.alternativaSelecionada = id;
        },
        responder() {
            const questaoAtual = this.cursofiltrado.questoes[this.questaoAtual-1];
            const alternativaCorreta = questaoAtual.alternativas.find(alt => alt.isCorreta);

            if(this.alternativaSelecionada === alternativaCorreta.id) {
                this.respostasCorretas++;
            } 

            if (this.questaoAtual < this.cursofiltrado.questoes.length) {
                this.questaoAtual++; // Avança para a próxima questão
            } else {
                this.questaoAtual++;
                this.exibirResultado(); // Exibe o resultado final
            }

            this.alternativaSelecionada = null;
        },
        exibirResultado() {
            const respcertas = this.respostasCorretas;
            this.feedback = `   <h3 id="parabens">Parabéns!</h3>
                                <p>Você acertou</p>
                                <h4>` + respcertas + `/` + this.cursofiltrado.questoes.length +`</h4>
                                <a href="/home">Obter certificado</a>`;
        }
    }
}
</script>

<style lang="scss">
main {
    padding: 4vh 10vw;

    .titulo_respostas {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid #000;
        padding: 5px 20px;

        p {
            margin: 0;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 18px;
        }
    }

    .questao {
        padding: 5vh 5vw 10vh 5vw;
    
        #titulo {
            margin-bottom: 15px;
            #enunciado {
                font-size: 24px;
                margin: 0;
            }
        }
    
        #area-alternativas {
            width: 100%;
    
            .alternativa {
                width: 100%;
                padding: 10px 10px;
                border: 3px solid #000;
                margin-block: 5px;
                transition: .3s;
                cursor: pointer;
    
                &:hover, &.selecionado {
                    border-color: #990EF1;
    
                    a {
                        color: #990EF1;
                    }
                }
    
                a {
                    font-weight: 600;
                    transition: .5s;
                }
            }
    
            #botao {
                padding-block: 15px;
                display: flex;
                justify-content: end;
                button {
                    outline: none;
                    padding: 10px 30px;
                    font-size: 16px;
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
        }
    }

    .resultado {
        padding: 15vh 5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;

        #parabens {
            font-weight: 700;
            text-transform: uppercase;
            font-size: 48px;
            margin: 0;
        }

        p {
            text-transform: uppercase;
            letter-spacing: 10px;
            margin: 0;
        }

        h4 {
            font-weight: 700;
            color: #990EF1;
            font-size: 48px;
            text-transform: uppercase;
        }

        a {
            text-decoration: none;
            color: #990EF1;
            background-color: #000;
            padding: 10px 30px;
            border-radius: 10px;
            font-weight: 700;
            margin-inline: auto;    
            transition: .5s;

            &:hover {
                background-color: transparent;
                border: 3px solid #990EF1;
                color: #000;
            }
        }
    }
}
</style>