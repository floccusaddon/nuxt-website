<template>
  <v-app>
    <v-app-bar fixed app flat>
      <v-toolbar-title><v-btn text href="/"><v-img src="logo.svg"/> floccus</v-btn></v-toolbar-title>
      <v-spacer />
      <v-btn text elevation="0" href="/guides" class="ml-4 mr-4">Guides</v-btn>
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
      title: 'floccus',
    }
  },
}
</script>
