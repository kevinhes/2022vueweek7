<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products"
            class="nav-link active" aria-current="page">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/carts"
            class="nav-link active" aria-current="page">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/loginpage"
            class="nav-link active" aria-current="page">管理員登入</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
