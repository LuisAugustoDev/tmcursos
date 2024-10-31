<template>
    
    <div class="configs">
        <barraTitulo :texto="'Configurações'" />

        <div class="menu-configs">
            <div class="item-config">
                <h5 class="check-texto">Modo Escuro</h5>
                <div class="checked">
                    <input type="checkbox" id="check">
                    <label for="check" class="button"></label>
                </div>
            </div>
            <div class="item-config">
                <h5 class="check-texto">Receber E-mails</h5>
                <div class="checked">
                    <input type="checkbox" id="check">
                    <label for="check" class="button"></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let botoes = document.querySelector('.button');
</script>

<script setup>
import barraTitulo from '../../componentes/barraTitulo.vue';
</script>

<style lang="scss">
.configs {
    padding: 30px;

    .menu-configs {
        padding-block: 20px;

        .item-config {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 15px 20px;
            justify-content: space-between;
            border-bottom: 1px solid #000;
            .check-texto {
                margin: 0;
            }

            .checked {
                width: 80px;
                height: 40px;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;

                .button {
                    background-color: #d2d2d2;
                    width: 100%;
                    height: 100%;
                    border-radius: 50px;
                    cursor: pointer;
                    position: relative;
                }
                .button::before {
                    position: absolute;
                    content: '';
                    background-color: #fff;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    margin: 5px;
                    transition: 0.3s;
                }

                input:checked + .button {
                    background-color: #990EF1;
                }

                input:checked + .button::before {
                    transform: translateX(40px);
                }

                input {
                    display: none;
                }
            }
        }
    }
}
</style>