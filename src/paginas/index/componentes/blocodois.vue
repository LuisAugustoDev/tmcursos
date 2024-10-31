<template>
    <div id="blocoDois">
        <h2>você sabia que...</h2>

        <div class="dados">
            <div class="dado">
                <h1 class="porcentagem">49%</h1>
                <p class="descricao">Das pessoas não possuem conhecimento de serviço Office?</p>
            </div>

            <div class="dado">
                <h1 class="porcentagem">49%</h1>
                <p class="descricao">Das pessoas não conhecem as principais técnicas de digitação?</p>
            </div>

            <div class="dado">
                <h1 class="porcentagem">49%</h1>
                <p class="descricao">Das pessoas não sabem o que é um Sistema Operacional?</p>
            </div>
        </div>

        <div class="desc-pesquisa">
            <p class="desc">* Pesquisa realizada entre xx/xx e xx/xx de 2024, em x escolas do Traíri.</p>
            <p class="desc">Fonte: TecnoMinds</p>
        </div>
    </div>
</template>

<style lang="scss">
#blocoDois {
    width: 100vw;
    height: 100vh;
    padding-inline: 100px;
    padding-top: 30px;

    h2 {
        width: 50%;
        font-size: 50px;
        color: #990EF1;
        font-weight: 600;
        margin-bottom: 20vh;
    }

    .dados {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 20vh;

        .dado {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: end;

            .porcentagem {
                font-size: 70px;
                font-weight: bolder;
                color: #000;
            }

            .descricao {
                font-weight: 500;
                font-style: italic;
                color: #990EF1;
            }
            .descricao, .porcentagem {
                width: 100%;
                margin: 0;
                padding-inline: 25%;
                text-align: center;
            }
        }
    }

    .desc-pesquisa {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            text-align: center;
            font-size: 20px;
            font-style: italic;
            font-weight: 500;
            margin-bottom: 5vh;
        }
    }
}

@media (max-width: 576px) {
    #blocoDois {
        height: 120vh;
        padding: 10vh 40px 0px 40px;
        display: flex;
        flex-direction: column;

        h2 {
            width: 100%;
            margin-bottom: 20px;
            font-size: 35px;
        }
        .dados {
            display: inherit;
            flex-direction: inherit;
            margin-bottom: 10px;
            .dado {
                width: 100%;
                margin-bottom: 20px;
            }
        }

        .desc-pesquisa {
            p {
                margin-bottom: 10px;
            }
        }
    }
}
</style>