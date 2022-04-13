<template>
<form id='order' @submit="addOrder">
    <h1>Personal Information</h1>
    <table>
        <tr>
            <td class="text-right">Name:</td>
            <td class="text-left"><input type="text" placeholder="Name" v-model="client"></td>
        </tr>
        <tr>
            <td class="text-right">Phone:</td>
            <td class="text-left"><input type="number" placeholder="Phone" v-model="phone"></td>
        </tr>
        <tr>
            <td class="text-right">Email:</td>
            <td class="text-left"><input type="email" placeholder="Email" v-model="email"></td>
        </tr>
    </table>
    <h1>Cake information</h1>
    <table>
        <tr>
            <td>
                <p>Flavors</p>
                <div v-for="item in $store.getters.getFlavors" :key="item.flavor">
                    <input type="checkbox" :id="item.flavor" :value="item.flavor" v-model="checkedFlavors">
                    <label :for="item.flavor">{{ item.flavor }}</label><br>
                </div>
            </td>
            <td>
                <p>Decorations</p>
                <div v-for="item in $store.getters.getDecorations" :key="item.decoration">
                    <input type="checkbox" :id="item.decoration" :value="item.decoration" v-model="checkedDecorations">
                    <label :for="item.decoration">{{ item.decoration }}</label><br>
                </div>
            </td>
        </tr>
    </table><br>

    <textarea placeholder="General description cake" cols="60" rows="10" v-model="description"></textarea><br>
    <input type="submit" value="Submit">

</form>

</template>

<script>
export default {
    name: 'FormOrder',
    data(){
        return{
            checkedFlavors: [],
            checkedDecorations: [],
            client: '',
            phone: null,
            email: '',
            description: ''
        }
    },
    methods: {
        addOrder(){
            let order = {
                client: this.client,
                phone: this.phone,
                email: this.email,
                flavors: this.checkedFlavors,
                decorations: this.checkedDecorations,
                description: this.description
            }
            if(this.validateInformation()){
                this.$store.dispatch('addOrder', order);
                this.clearForm();
                alert('!You are done¡ Have a good day.');
            }
        },
        validateInformation(){
            if(this.client && this.phone && this.email && this.checkedFlavors != [] && this.checkedDecorations != [] && this.description){
                return true;
            }
            alert('Todos los campos son obligatorios.');
            return false;
        },
        clearForm(){
            this.client = '';
            this.phone = '';
            this.email = '';
            this.checkedFlavors = [];
            this.checkedDecorations = [];
            this.description = '';
        }
    }
}
</script>

<style scoped>
form{
    font-size: 3.5vh;
}

input{
    height: 20px;
    margin: 1%;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}

input[type=number] { 
    -moz-appearance:textfield;
}

td{
    width: 50%;
}

table{
    width: 100%;
}

input[type=submit]{
    background: #3f51b5;
    color: black;
    font-size: large;
    height: auto;
    padding: 1%;
}
</style>