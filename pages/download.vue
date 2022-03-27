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
          <v-card-title><v-icon size="50">mdi-firefox</v-icon> Firefox</v-card-title>
          <v-card-text><v-btn class="primary">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title><v-icon size="50">mdi-microsoft-edge</v-icon> Edge</v-card-title>
          <v-card-text><v-btn class="primary">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title><v-icon size="50">mdi-google-chrome</v-icon> Chrome</v-card-title>
          <v-card-text><v-btn class="primary">Download</v-btn></v-card-text>
        </v-card>
        <v-card class="mb-5 mr-5" rounded>
          <v-card-title><v-icon size="50">mdi-android</v-icon> Android</v-card-title>
          <v-card-text class="d-flex flex-column"><v-btn class="primary">PlayStore</v-btn><br/><v-btn class="primary mt-2">F-Droid</v-btn></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <p>Need help? Learn more on <a href="/guides">how to get started</a>.</p>
        <p>How does Floccus deal with your personal data? <a href="/privacy">Privacy Policy</a></p>
        <p>What are your rights when using floccus? <a href="/license">License</a></p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
  head: {
    title: 'Download',
  }
}
</script>
