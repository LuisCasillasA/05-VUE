<template>
<div class="footer">
    <table>
        <tr>
            <td class="text-right">Address:</td>
            <td class="text-left">233 Newbury Street</td>
        </tr>
        <tr>
            <td class="text-right">Phone:</td>
            <td class="text-left">4929234756</td>
        </tr>
        <tr>
            <td class="text-right">Schedules:</td>
            <td class="text-left">Monday to Sunday <br> 08:00 A.M. to 10:00 P.M.</td>
        </tr>
    </table>
</div>
</template>

<script>
export default{
    name: 'Footer',
}
</script>

<style>
.text-right{
    text-align: right;
    width: 50%;
}

.text-left{
    text-align: left;
}
</style>

<style scoped>
.footer{
    text-align: center;
    padding: 3%;
    font-size: large;
    color: black;
}
.footer table{
    width: 100%;
}
</style>