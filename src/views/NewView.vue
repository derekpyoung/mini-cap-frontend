<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: [],
      newProductParams: {},
      newImageParams: {},
    };
  },
  created: function () {
    
  },
  methods: {
    submit: function () {
      axios.post("/products.json", this.newProductParams)
        .then((response) => {
          console.log( response.data);
          this.products.push(response.data);
          this.$router.push("/products");
          
        })
        .catch((error) => {
          console.log("product create error", error.response);
        });
    },

  }
}

</script>

<template>
  <div class="products-new">
     <form v-on:submit.prevent="submit()">
      <h1>New Photo</h1>
      <div>
        Name:
        <input type="text" v-model="newProductParams.name" />
        <br>
        Price:
        <input type="integer" v-model="newProductParams.price" />
        <br>
        Description:
        <input type="text" v-model="newProductParams.description" />
        <br>
        Quantity:
        <input type="integer" v-model="newProductParams.quantity" />
        <br>
        Supplier_id:
        <input type="text" v-model="newProductParams.supplier_id" />
        <br>
        Url:
        <input type="text" v-model="newImageParams.image" /><br>
        
      </div>
      <input type="submit" value="Submit"> 
    </form>
    </div>
</template>
<style></style>