<template>
<table>
    <tr>
        <th>Flavor</th>
        <th>Price</th>
    </tr>
    <tr v-for="item in $store.getters.getFlavors" :key="item.flavor">
        <td>
            {{item.flavor}}
        </td>
        <td>
            {{item.price}}
        </td>
    </tr>
</table>
</template>

<script>
export default {
  name: 'TableMenu'
}
</script>