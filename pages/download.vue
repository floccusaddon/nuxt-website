<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Download</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" class="d-flex flex-wrap">
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
            ><v-icon size="50">mdi-firefox</v-icon> Firefox</v-card-title
          >
          <v-card-text><v-btn class="primary" href="https://addons.mozilla.org/en-US/firefox/addon/floccus/">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
            ><v-icon size="50">mdi-microsoft-edge</v-icon> Edge</v-card-title
          >
          <v-card-text><v-btn class="primary" href="https://microsoftedge.microsoft.com/addons/detail/gjkddcofhiifldbllobcamllmanombji">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
            ><v-icon size="50">mdi-google-chrome</v-icon> Chrome</v-card-title
          >
          <v-card-text><v-btn class="primary" href="https://chrome.google.com/webstore/detail/floccus/fnaicdffflnofjppbagibeoednhnbjhg">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
            ><v-icon size="50">mdi-android</v-icon> Android</v-card-title
          >
          <v-card-text class="d-flex flex-column"
            ><v-btn class="primary" href="https://play.google.com/store/apps/details?id=org.handmadeideas.floccus">Google Play</v-btn><br /><v-btn
              class="primary mt-2" href="https://f-droid.org/en/packages/org.handmadeideas.floccus/"
              >F-Droid</v-btn
            ></v-card-text
          >
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
            ><v-icon size="50">mdi-apple</v-icon> iOS</v-card-title
          >
          <v-card-text class="d-flex flex-column"
            ><v-btn class="primary" href="https://apps.apple.com/us/app/floccus/id1626998357">App Store</v-btn>
          </v-card-text
          >
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title
          ><v-icon size="50">mdi-package-variant</v-icon> Sources</v-card-title
          >
          <v-card-text><v-btn
            class="primary mt-2" href="https://github.com/floccusaddon/floccus/releases"
          >GitHub</v-btn
          ></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <p>
          Need help? Learn more on
          <NuxtLink :to="{ name: 'guides' }">how to get started</NuxtLink>.
        </p>
        <p>
          How does Floccus deal with your personal data?
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        </p>
        <p>
          What are your rights when using floccus?
          <NuxtLink to="/license">License</NuxtLink>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
  head: {
    title: 'Download',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find all download links for the different browsers and platforms.' },
    ],
  },
}
</script>
