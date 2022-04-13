<template>
  <div>
    <HeaderClient/>
    <FormOrder/>
    <Footer/>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import FormOrder from '@/components/FormOrder.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'make-order',

    components: {
        HeaderClient,
        FormOrder,
        Footer
    }
}
</script>

<style scoped>
nav {
  background-size: 100%;
  background-image: url('../assets/images/fondo-make-order.jpg');
}
.footer{
  background-size: 100%;
  background-image: url('../assets/images/fondo-make-order.jpg');
}
</style>