<template>
  <v-app dark>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <v-row class="d-flex flex-column align-center">
          <v-img src="/undraw_taken.svg" max-width="400" />
        </v-row>
        <v-row class="d-flex flex-column align-center mt-10">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/">Go back home</NuxtLink>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
