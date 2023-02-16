
<script>


</script>

<template>

    <div class="container">
        <form action="https://formspree.io/f/xayzewan" method="POST" >
            <h3>Kontaktirajte me</h3>
            <input type="text" name="ime"  id="ime" placeholder="Vaše ime" required>
            <input type="text" name="naslov"  id="naslov" placeholder="Naslov" required>
            <input type="email" name="email" id="email" placeholder="Email" required>
            <textarea  id="poruka" name="poruka" rows="10" placeholder="Napišite poruku" required></textarea>
            <button type="submit">Pošalji</button>
        </form>
    </div>

    <div class="kontakt">
        <div class="kontakt-box">
        <h2>Broj: 0996857939</h2>
        <h2>E-mail: androic.ivan@gmail.com</h2>
    </div>
</div>
 

  
</template>

<style scoped>
.container{
    width:100%;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center; 
    justify-content: center;
    
}

.kontakt{
    margin-top: 0px;
    
    width: 100%;
    height: 50vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.kontakt-box{
    background:aliceblue;
    width: 80%;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    border-radius: 10px;
}

form{
    background: white;
    display: flex;
    flex-direction: column;
    padding: 2vw 4vw;
    width: 90%;
    max-width: 600px;
    border-radius: 10px;
}

form h3{
    color: #555;
    font-weight: 800;
    margin-bottom: 20px;
}

form input, form textarea{
    border: 0;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: #f5f5f5;
    font-size: 16px;
}

form button{
    padding: 15px;
    background: rgb(23, 106, 189);
    color: aliceblue;
    font-size: 18px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

}
</style> 