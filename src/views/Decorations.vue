<template>
  <div>
    <HeaderClient/>
    <CardsDecorationsContainer/>
    <Footer/>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import CardsDecorationsContainer from '@/components/CardsDecorationsContainer.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'decorations',

    components: {
        HeaderClient,
        CardsDecorationsContainer,
        Footer
    }
}
</script>

<style scoped>
nav {
  background-size: 100%;
  background-image: url('../assets/images/fondo-decorations.jpg');
}
.footer{
  background-size: 100%;
  background-image: url('../assets/images/fondo-decorations.jpg');
}
</style>
