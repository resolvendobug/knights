<template>
  <div>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <AppFooter />
</div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import AppFooter from './components/Footer.vue';
export default {
  components: {
    Navbar,
    AppFooter,
  },
  data(){
    return{
      logo_src: '/img/logo2.png',
      app_name: 'Knights Challenge'
    }
  }
};
</script>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'IM Fell English', serif;
  font-size: 19px;
 }

 .main-container{
  margin:50px;
  min-height: 250px;
 }

 h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
 }
</style>
