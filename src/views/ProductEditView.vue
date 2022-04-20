<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: [],
      editProductParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`"/products/${this.$route.params.id}"`).then((response) => {
      console.log("Products show", response);
      this.product = response.data;
      this.editProductParams = this.product;
    });
  },
  methods: {
    submit: function () {
      axios
        .patch(`"/products/${this.$route.params.id}"`, this.editProductParams)
        .then((response) => {
          console.log("photos update", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("photos update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="photos-edit">
    <h1>Edit Photo</h1>
    <form v-on:submit.prevent="updatePhoto(photo)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editPhotoParams.name" />
      Width:
      <input type="text" v-model="editPhotoParams.width" />
      Height:
      <input type="text" v-model="editPhotoParams.height" />
      Url:
      <input type="text" v-model="editPhotoParams.url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>