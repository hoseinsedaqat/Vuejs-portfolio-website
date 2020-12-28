<template>
  <div class="container">
    <h2 class="welcome">Welcome to My Website</h2>
    <div class="flex-container">
      <h4>I Am Hosein Sedaqat 👋</h4>
      <img src="../assets/about.jpg" alt="About" />
      <h4>Front-End Web Developer</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}
img {
  width: 500px;
  height: 300px;
  margin: 1rem 0;
  border-radius: 5px;
}
h4 {
  margin: 0.5rem 0;
}

@media(max-width:800px){
  img{
    width:330px;
    height:200px;
    margin: 0 3rem;
  }
  .welcome{
    display: none;
  }
}
</style>
