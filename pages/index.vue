<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8">
      <v-row class="d-block d-sm-flex">
        <v-col class="col-12 col-sm-6">
          <v-img src="undraw_in_sync.svg" />
        </v-col>
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center align-center">
          <div style="width: 75%">
            <h2 class="headline">Sync bookmarks privately</h2>
            <p class="subtitle-1">across browsers and devices</p>
            <p class="mt-3 d-xl-block d-sm-flex flex-column">
              <v-btn class="primary" :to="{ name: 'download' }">Download</v-btn>
              <v-btn class="ml-xl-2 mt-sm-2 mt-xl-0" :to="{ name: 'guides' }">Get started</v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">
            Browser Extensions, iOS & Android Apps that sync your bookmarks across all
            your browsers and devices
          </h2>
          <p class="subtitle-1">
            Via an optionally selfhosted Nextcloud or WebDAV server or
            optionally end-to-end encrypted via Google Drive
          </p>
        </v-col>
        <v-col class="col-12 col-sm-6">
          <v-img src="floccus_schema.png" />
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 d-flex flex-column justify-center">
          <v-card style="min-height: 50%;">
            <Timeline id="floccusAddon" error-message="This tweet could not be loaded" source-type="profile" :options="{ tweetLimit: '1' }">
              <v-card-text><a href="https://twitter.com/floccusAddon">Loading tweets</a></v-card-text>
            </Timeline>
          </v-card>
        </v-col>
        <v-col class="col-12 col-sm-6">
          <v-img src="undraw_devices.svg" />
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 ">
          <v-img src="undraw_team.svg" />
        </v-col>
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">
            Use your own skills to make floccus even better!
          </h2>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">
            Have a problem or an idea?
            <v-btn href="https://github.com/floccusAddon/floccus/issues"
              >File an issue</v-btn
            >
          </h3>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">
            Want write code for a new feature?
            <v-btn href="https://github.com/floccusAddon/floccus/pulls"
              >Open a pull request</v-btn
            >
          </h3>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">
            Your language is not available yet?
            <v-btn href="https://www.transifex.com/floccus/floccus/"
              >Help translate</v-btn
            >
          </h3>
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">Support floccus</h2>
          <p class="subtitle-1">
            Give something back to the creator of floccus. Any amount, no matter
            how small, is appreciated.
          </p>
          <div class="d-flex flex-wrap flex-column flex-lg-row">
            <v-btn href="https://github.com/sponsors/marcelklehr" class="mt-2 mr-2 col-lg-5"
              >GitHub Sponsors</v-btn
            >
            <v-btn href="https://liberapay.com/marcelklehr/donate" class="mt-2 mr-2  col-lg-5"
              >Liberpay</v-btn
            >
            <v-btn href="https://opencollective.com/floccus" class="mt-2 mr-2  col-lg-5"
              >OpenCollective</v-btn
            >
            <v-btn href="https://www.paypal.me/marcelklehr1" class="mt-2 mr-2  col-lg-5"
              >PayPal</v-btn
            >
          </div>
        </v-col>
        <v-col class="col-12 col-sm-6">
          <v-img src="undraw_love.svg" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  name: 'IndexPage',
  components: {Timeline},
  head: {
    title: 'Private bookmarks sync',
  },
  computed: {
    twttr() {
      // eslint-disable-next-line
      return typeof twttr === 'undefined'? null : twttr
    }
  }
}
</script>
