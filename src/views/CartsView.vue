<template>
  <div class="container">
    <CartList :carts-data="cartsData" @get-carts="getCartsData"></CartList>
    <Validate></Validate>
  </div>
</template>

<script>
import CartList from '@/components/CartsList.vue';
import Validate from '@/components/Validate.vue';

export default {
  data() {
    return {
      cartsData: {},
    };
  },
  components: {
    CartList,
    Validate,
  },
  methods: {
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCartsData();
  },
};
</script>
