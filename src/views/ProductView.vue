<template>
  <div class="container">
    <h1>單獨頁面</h1>
    <div class="row">
      <div class="col-6">
        <img :src="productData.imageUrl" alt="" class="img-fluid" />
      </div>
      <div class="col-6">
        <span class="badge bg-primary rounded-pill">{{productData.category}}</span>
        <p>商品描述：{{productData.description}}</p>
        <p>商品內容：{{productData.content}}</p>
        <div class="h5" v-if="productData.origin_price === productData.price">
          {{productData.origin_price}} 元
        </div>
        <div v-else>
          <del class="h6">原價 {{productData.origin_price}} 元</del>
          <div class="h5">現在只要 {{productData.price}} 元</div>
        </div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" min="1" v-model="qty"/>
            <button type="button" class="btn btn-primary"
            :class="{'disabled': isLoading === true}"
            @click="addToCart(productData.id, qty)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {},
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProductData() {
      this.$http
        .get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          this.productData = res.data.product;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const obj = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`, obj)
        .then((res) => {
          alert(res.data.message);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProductData();
  },
};
</script>
