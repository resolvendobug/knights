<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Crie seu Knight</router-link> 
    <router-link to="/knights">Lista de Knights</router-link>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: ["logo","alt"]
};
</script>
<style scoped>
  #nav{
    background-color: #333;
    border-bottom: 3px solid #FCBA03;
    padding: 15px , 50px;
    display:block;
    margin-left: 0;
    align-items: center;
    
  }
  #nav #logo_url{
    margin: auto;
    margin-left: 0;
  }
  #logo{
    width: 120px;
    height: 120px;
  }

  #nav a{
    color: #FCBA03;
    text-decoration: none;
    margin: 12px ;
    transition: .5s;
  }

  #nav a:hover{
    color: #fff;
  }
</style>