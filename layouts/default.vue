<template>
  <v-app>
    <v-app-bar fixed app flat>
      <v-toolbar-title
        ><v-btn text color="transparent" :to="{ name: 'index' }"
          ><v-img src="/logo.svg"
        /></v-btn>
        floccus</v-toolbar-title
      >
      <v-spacer />
      <v-btn text elevation="0" :to="{ name: 'guides' }" class="mr-4"
      >Guides</v-btn
      >
      <v-btn text elevation="0" :to="{ name: 'faq' }" class="mr-4"
        >FAQ</v-btn
      >
      <v-btn outlined text :to="{ name: 'download' }">Download</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless class="primary lighten-1 d-flex flex-column mt-10">
      <v-card flat tile class="primary lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            :href="icon.href"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"></v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <p>{{ new Date().getFullYear() }} — <strong>floccus</strong></p>
          <p>Created by <a href="https://marcelklehr.de/" class="white--text">marcel klehr</a></p>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'floccus',
      icons: [
        { icon: 'mdi-twitter', href: 'https://twitter.com/floccusAddon' },
        { icon: 'mdi-github', href: 'https://github.com/floccusAddon' },
        {
          icon: 'mdi-google-play',
          href: 'https://play.google.com/store/apps/details?id=org.handmadeideas.floccus',
        },
      ],
    }
  },
}
</script>
