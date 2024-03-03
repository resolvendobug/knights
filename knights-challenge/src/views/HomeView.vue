<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Monte o seu Guerreiro:</h1>
      <KnightsForm />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import KnightsForm from "../components/KnightsForm.vue";
export default {
  name: "HomeView",
  components: {
    Banner,
    KnightsForm,
  },
};
</script>
