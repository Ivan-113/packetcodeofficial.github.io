<script setup>



</script>

<template>
<PdfViewer></PdfViewer>
<section>
    <div class="container">
      <h1>Pozdrav,</h1>
      <h2>Ova Web stranica služi kao dodatak molbi za posao.</h2>
    </div>
    <div class="btnContainer">
  <div class="vertical-center">
    <div ref="content">
      
    </div>
    <form method="get" action="public\CVIvanAndroić.pdf">
   <button type="submit">Životopis</button>
</form>
  </div>
</div>
  </section>


</template>

<style scoped>

.img{
  
  max-width: 100%;
  height: 100%;
}
.container{
    display: block;
    overflow: hidden;
    width: 50%;
    margin-left: 25%;
    padding-top: 40px;
    margin-top: 0px;
    margin-bottom: 5px;
    justify-content: center;
    text-align: center;
    color: aliceblue;
}

.container h1{
  margin-bottom: 30px;
  font-size: 25px;
}

.imgContainer{
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 170%;
    left: 40%;
    width: 300px;
    height: 300px;
}

.btnContainer{
  height: 200px;
  position: relative;

}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btnContainer .vertical-center button{
  color: white;
  background-color: rgb(23, 106, 189);
  cursor: pointer;
  font-size: 20px;
  border: none;
  padding: 12px 30px;
}

.btnContainer .vertical-center button:hover{
  background-color: rgb(14, 93, 171);
}



</style>