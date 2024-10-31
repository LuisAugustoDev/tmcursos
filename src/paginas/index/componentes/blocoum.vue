<template>
    <div id="blocoUm">
        <h1 class="titulo-conv">Amplie suas habilidades e <br>abra novas portas para oportunidades!</h1>
        <p class="parag-conv">Descubra o quanto a tecnologia pode simplificar sua vida.</p>

        <RouterLink to="/cursos" class="vamosla">Vamos lá!</RouterLink>
    </div>
</template>

<style lang="scss">
#blocoUm {
    width: 100vw;
    height: 100vh;
    padding: 220px 100px;
    background-image: linear-gradient(#ffffff00 50%, #ffffff 100%), url('../../../assets/fundo-index.jpg');
    color: #fff;

    .titulo-conv {
        font-weight: bolder;
        margin: 0;
        font-size: 50px;
    }
    .parag-conv {
        font-style: italic;
        font-size: 24px;
    }

    .vamosla {
        background: #fff;
        padding: 10px 20px;
        text-decoration: none;
        font-weight: 500;
        font-style: italic;
        color: #990EF1; 
        border-radius: 10px;
        margin-left: 20px;
        margin-top: 20px;
    }
}

@media (max-width: 576px) {
    #blocoUm {
        height: 70vh;
        padding: 10vh 40px 0px 40px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;

        .titulo-conv {
            font-size: 32px;
        }

        .parag-conv {
            font-size: 20px;
        }

        .vamosla {
            margin-inline: auto;
        }
    }
}
</style>