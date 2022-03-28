<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8">
      <v-row>
        <v-col cols="6">
          <v-img src="undraw_in_sync.svg" />
        </v-col>
        <v-col cols="6" class="flex-column d-flex justify-center align-center">
          <div style="width: 75%">
            <h2 class="headline">Sync bookmarks privately</h2>
            <p class="subtitle-1">across browsers and devices</p>
            <p class="mt-3">
              <v-btn class="primary" :to="{name: 'download'}">Download</v-btn>
              <v-btn class="ml-2" :to="{name: 'guides'}">Get started</v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col cols="6" class="flex-column d-flex justify-center">
          <h2 class="headline">Browser Extensions & Android App that sync your bookmarks across all your browsers and devices</h2>
          <p class="subtitle-1">Via an optionally selfhosted Nextcloud or WebDAV server or optionally end-to-end encrypted via Google Drive</p>
        </v-col>
        <v-col cols="6">
          <v-img src="floccus_schema.png" />
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col cols="6">
          <v-img src="undraw_team.svg" />
        </v-col>
        <v-col cols="6" class="flex-column d-flex justify-center">
          <h2 class="headline">Use your own skills to make floccus even better!</h2>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">Have a problem or an idea? <v-btn href="https://github.com/floccusAddon/floccus/issues">File an issue</v-btn></h3>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">Want write code for a new feature? <v-btn href="https://github.com/floccusAddon/floccus/pulls">Open a pull request</v-btn></h3>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">Your language is not available yet? <v-btn href="https://www.transifex.com/floccus/floccus/">Help translate</v-btn></h3>

        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col cols="6" class="flex-column d-flex justify-center">
          <h2 class="headline">Support floccus</h2>
          <p class="subtitle-1">Give something back to the creator of floccus. Any amount, no matter how small, is appreciated.</p>
          <v-btn href="https://github.com/sponsors/marcelklehr" class="mt-2">GitHub Sponsors</v-btn>
          <v-btn href="https://liberapay.com/marcelklehr/donate" class="mt-2">Liberpay</v-btn>
          <v-btn href="https://opencollective.com/floccus" class="mt-2">OpenCollective</v-btn>
          <v-btn href="https://www.paypal.me/marcelklehr1" class="mt-2">PayPal</v-btn>
        </v-col>
        <v-col cols="6">
          <v-img src="undraw_love.svg" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Private bookmarks sync',
  }
}
</script>
