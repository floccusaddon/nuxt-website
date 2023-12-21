<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8">
      <v-row class="d-block d-sm-flex">
        <v-col class="col-12 flex-column d-flex justify-center align-center mt-10">
            <h1 class="headline text-h2">Sync bookmarks privately</h1>
            <p class="subtitle-1 text-h4">across browsers and devices</p>
            <p class="mt-3 d-xl-block d-sm-flex flex-column">
              <v-btn class="primary" :to="{ name: 'download' }">Download</v-btn>
              <v-btn class="ml-xl-2 mt-sm-2 mt-xl-0" :to="{ name: 'guides' }">Get started</v-btn>
            </p>
        </v-col>
      </v-row>
      <v-row class="d-block d-sm-flex">
        <div style="height: 60vw;">
          <div style="position: absolute; left: 10vw; right: 10vw; height: 30vh; margin-top: -10vw" >
            <v-img src="/devices_mockup.svg" contain/>
          </div>
        </div>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">
            Apps for Browsers, iOS & Android that sync your bookmarks
          </h2>
          <p class="subtitle-1">
            Via a
            <v-tooltip bottom :max-width="250">
              <template #activator="{on, attrs}">
                <span v-on="on" v-bind="attrs"><a href="https://nextcloud.com">Nextcloud</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
              </template>
              <span>Nextcloud is an Open Source collaboration platform that you can self-host on your own server or rent as a Service in the cloud. It features a beautiful Bookmarks app that seemlessly integrates with floccus.</span>
            </v-tooltip>
              or <v-tooltip bottom :max-width="250">
            <template #activator="{on, attrs}">
              <span v-on="on" v-bind="attrs"><a href="https://en.wikipedia.org/wiki/WebDAV">WebDAV</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
            </template>
            <span>WebDAV is an open protocol that allows users to create, change and move documents on a server. Many cloud storage providers support using WebDAV to access files. You can also easily host your own WebDAV server.</span>
          </v-tooltip> server for easy self-hosting or simply via <v-tooltip bottom :max-width="250">
            <template #activator="{on, attrs}">
              <span v-on="on" v-bind="attrs"><a href="https://drive.google.com">Google Drive</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
            </template>
            <span>Almost everyone has a Google account, so using Google Drive to sync bookmarks is the simplest option. If you want to keep things private, floccus has you covered with end-to-end encryption.</span>
          </v-tooltip>. Floccus simply syncs and gets out of your way; no ads, no data collection, no nonsense.
          </p>
        </v-col>
        <v-col class="col-12 col-sm-6">
          <v-img src="floccus_schema.png" />
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6">
          <v-img src="undraw_devices.svg" />
        </v-col>
        <v-col class="col-12 col-sm-6 d-flex flex-column justify-center">
          <v-card style="min-height: 50%">
            <v-card-title>Floccus on Mastodon</v-card-title>
            <v-card-text v-for="(post,i) in posts.slice(0, 1)" v-html="post" :key="i" style="font-size: 1.2em !important" />
            <span v-if="posts.length === 0"><a href="https://fosstodon.org/@floccus">Loading posts</a></span>
            <v-card-text v-else><a href="https://fosstodon.org/@floccus">Follow @floccus on fosstodon.org</a></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">Support floccus</h2>
          <p class="subtitle-1">
            Floccus is made possible by volunteers, especially by its creator Marcel Klehr, spending their free time to make floccus better, bit by bit.
          </p>
          <p>
            <v-btn href="/donate">Give something back</v-btn>
          </p>
        </v-col>
        <v-col class="col-12 col-sm-6">
          <v-img src="undraw_love.svg" />
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
            Have a problem or a new idea?
            <v-btn href="https://github.com/floccusAddon/floccus/issues"
            >File an issue</v-btn
            >
          </h3>
          <h3 class="mt-2 d-flex justify-space-between flex-wrap">
            Want to write code for a new feature?
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
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      posts: [],
    }
  },
  head: {
    title: 'Private bookmarks syncing',
  },
  async created() {
    const res = await fetch('https://fosstodon.org/@floccus.rss')
    const text = await res.text()
    const domParser = new DOMParser()
    const doc = domParser.parseFromString(text, 'application/xml')
    this.posts = [...doc.querySelectorAll('rss channel item description')].map(node => node.textContent)
  }
}
</script>
