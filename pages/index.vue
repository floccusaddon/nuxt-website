<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8">
      <v-row class="d-block d-sm-flex">
        <v-col class="col-12 flex-column d-flex justify-center align-center mt-10" :style="{zIndex: 10000}">
            <h1 class="headline text-h2">Sync bookmarks & tabs <span class="blue--text">privately</span></h1>
            <p class="subtitle-1 text-h4">across browsers and devices</p>
            <p class="mt-3 d-xl-block d-sm-flex flex-column">
              <v-btn class="primary" :to="{ name: 'download' }">Download</v-btn>
              <v-btn class="ml-xl-2 mt-sm-2 mt-xl-0" :to="{ name: 'guides' }">Get started</v-btn>
            </p>
        </v-col>
      </v-row>
      <v-row>
        <v-alert type="info" class="col-12 mt-5 justify-center align-center" border="left" colored-border outlined>
          <strong>New in Version 5.6 ✨</strong> You can now sync with <a href="https://karakeep.app">KaraKeep</a> and <a href="https://linkwarden.app">Linkwarden</a>! And you can now sync tab groups!
        </v-alert>
      </v-row>
      <v-row class="d-block d-sm-flex">
        <div style="height: 60vw;">
          <div style="position: absolute; left: 10vw; right: 10vw; height: 30vh; margin-top: 2vw;">
            <v-img src="/devices_mockup.svg" contain/>
          </div>
        </div>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 flex-column d-flex justify-center">
          <h2 class="headline">
            Apps for Browsers, iOS & Android that sync your bookmarks and tabs
          </h2>
          <p class="subtitle-1">
            Via a
            <v-tooltip bottom :max-width="250">
              <template #activator="{on, attrs}">
                <span v-on="on" v-bind="attrs"><a href="https://nextcloud.com">Nextcloud</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
              </template>
              <span>Nextcloud is an Open Source collaboration platform that you can self-host on your own server or rent as a Service in the cloud. It features a beautiful Bookmarks app that seemlessly integrates with floccus.</span>
            </v-tooltip>,
            <v-tooltip bottom :max-width="250">
              <template #activator="{on, attrs}">
                <span v-on="on" v-bind="attrs"><a href="https://linkwarden.app">Linkwarden</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
              </template>
              <span>Linkwarden is a full-featured, Open Source bookmarks solution that you can self-host on your own server or rent as a Service in the cloud and access via your browser from anywhere.</span>
            </v-tooltip>,
            <v-tooltip bottom :max-width="250">
              <template #activator="{on, attrs}">
                <span v-on="on" v-bind="attrs"><a href="https://karakeep.app">KaraKeep</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
              </template>
              <span>KaraKeep is a full-featured, Open Source bookmarks solution that you can self-host on your own server and access via your browser from anywhere.</span>
            </v-tooltip>,
            <v-tooltip bottom :max-width="250">
              <template #activator="{on, attrs}">
                <span v-on="on" v-bind="attrs"><a href="https://en.wikipedia.org/wiki/Git">Git</a><v-icon dense>mdi-help-circle-outline</v-icon></span>
              </template>
              <span>Git is originally a source code versioning software that allows users to track the evolution of files in a folder and sync changes to a server. Popular Git hosting sites are GitHub, Gitlab. You can also easily host your own Git server using Gitea, for example.</span>
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
          </v-tooltip>. Floccus simply syncs and gets out of your way; no ads, no data collection, no nonsense; free and open source software.
          </p>
          <p class="subtitle-1">
            Looking for tab syncing? Floccus has got you covered: Check out the <a href="/guides">guides</a>.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12">
          <v-img src="floccus_schema_with_notes.png" />
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
        <v-col class="col-12 col-sm-6 d-flex justify-center">
          <v-img src="undraw_public_discussion.svg" :contain="true"/>
        </v-col>
        <v-col class="col-12 col-sm-6 d-flex flex-column justify-center">
          <h2 class="mb-10 headline">What users are saying</h2>
          <v-card v-for="(post,i) in feedback" :key="i" class="mb-6">
            <v-card-text  v-html="post" style="font-size: 1.15em !important; font-style: italic" />
          </v-card>
          <p>
            <v-btn class="primary" href="/donate">Write your review</v-btn>
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-12 d-block d-sm-flex">
        <v-col class="col-12 col-sm-6 flex-column d-flex justify-center">
          <h2 class="headline">Support floccus</h2>
          <p class="subtitle-1">
            Floccus is made possible by volunteers, especially by its creator Marcel Klehr, spending their free time to make floccus better, bit by bit.
          </p>
          <p>
            <v-btn class="primary" href="/donate">Give something back</v-btn>
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
            <v-btn href="https://explore.transifex.com/floccus/floccus/"
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
      feedback: [
        'The Floccus ecosystem, coupled with the Nextcloud Bookmarks App, has significantly improved my workflows for bookmark management across multiple computers.',
        'It didn\'t take much work to set up, and it was totally worth it!',
        'Fantastic free extension (and app available) that works like a charm! I Support this project. It\'s very underrated!',
        'Spiritual successor to Xmarks, although this is superior. End-to-end encryption!',
        'This extension is really amazing! Marcel, I want to write big thank you for what are you doing, keep going!',
        '"orks 100% of the time, super easy to configure. respects privacy: you decide where your data are stored. Good job. Thanks for the Dev.',
        'I\'ve been using it to sync between Firefox and Chrome since 2020, and while it had some problems syncing early on, it\'s been solid for so long I can\'t even remember the last time I encountered a sync error.',
        'Super tool, it does what it should!',
        'Brotha, how good is floccus??!',
        'It\'s actually amazing. I have it connected to google drive and it does what it says. It also has failsafes to make sure your bookmarks don\'t get nuked everywhere in case something goes wrong. Also works on mobile, for example, with kiwi. Also don\'t need to do any mental gymnastics to get it to work. The setup is really simple.',
        'I have my linkwarden instance set up with all my browsers with Floccus to sync my bookmarks no matter what device I\'m on. Super useful!',
        'Linkwarden in combination with Floccus has been an absolute dream. I just bookmark things through my browser like normal, and everything\'s synced through linkwarden. Same bookmarks on my work PC personal browser, on my home PC, anywhere.',
        'I use Floccus ,I have it configured and synchronized with NextCloud , easy access to my bookmarks at any time and from any device',
        'Floccus! It\'s highly reliable and I\'m actively using it to sync bookmarks between chrome and firefox',
        'linkwarden and floccus extension on browsers! absolute brilliant solution. works like a charm.',
        'Perfect. Syncs bookmarks across the board. Personally I use it on Chrome & Firefox on my Pixel as well as Chrome & Firefox on my Mac. Add/Edit/Delete a bookmark on any of those and it syncs perfectly across them all.',
        'I use Floccus on all devices, which has support and sync to nextcloud. i love that i also can keep synchonize my mobile devices with my desktop machines. Thanks for you great work. I really appreciate it.',
        'Essential for keeping your favorites organized and secure, and for synchronizing them across different browsers without having to do it manually each time.',
        'I have been using floccus for years to synchronize bookmarks across operating systems (Linux, Win11, Android) and browsers (Brave, Chromium, Chrome, Firefox, etc.). It works excellently and reliably. Highly recommended!'
      ].sort(() => Math.random() - 0.5).slice(0, 4),
    }
  },
  head: {
    title: 'Cross-browser bookmarks syncing',
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
