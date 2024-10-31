<template>
    <div class="login">
        <img src="../../assets/logo-ext-roxo.png" alt="TecnoMinds">

        <h1 class="titulo">É bom te ver de volta!</h1>
        <h5 class="titulo2">Faça Login e acesse nosso sistema</h5>

        <form action="/home">
            <input type="text" name="usuario" id="usuario" placeholder="Usuário ou E-mail">
            <input type="password" name="senha" id="senha" placeholder="Senha">

            <button type="submit">Entrar</button>
            <p>Ainda não possui conta? <RouterLink to="/cadastro">Crie uma</RouterLink>!</p>
        </form>
    </div>
</template>

<script> 
</script>
<style lang="scss">
.login {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;

    img {
        width: 200px;
        height: 40px;
        margin-inline: auto;
        margin-bottom: 5vh;
    }

    h1, h5 {
        margin: 0;
        text-align: center;
    }

    form {
        width: 25%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        padding: 30px 20px;

        input {
            padding: 10px;
            outline: none;
            border: 1px solid #777;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        button {
            outline: none;
            padding: 10px 5px;
            background-color: #990EF1;
            border: none;
            color: #fff;
            font-weight: 600;
            border-radius: 5px;
            text-transform: uppercase;
        }

        p {
            margin-top: 10px;
            text-align: center;

            a {
                text-decoration: none;
                color: #990EF1;
                font-weight: 500;
            }
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
            width: 90%;
        }
    }
}
</style>