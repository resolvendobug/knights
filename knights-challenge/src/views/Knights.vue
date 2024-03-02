<template>
  <div class="main-container">
    <h1>Knights</h1>
    <AppTable />
  </div>
</template>

<script>
import AppTable from '../components/AppTable.vue';
export default {
  name: 'AppKnights',
  components: {
    AppTable
  }
};
</script>
