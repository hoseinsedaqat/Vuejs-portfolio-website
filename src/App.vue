<template>
  <div>
    <app-header class="header"></app-header>
    <app-navbar class="navbar"></app-navbar>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__delay-0.5s"
    >
      <router-view></router-view>
    </transition>
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    "app-navbar": Navbar,
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style>
/* Main Styling */
@import url("https://fonts.googleapis.com/css2?family=Frijole&family=Roboto:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 75%;
  float: right;
  padding: 0.5rem 2rem 0 1rem;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  background: #ffffe6;
}
.header {
  display: none;
}
.footer {
  display: none;
}

@media (max-width: 800px) {
  .navbar {
    display: none;
  }
  .header {
    display: block;
  }
  .container {
    width: 100%;
    float: none;
  }
  .footer {
    display: block;
  }
}
</style>
