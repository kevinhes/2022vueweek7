<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/carts">購物車</router-link> |
    <router-link to="/loginpage">管理員登入</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
