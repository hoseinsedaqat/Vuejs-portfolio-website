<template>
  <div class="container">
    <h2>About Me</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ratione, aut aperiam
      impedit minima molestias dolorum natus dolor quam ab placeat vitae laborum, modi
      assumenda cumque soluta sint unde pariatur eaque eligendi harum omnis. Autem
      molestias, nostrum dolores vel quis vero fuga voluptatem impedit excepturi quidem
      illum ullam esse illo. Mollitia in architecto maxime, officiis commodi suscipit,
      placeat molestias nostrum incidunt tenetur consequuntur modi non officia corporis
      deleniti dignissimos voluptatum quos doloremque sed fugiat autem quas cum! Tempora
      blanditiis et saepe, iste aspernatur doloremque, sapiente enim esse velit reiciendis
      aliquid doloribus corporis quia quod? Asperiores reiciendis obcaecati quia labore
      recusandae?
    </p>
    <h4>My Skills</h4>
    <div v-for="skill in skillProgress" :key="skill">
      <h6>{{ skill.title }}</h6>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :aria-valuenow="`${skill.vNow}`"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: skill.vStyle }"
        ></div>
      </div>
    </div>
    <h4>My Resume:</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores obcaecati
      at quis dolore consectetur laudantium velit nobis, animi illum!
    </p>
    <a href="#" class="btn btn-warning mt-2 mb-3">Download My Resume</a>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      // define my Skills
      skillProgress: [
        { title: "Html:", vNow: 90, vStyle: "90%" },
        { title: "Css:", vNow: 85, vStyle: "85%" },
        { title: "Sass:", vNow: 75, vStyle: "75%" },
        { title: "Bootstrap:", vNow: 95, vStyle: "95%" },
        { title: "Javascript:", vNow: 80, vStyle: "80%" },
        { title: "Vuejs:", vNow: 75, vStyle: "75%" },
        { title: "Python:", vNow: 70, vStyle: "70%" },
      ],
    };
  },
};
</script>

<style scoped>
h6 {
  margin: 1rem 0;
}
</style>
