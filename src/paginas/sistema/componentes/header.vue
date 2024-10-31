<template>
    <header>
        <img id="logo" src="../../../assets/logo-ext-roxo.png" alt="TecnoMinds" width="150px" height="30px">

        <div class="menu">
            <div class="menu-fechar" @click="toggleMenu">
                <a><i class="fa-solid fa-xmark"></i></a>
            </div>
            <div class="pesquisa" v-if="busca_exibir">
                <span><i class="fa fa-search"></i></span>
                <input type="text" name="pesquisa" id="pesquisa" placeholder="Pesquisar Curso">
            </div>

            <div class="perfil-user" v-if="usuario_exibir">
                <RouterLink to="/perfil/dados"><i class="fa fa-user"></i> Olá, usuário!</RouterLink>
            </div>
        </div>
        
        <a class="menu-abrir" @click="toggleMenu" v-if="busca_exibir || usuario_exibir"><i class="fa-solid fa-bars"></i></a>
        <div class="overlay-links" @click="toggleMenu"></div>
    </header>
</template>

<script setup>
defineProps({
  usuario_exibir: Boolean,
  busca_exibir: Boolean
})
//Defini uma propriedade do componente. Para exibir o botao do perfil do usuario apenas quando a variavel for True

function toggleMenu() {
    console.log('clicado');
    document.querySelector('.menu').classList.toggle('aberto');
    document.querySelector('.overlay-links').classList.toggle('ativo');
    document.querySelector('body').classList.toggle('no-scroll');
}
</script>

<style lang="scss">
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 10vw;
    padding-block: 15px;
    align-items: center;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    .pesquisa {

        span {
            position: absolute;
            top: 22px;
            margin-left: 10px;
        }

        input {
            width: 30vw;
            padding: 5px 10px;
            padding-left: 30px;
            outline: none;
            border: 1px solid #777;
            border-radius: 5px;
        }
    }

    .perfil-user {
        a {
            text-decoration: none;
            color: #000;
            transition: .5s;
        }

        a:hover {
            font-weight: bold;
            color: #990EF1;
        }
    }

    .menu-abrir {
        color: #990EF1;
        padding: 10px;
        border-radius: 100px;
        font-size: 20px;
        display: none;
    }

    .overlay-links {
        width: 0%;
        overflow: hidden;
        display: block;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.09), rgb(0, 0, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 7777;
        transition: .5s;
    }

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70%;

        .menu-fechar {
            display: none;
        }
    }
}

@media (max-width: 576px) {
    header {

        .ativo {
            width: 100%;
        }

        .menu-abrir {
            display: block;
        }
        .menu-fechar {
            font-size: 24px;
        }

        .menu {
            position: absolute;
            top: 0;    
            right: 0;
            background-color: #fff;
            width: 0%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: end;
            text-align: end;
            z-index: 99999;
            transition: .5s;
            div {
                margin-block: 10px;
            }
            .pesquisa {
                display: flex;
                width: 100%;

                input {
                    padding-inline: 10px;
                    width: 100%;
                }

                span {
                    display: none;
                }
            }

            .perfil-user {
                width: 100%;
            }

            &.aberto {
                padding: 20px 30px;
                width: 70%;
                height: 100vh;
            }
        }
    }
}
</style>