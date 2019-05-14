<template>
  <v-container class="intro">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm7 px-3 text-xs-center text-sm-left>
        <div class="intro-inner">
          <h1 class="intro-title">Lorem ipsum dolor sit.</h1>
          <div
            class="intro-meta"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit incidunt accusantium ea rerum accusamus quia laboriosam quod molestias facilis.</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeIntro"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  color: #fff;
  background: #2F82EE;
  position: relative;
  padding-top: 70px;
  padding-bottom: 50px;
  overflow: hidden;
}

.intro-title {
  font-weight: 900;
  line-height: 2.25rem;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.intro-meta {
  margin: 0 0 20px;
}
</style>
