<template>
<div class="card">
    <h1>{{ title }}</h1>
    <img :src="require(`@/assets/images/${image}`)" alt="image">
    <p>{{ description }}</p>
    <h2>${{ price }}</h2>
</div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        title: String,
        image: String,
        description: String,
        price: Number
    }
}
</script>

<style>
.card{
    max-width: 33.333%;
    padding: 3%;
    padding-bottom: 0;
    box-sizing: border-box;
}

.card img{
    width: 100%;
}

.card h1{
    font-size: 3vw;
}

.card p{
    font-size: 1vw;
}

.card h2{
    font-size: 2vw;
}
</style>
