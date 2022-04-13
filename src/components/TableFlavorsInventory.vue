<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Flavor</th>
            <th>In Stock</th>
            <th>Modify</th>
        </tr>
        <tr v-for="(flavor, index) in $store.getters.getFlavors" :key="flavor">
            <td>{{ flavor.id }}</td>
            <td>{{ flavor.flavor }}</td>
            <td>{{ flavor.stock }}</td>
            <td>
                <div>
                    <button @click="$store.dispatch('addStockFlavor', index)">+</button>
                    <button @click="$store.dispatch('removeStockFlavor', index)">-</button>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'TableFlavorsInventory'
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
</style>