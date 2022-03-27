<template>
  <v-app>
    <v-app-bar fixed app flat>
      <v-toolbar-title><a href="/"><v-img src="logo.svg"></v-img></a></v-toolbar-title>
      <v-spacer />
      <v-btn text elevation="0" href="/start" class="ml-4 mr-4">Guides</v-btn>
      <v-btn outlined text href="/download">Download</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'floccus',
    }
  },
}
</script>
