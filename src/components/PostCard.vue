<template>
  <v-container class="post section">
    <v-layout row wrap>
      <v-flex xs6 px-3 mb-4 v-for="(item, idp) in posts" :key="idp">
        <v-card>
          <v-responsive>
            <v-img :src="item.media[0]['media-metadata'][0].url"></v-img>
          </v-responsive>

          <v-card-title primary-title class="px-1">
            <div>
              <h3 class="body-2 mb-4">{{item.title}}</h3>
              <p>{{item.abstract}}</p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" target="_blank" :href="item.url">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "PostCard",
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    showPosts(plan) {
      this.$store.dispatch("getPosts");
    }
  },
  mounted: function() {
    this.showPosts("home");
  }
};
</script>
