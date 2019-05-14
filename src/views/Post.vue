<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>Post Page</h1>

      <PostCard/>
    </v-container>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";
import PostCard from "../components/PostCard";

export default {
  name: "Recipe",
  components: {
    DefaultLayout,
    PostCard
  }
};
</script>

