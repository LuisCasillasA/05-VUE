<template>
  <div>
    <HeaderClient/>
    <CardsFlavorsContainer/>
    <Footer/>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import CardsFlavorsContainer from '@/components/CardsFlavorsContainer.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'flavors',

    components: {
        HeaderClient,
        CardsFlavorsContainer,
        Footer
    }
}
</script>

<style scoped>
nav {
  background-size: 100%;
  background-image: url('../assets/images/fondo-menu.jpg');
}
.footer{
  background-size: 100%;
  background-image: url('../assets/images/fondo-menu.jpg');
}
</style>
