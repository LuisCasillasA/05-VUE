<template>
<br>
    <h1 v-if="$store.getters.getOrders.length == 0">¡No orders!</h1>
    <table>
        <tr v-if="$store.getters.getOrders.length != 0">
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Flavor</th>
            <th>Decoration</th>
            <th>Description</th>
        </tr>
        <tr v-for="(order, index) in $store.getters.getOrders" :key="order">
            <td>{{ order.id }}</td>
            <td>{{ order.client }}</td>
            <td>{{ order.phone }}</td>
            <td>{{ order.email }}</td>
            <td><p v-for="flavor in order.flavors" :key="flavor">{{ flavor }}</p></td>
            <td><p v-for="decoration in order.decorations" :key="decoration">{{ decoration }}</p></td>
            <td>{{ order.description }}</td>
            <td><button @click="$store.dispatch('removeOrder', index)">Done</button></td>
        </tr>
    </table>
<br>
</template>

<script>
export default {
    name: 'OrderList'
}
</script>

<style scoped>
table, td, th{
    border:1px solid black;
}
table {
    width: 96%;
    border-collapse:collapse;
    margin-right: 2%;
    margin-left: 2%;
    box-sizing: border-box;
}
table p{
    margin: 5px;
}
</style>