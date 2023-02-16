<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

<section>

 <div class="navBar">
    <div class="nameContainer">
        <div class="box">
        <RouterLink to="/">Ivan Androić</RouterLink>
        </div>
    </div>
    <div class="linkContainer">
        <div class="box">
            <RouterLink to="/oMeni">O meni</RouterLink>
        </div>
        <div class="box">
            <RouterLink to="/kontakti">Kontakti</RouterLink>
        </div>
        <div class="box">
            <RouterLink to="/skolovanje" >Školovanje</RouterLink>
        </div>
    </div>


 </div>



</section>



</template>

<style scoped>
.navBar{
    margin-top: 2px;
    background-color: rgb(7, 7, 7);
    height: 33px;
    display: flex;
    opacity: 0.9;
    width: 100%;
    flex-wrap: nowrap;
    position: fixed;
    z-index: 100;
    border-bottom: solid;
    border-color: rgba(61, 6, 6, 0.822);
    border-width: 2px;
}

.linkContainer{
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    right: 0;
}



a{
    color: white;
    font-size:16px;
    text-decoration: none;
    display: block;
   
}
.box{
    width: 110px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 0;
    margin-left: 0px;
    margin-right: 4px;
}


.box:hover{
    opacity: 0.7;
    background-color: rgb(26, 24, 24);
    
}


</style>