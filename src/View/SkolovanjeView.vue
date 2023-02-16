<script setup>

</script>

<template>

    <div class="container">
        <div class="content-container">
            <h1>Elektrostrojarska škola Varaždin</h1>
            <h2>Smjer: Tehničar za računalstvo</h2>
            <h3>Vrijeme trajanja: 2014-2018</h3>
        </div>

        <div class="content-container">
            <h1>Međimursko Veleučilište u Čakovcu</h1>
            <h2>Smjer: Računarstvo</h2>
            <h3>Vrijeme trajanja: 2018-2022</h3>
        </div>

    </div>
</template>

<style scoped>
.container{
    
    display: grid;
    margin-top: 10px;
    width:100%;
    height: 100vh;
    justify-content: center;
    align-items:flex-start
    
}

.content-container{
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

}

.container .content-container h1, .container .content-container h2, .container .content-container h3{
    color: white;
}
</style>