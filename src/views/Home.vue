<template>
  <div class="home">
    <HeaderClient/>
    <CuadroImagen/>
    <Footer/>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import CuadroImagen from '@/components/CuadroImagen.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',

  components: {
    HeaderClient,
    CuadroImagen,
    Footer
  }
}
</script>

<style scoped>
nav{
  background-size: 100%;
  background-image: url('../assets/images/original.jpg');
}
.footer{
  background-size: 100%;
  background-image: url('../assets/images/original.jpg');
}
</style>
