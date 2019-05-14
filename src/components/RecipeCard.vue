<template>
  <v-container class="recipie section">
    <v-layout row wrap>
      <v-flex xs6 px-3 mb-4 v-for="(item, idx) in recipes" :key="idx">
        <v-card>
          <v-responsive>
            <v-img :src="item.recipe.image"></v-img>
          </v-responsive>

          <v-card-title primary-title class="px-1">
            <div>
              <h3 class="title mb-4">{{item.recipe.label}}</h3>
              <ul class="text-xs-left">
                <li v-for="(ingredient, i) in item.recipe.ingredientLines" :key="i">{{ingredient}}</li>
              </ul>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" @click="orderRecipe(item)">Order recipie</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "RecipeCard",
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    showRecipes(plan) {
      this.$store.dispatch("getRecipes", plan);
    },
    orderRecipe(item) {
      if (this.isAuthenticated) {
        this.$store.dispatch("addRecipe", item);
      } else {
        this.$router.push("/signin");
      }
    }
  },
  mounted: function() {
    this.showRecipes("vegan");
  }
};
</script>

