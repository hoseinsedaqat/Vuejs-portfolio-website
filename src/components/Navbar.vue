<template>
  <div>
    <nav id="navbar">
      <ul>
        <li><h3>Hosein Sedaqat</h3></li>
        <router-link tag="li" to="/" class="li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            /></svg
          ><a>Home</a>
        </router-link>
        <router-link tag="li" to="/About" class="li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
            />
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fill-rule="evenodd"
              d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            /></svg
          ><a>About</a>
        </router-link>
        <router-link tag="li" to="/Contact" class="li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
            /></svg
          ><a>Contact</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  background: #333;
  color: #fff;
  width: 25%;
  height: 100vh;
}
ul {
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
}
ul .li {
  padding: 1rem 0 1.5rem 0;
  transition: all 0.3s ease-in;
}
ul .li:hover {
  transform: translate(-5px, -2px);
}
li:first-child {
  padding: 1rem 0 2rem 0;
  font-family: "Great Vibes", cursive;
}
ul .li svg {
  margin-right: 0.6rem;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}
h3 {
  font-size: 2rem;
}

.social-items {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
