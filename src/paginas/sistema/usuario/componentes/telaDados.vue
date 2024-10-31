<template>
    <div class="dados">
        <barraTitulo :texto="'Meus Dados'" />

        <form action="">
            <div class="div2">
                <input type="text" name="usuario_nome" id="usuario_nome" placeholder="Nome" disabled>
                <input type="text" name="usuario_snome" id="usuario_snome" placeholder="Sobrenome" disabled>
            </div>
            
            <input type="email" name="email" id="email" placeholder="E-mail" disabled>

            <div class="div2 quebrar_linha" >
                <input type="text" name="data_nasc" id="data_nasc" placeholder="Data de Nascimento" disabled>
                <select id="genero" name="genero" disabled>
                    <option value="null">Selecione um Gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
            </div> 

            <div class="div2 quebrar_linha">
                <input type="password" name="senha" id="senha" placeholder="Senha" disabled>
                <input type="password" name="senha" id="senha2" placeholder="Confirme a Senha" disabled>
            </div>
            

            <div class="buttondiv">
                <button>Atualizar dados</button>
            </div>
        </form>
    </div>
</template>

<script>
import barraTitulo from '../../componentes/barraTitulo.vue';
export default {
    components: {
        barraTitulo
    },
    mounted() {
        document.querySelector('#usuario_nome').value = "Hello";
        document.querySelector('#usuario_snome').value = "World";
        document.querySelector('#email').value = "usuario@email.com";
        document.querySelector('#data_nasc').value = "19/10/2024";
        document.querySelector('#genero').value = "masculino";
        document.querySelector('#senha').value = "minhasenha";
        document.querySelector('#senha2').value = "minhasenha";
    }
}
</script>

<style lang="scss">
.dados {
    padding: 30px;

    form {
        width: 90% !important;
        margin-inline: auto;
        margin-top: 20px;
        padding: 20px;

        input {
            padding: 10px 15px;
            outline: none;
            border-radius: 5px;
            border: 1px solid #777;
            margin-bottom: 20px;
        }

        input[type="email"] {
            width: 100%;
        }

        .div2 {
            display: flex;
            justify-content: space-between;

            input, select {
                width: 48%;
            }
    
            select {
                height: 100%;
                padding: 10px;
                border-radius: 5px;
                outline: none;
            }
        }

        button {
            width: 40%;
            outline: none;
            padding: 10px 5px;
            background-color: #990EF1;
            border: none;
            color: #fff;
            font-weight: 600;
            border-radius: 5px;
            text-transform: uppercase;
        }

        .buttondiv {
            display: flex;
            justify-content: end;
        }
    }
}

@media (max-width: 576px) {
    .dados{
        form {
            .quebrar_linha {
                flex-direction: column;
        
                input, select {
                    width: 100%;
                }
            }

            select {
                margin-bottom: 20px;
            }

            button {
                width: 100%;
            }
        }
    }
}
</style>