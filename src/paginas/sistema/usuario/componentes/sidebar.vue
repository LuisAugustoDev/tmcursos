<template>
    <div class="side">
        <div class="area-usuario">
            <img src="../../../../assets/user-photo.png" alt="Foto do usuário">
            <h5>Nome Sobrenome</h5>
            <h6>usuario@email.com</h6>
        </div>

        <ul>
            <RouterLink to="/perfil/dados"><li><i class="fa-solid fa-folder-open"></i>  Meus Dados</li></RouterLink>
            <RouterLink to="/perfil/cursos"><li><i class="fa-solid fa-graduation-cap"></i>  Meus Cursos</li></RouterLink>
        </ul>
    </div>
</template>

<style lang="scss">
.side {
    width: 100%;
    height: auto;
    
    .area-usuario {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: center;
        padding-block: 40px;

        img {
            width: 100px;
            margin-inline: auto;
            margin-bottom: 15px;
        }

        h5 {
            font-weight: 700;
            margin: 0;
        }

        h6 {
            font-style: italic;
            margin: 0;
        }
    }

    ul {
        padding: 0px;
    }
    ul li {
        list-style: none;
        padding: 10px 45px;
        border-bottom: 1px solid #000000;
        transition: .5s;
    }

    ul li:hover {
        background-color: #f4f4f4;
    }
    a:hover {
        color: #990EF1;
    }
    a {
        text-decoration: none;
        color: #000;
        font-weight: 700;
        text-transform: uppercase;
        transition: inherit;
    }
}

@media (max-width: 576px) {
    .side {
        .area-usuario {
            padding-block: 30px 20px;
        }

        a {
            text-align: center;
        }
    }
}
</style>