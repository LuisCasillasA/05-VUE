<template>
<nav>
  <div class="logo-principal">
    <router-link to="/"><img src="@/assets/images/logo-pasteleria-min.png" alt="Logo home"></router-link>
  </div>
  <div class="tabs">
    <router-link to="/flavors">Flavors</router-link> |
    <router-link to="/decorations">Decorations</router-link> |
    <router-link to="/make-order">Make Order</router-link> |
    <router-link to="/admin">Administrator</router-link>
  </div>
</nav>
</template>

<script>
export default {
  name: 'HeaderClient'
}
</script>

<style>
.logo-principal{
  width: 5%;
}

.tabs{
  width: 95%;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

nav img{
  width: 100%;
  float: left;
}

nav a {
  font-size: 2vw;
  color: #000000;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>