<template>
  <div>
    <footer id="main-footer">
      <ul>
        <li>Build By Vuejs 🖤</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#main-footer {
  background: #333;
  color: #fff;
  margin: 2rem 0 0 0;
  padding: 1.5rem;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
