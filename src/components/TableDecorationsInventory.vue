<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Decoration</th>
            <th>In Stock</th>
            <th>Modify</th>
        </tr>
        <tr v-for="(decoration, index) in $store.getters.getDecorations" :key="decoration">
            <td>{{ decoration.id }}</td>
            <td>{{ decoration.decoration }}</td>
            <td>{{ decoration.stock }}</td>
            <td>
                <div>
                    <button @click="$store.dispatch('addStockDecoration', index)">+</button>
                    <button @click="$store.dispatch('removeStockDecoration', index)">-</button>
                </div>
            </td>
        </tr>
    </table>

</template>

<script>
export default {
    name: 'TableDecorationsInventory'
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