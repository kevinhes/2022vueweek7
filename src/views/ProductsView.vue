<template>
  <div class="container">
    <Products :products-data="productsData"></Products>
    <Pagination :pagination="pagination" @page-change=getProductsData></Pagination>
  </div>
</template>

<script>
import Products from '@/components/Products.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      productsData: [],
      pagination: {},
    };
  },
  components: {
    Products,
    Pagination,
  },
  methods: {
    getProductsData(page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.productsData = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProductsData();
  },
};
</script>
