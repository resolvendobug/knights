<template>
    <div id="banner" >
        
    </div>
</template>

<script>
export default {
    name: 'AppBanner'
};
</script>

<style scoped>
    #banner {
        background-image: url('../assets/bannerd.jpg');
        background-position: 0 - 250px;
        background-size: cover;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
       
    }
    #banner p {
        margin: 0;
        
    }
</style>