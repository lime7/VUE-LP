<template>
  <v-container class="text-xs-center">
    <h1>Dashboard Page</h1>

    <v-layout column>
      <h6 class="title my-4">Order Recipe</h6>
      <ul class="subheading mb-2 text-xs-left">
        <li v-for="(item, idx) in userRecipes" :key="idx">{{item}}</li>
      </ul>
    </v-layout>
  </v-container>
</template>
<script>
import DashboardLayout from "../layouts/DashboardLayout";

export default {
  name: "DashboardPage",
  components: {
    DashboardLayout
  },
  computed: {
    userRecipes() {
      return this.$store.state.userRecipes;
    }
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    getRecipe() {
      this.$store.dispatch("getUserRecipes");
    }
  }
};
</script>

