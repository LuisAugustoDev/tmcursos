<template>
    <div id="blocoTres">
        <h2>Sobre Nós</h2>
        <h3><span></span>Composto pelos alunos Rikelmo dos Santos, Augusto da Silva, Miguel Confessor e Géssica da Silva, grupo TecnoMinds nasceu através da criação do Projeto Integrador, realizado por alunos de Informática do Instituto Federal — Campus Santa Cruz, com a proposta de levar conhecimento à comunidade externa da instituição, em especial, os alunos de escola pública, ingressantes no ensino médio. </h3>
    </div>
</template>

<style lang="scss">
#blocoTres {
    width: 100vw;
    height: 50vh;
    padding-inline: 100px;
    padding-top: 30px;

    h2 {
        width: 50%;
        font-size: 50px;
        color: #990EF1;
        font-weight: 600;
        margin-bottom: 5vh;
    }

    h3 {
        padding-inline: 20px;
        text-align: justify;
        font-weight: 400;
        font-style: italic;

        span {
            margin-inline: 40px;
        }
    }
}

@media (max-width: 576px) {
    #blocoTres {
        height: 100vh;
        padding: 10vh 40px 0px 40px;
        margin-block: 10px 60px;
        display: flex;
        flex-direction: column;

        span {
            margin-inline: 10px;
        }

        h2 {
            width: 100%;
            margin-bottom: 30px;
            font-size: 35px;
        }
    }
}
</style>