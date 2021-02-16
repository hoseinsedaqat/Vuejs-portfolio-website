<template>
  <div>
    <nav id="navbar">
      <ul>
        <router-link
          tag="li"
          v-for="(myheader, index) in myHeaderData"
          :key="(myheader, index)"
          :to="`${myheader.toDirection}`"
          ><a>{{ myheader.name }}</a></router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      myHeaderData: [
        { toDirection: "/", name: "Home" },
        { toDirection: "/About", name: "About" },
        { toDirection: "/Contact", name: "Contact" },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  background: #333;
  color: #fff;
}

ul li {
  padding: 1rem 1rem;
  transition: all 0.3s ease-in;
}

ul li:hover {
  transform: translate(-5px, -5px);
}

ul li a {
  text-decoration: none;
  color: #fff;
}
</style>

