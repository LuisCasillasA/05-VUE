<template>
    <div>
        <HeaderAdmin/>
        <OrderList/>
        <Footer/>
    </div>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import OrderList from '@/components/OrderList.vue'
import Footer from '@/components/Footer.vue'

export default {
    components:{
        HeaderAdmin,
        OrderList,
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