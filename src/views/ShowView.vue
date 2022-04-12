   
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      product: {},
      images: {},
    };
  },
  created: function () {
    this.showProducts();
  },
  methods: {
    showProducts: function () {
      console.log("show product");
      console.log(this.$route.params.id);
      axios.get(`/products/${this.$route.params.id}.json`).then(response => {
        console.log("products show", response);
        this.product = response.data;
 
      });
    },
    deleteProduct: function () {
      console.log("delete product");
      axios.delete(`/products/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.$router.push("/products")

      })

    }
    
  },
};
</script>

<template>
  <div class="show-view">

    <h1>{{product.name}}</h1>
    <p>{{product.price}}</p>
    <p>{{product.description}}</p>
    <div v-for="image in product.images" v-bind:key="image.url">
      <img v-bind:src="image.url"  />
    </div>
      <a href="/products">Back to Products</a> <br>
       <button v-on:click="deleteProduct()">Delete Product</button>
       
  </div>
</template>

<style></style>