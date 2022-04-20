<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        products: [],
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("/products.json").then((response) => {
          console.log("products index", response);
          this.products = response.data;
        });
      },
    },
  };
</script>

<template>

  <div class="container">
    <div class="home">
      <div class="row">
        <div class="col-sm-6" v-for="product in products" v-bind:key="product">
          <h2> {{product.name}}</h2>

          <div class="card">
            <div v-for="image in product.images" v-bind:key="image.url">
              <div class="card-body">
                <img v-bind:src="image.url" v-bind:alt="product.name" />
                <br>
                <router-link class="card-link" v-bind:to="`/products/${product.id}`">More Info</router-link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style>
  img {
    width: 200px;
    height: 250px;
  }

  .container {
    background-image: url("https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    background-repeat: no-repeat;
    background-size: cover;
    position: sticky;

  }
</style>