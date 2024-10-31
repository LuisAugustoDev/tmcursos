<template>
    <footer>
        <img src="../assets/logo-ext.png" alt="TecnoMinds" width="150px" height="30px">
        <h5>Informátizando o mundo</h5>
        <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
    </footer>
</template>

<style lang="scss">
footer {
    background-color: #232323;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 10px;
    border-radius: 20px 20px 0px 0px;
    
    img {
        margin-inline: auto;
        transform: scale(1.2);
        margin-bottom: 20px;
    }

    h5 {
        text-align: center;
        font-style: italic;
        font-size: 16px;
        color: #fff;
        margin-bottom: 20px;
    }

    a {
        width: 20px;
        margin-inline: auto;
        text-decoration: none;
        color: #fff;
        text-align: center;
        font-size: 30px;
        transition: 0.5s;
    }

}

footer a:hover {
    color: #990EF1;
}
</style>