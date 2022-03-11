<template>
      <h1>購物車</h1>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button"
      :class="{'disabled': isLoading === true}"
      @click="delAllCarts">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartsData.carts">
          <tr v-for="cartItem in cartsData.carts" :key="cartItem.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"
              :class="{'disabled': isLoading === true}"
              @click="delCartItem(cartItem.id)">
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              {{ cartItem.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input min="1" type="number" class="form-control" v-model="cartItem.qty"
                  @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)">
                  <span class="input-group-text"
                  id="basic-addon2">{{ cartItem.product.unit }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              {{ cartItem.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartsData.final_total }}</td>
        </tr>
      </tfoot>
    </table>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  props: ['cartsData'],
  methods: {
    delAllCarts() {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          alert(res.data.message);
          this.isLoading = false;
          this.$emit('get-carts');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delCartItem(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.isLoading = false;
          this.$emit('get-carts');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCartNum(id, productId, qty) {
      const obj = {
        data: {
          product_id: productId,
          qty,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`, obj)
        .then((res) => {
          alert(res.data.message);
          this.$emit('get-carts');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
