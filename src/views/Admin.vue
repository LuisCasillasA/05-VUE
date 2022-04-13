<template>
  <div>
    <HeaderAdmin/>
    <CuadroImagen/>
    <Footer/>
  </div>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import Footer from '@/components/Footer.vue'
import CuadroImagen from '@/components/CuadroImagen.vue'

export default {
    components: {
        HeaderAdmin,
        Footer,
        CuadroImagen
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