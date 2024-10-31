<template>
    <div class="login">
        <img src="../../assets/logo-ext-roxo.png" alt="TecnoMinds">

        <h1 class="titulo">Seja bem-vindo(a)!</h1>
        <h5 class="titulo2">Preecha os dados abaixo para se cadastrar</h5>

        <form action="">
            <div class="div2">
                <input type="text" name="usuario_nome" id="usuario_nome" placeholder="Nome">
                <input type="text" name="usuario_snome" id="usuario_snome" placeholder="Sobrenome">
            </div>
            
            <input type="email" name="email" id="email" placeholder="E-mail">

            <div class="div2 quebrar_linha">
                <input type="text" name="data_nasc" id="data_nasc" placeholder="Data de Nascimento">
                <select id="genero" name="genero">
                    <option value="null">Selecione um Gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
            </div> 

            <div class="div2 quebrar_linha">
                <input type="password" name="senha" id="senha" placeholder="Senha">
                <input type="password" name="senha2" id="senha2" placeholder="Confirme a Senha">
            </div>
            

            <button type="submit">Cadastrar</button>
            <p>Ou, se preferir <RouterLink to="/login">Volte ao login</RouterLink>!</p>
        </form>    
    </div>
</template>

<script>
//Mascara para campo idade 
$("#data_nasc").mask("00/00/0000");
</script>

<style lang="scss" src="./estiloEntrada.scss"></style>
<style lang="scss">
form {
    width: 40% !important;

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
            margin-bottom: 20px;
            outline: none;
        }
    }
}

@media (max-width: 576px) {
    .login {
        width: 80vw;
        margin-inline: auto;

        h1 {
            font-size: 25px;
            font-weight: 700;
        }
        form {
            width: 100% !important;

            .quebrar_linha {
                flex-direction: column;

                input, select {
                    width: 100%;
                }
            }
        }
    }
}
</style>