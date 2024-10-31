<template>
    <header id="header">
        <div class="div-logo"></div>
        
        <div class="links" @click="toggleMenu">
            <div class="menu-fechar" @click="toggleMenu">
                <a @click="toggleMenu"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <nav>
                <a href="#inicio">Início</a>
                <a href="#sobrenos">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>
    
            <div class="login">
                <RouterLink to="/login" id="entrar"><i class="fa-solid fa-right-to-bracket"></i> Entrar</RouterLink>
            </div>
        </div>

        <a class="menu" @click="toggleMenu">
            <i class="fa-solid fa-bars"></i>
        </a>
        
        <div class="overlay-links" @click="toggleMenu"></div>
    </header>

    <div class="blocoum" id="inicio"> <!-- Se inscrever no curso -->
        <blocoUm />
    </div>

    <div class="blocoum"> <!-- Dados da pesquisa -->
        <blocoDois />
    </div>
    <div class="blocoum" id="sobrenos"> <!-- Sobre Nós -->
        <blocoTres />
    </div>

    <tmFooter id="contato" />    
</template>

<script setup>
import blocoUm from './componentes/blocoum.vue';
import blocoDois from './componentes/blocodois.vue';
import blocoTres from './componentes/blocotres.vue';
import tmFooter from '@/componentes/tmFooter.vue';
import { ref, onMounted, onUnmounted } from 'vue';

let exibir_menu = ref(false);

function toggleMenu() {
    console.log('clicado');
    document.querySelector('.links').classList.toggle('aberto');
    document.querySelector('.overlay-links').classList.toggle('ativo')
}
</script>

<script>
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Rola suavemente para o elemento alvo
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
</script>

<style lang="scss">
header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 50px;
    position: fixed;
    top: 0;
    left: 0;

    .div-logo {
        background-image: url('../../assets/logo-ext.png');
        background-size: cover; /* ou 'contain' dependendo do efeito desejado */
        background-repeat: no-repeat; /* impede a repetição da imagem */
        background-position: center; /* centraliza a imagem */
        height: 30px; /* altura do elemento */
        width: 20%; /* largura do elemento */
        transition: .3s;
    }

    .links {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: end;

        nav {
            width: 40%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            a{
                text-decoration: none;
                color: #fff;
                font-weight: 600;
            }
        }
    
        .login {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-left: 2px solid #fff;
    
            a {
                text-decoration: none;
                color: #fff;
                font-weight: 600;
                padding-left: 10px;
            }
        }
    }
    .menu {
        color: #fff;
        padding: 10px;
        border-radius: 100px;
        font-size: 20px;
        display: none;
    }

    .menu-fechar {
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
}

header.rolagem {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    .div-logo {
        background-image: url('../../assets/logo-ext-roxo.png');
    }

    a {
        color: #990EF1;
    }
}

@media (max-width: 576px) {
    header {
        padding-inline: 20px;
        display: flex;
        align-items: center;


        .div-logo {
            height: 30px; /* altura do elemento */
            width: 50%; /* largura do elemento */
        }

        nav, .login {
            display: none;
        }       

        .ativo {
            width: 100%;
        }

        .links {
            width: 0%;
            overflow: hidden;
            transition: .5s;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: flex-start;
            align-items: end;
            background-color: #fff;
            padding-block: 20px;
            text-align: end;
            z-index: 99999;

            .menu-fechar {
                display: block;
                width: 100%;
                padding: 10px 20px;

                a {
                    color: #990EF1;
                    font-size: 25px;
                }
            }

            nav  {
                align-items: inherit;

                a {
                    width: 100%;
                    color: #990EF1;
                    padding: 10px 20px;
                    transition: .3s;

                    &:hover {
                        background-color: #990EF1;
                        color: #fff;
                    }
                }
            }

            .login {
                width: 100%;
                padding: 0;
                border: none;
                a {
                    width: 100%;
                    color: #990EF1;
                    padding: 10px 20px;
                    transition: .3s;

                    &:hover {
                        background-color: #990EF1;
                        color: #fff;
                    }
                }
            }

            &.aberto {
                width: 70%;
                z-index: 9999;

                nav {
                    width: 100%;
                    display: inherit;
                    flex-direction: inherit;

                    a {
                        padding-block: 10px;
                    }
                }
            }

        }

        .menu {
            display: block;
        }
    }
}
</style>