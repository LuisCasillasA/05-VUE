<template>
<div class="container">
    <Card v-for="item in $store.getters.getFlavors" :key="item.flavor" :title="item.flavor" 
    :image='item.image' :description="item.description" :price="item.price"/>
</div>
</template>

<script>
import Card from '@/components/Cards.vue'

export default {
    name: 'CardsFlavorsContainer',
    components: {
        Card
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}
</style>