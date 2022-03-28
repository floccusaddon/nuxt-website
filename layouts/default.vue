<template>
  <v-app>
    <v-app-bar fixed app flat>
      <v-toolbar-title><v-btn text color="transparent" :to="{name: 'index'}"><v-img src="/logo.svg"/></v-btn> floccus</v-toolbar-title>
      <v-spacer />
      <v-btn text elevation="0" :to="{name: 'guides'}" class="ml-4 mr-4">Guides</v-btn>
      <v-btn outlined text :to="{name: 'download'}">Download</v-btn>
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
