<template>
  <div>
    <HeaderAdmin/>
    <h1>Flavors</h1>
    <TableFlavorsInventory/>
    <h1>Decorations</h1>
    <TableDecorationsInventory/>
    <br>
    <Footer/>
  </div>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import TableFlavorsInventory from '@/components/TableFlavorsInventory.vue'
import Footer from '@/components/Footer.vue'
import TableDecorationsInventory from '@/components/TableDecorationsInventory.vue'

export default {
    components: {
        HeaderAdmin,
        TableFlavorsInventory,
        Footer,
        TableDecorationsInventory
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