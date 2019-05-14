<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>Recipe Page</h1>

      <RecipeCard/>
    </v-container>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";
import RecipeCard from "../components/RecipeCard";

export default {
  name: "Recipe",
  components: {
    DefaultLayout,
    RecipeCard
  }
};
</script>

