<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Guides</h1>
        <div v-for="guide in guides" :key="guide.title" class="mt-5">
          <v-card class="mb-5 mr-5" rounded>
            <v-card-title
              style="cursor: pointer"
              @click="guide.show = !guide.show"
              >{{ guide.title }}
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>{{
                  guide.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-title>
            <v-expand-transition>
              <div v-show="guide.show">
                <v-divider></v-divider>
                <v-card-text v-html="guide.content" class="clearfix"/>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
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
import overview from '~/guides/overview.md'
import install from '~/guides/install-browser.md'
import installAndroid from '~/guides/install-android.md'
import syncNcBookmarks from '~/guides/sync-nextcloud-bookmarks.md'
import syncLinkwarden from '~/guides/sync-linkwarden.md'
import syncWebdav from '~/guides/sync-webdav.md'
import syncGDrive from '~/guides/sync-googledrive.md'
import syncGit from '~/guides/sync-git.md'
import strategies from '~/guides/strategies.md'
import tabs from '~/guides/tabs.md'

export default {
  name: 'GuidesPage',
  data() {
    return {
      guides: [
        {
          title: 'How does it all work?',
          content: overview,
          show: true,
        },
        {
          title: 'Install in your browser',
          content: install,
          show: false,
        },
        {
          title: 'Install on Android',
          content: installAndroid,
          show: false,
        },
        {
          title: 'Sync with Nextcloud Bookmarks',
          content: syncNcBookmarks,
          show: false,
        },
        {
          title: 'Sync with Linkwarden',
          content: syncLinkwarden,
          show: false,
        },
        {
          title: 'Sync via WebDAV',
          content: syncWebdav,
          show: false,
        },
        {
          title: 'Sync via Google Drive',
          content: syncGDrive,
          show: false,
        },
        {
          title: 'Sync via Git',
          content: syncGit,
          show: false,
        },
        {
          title: 'Choose a sync strategy',
          content: strategies,
          show: false,
        },
        {
          title: 'Sync tabs',
          content: tabs,
          show: false,
        },
      ],
    }
  },
  head: {
    title: 'Guides and How tos',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find guides and how-tos to get started with floccus.' },
      { hid: 'og:title', property: 'og:title', content: 'Guides and How tos - Floccus bookmarks sync' },
      { hid: "twitter:title", name: "twitter:title", content: 'Guides and How tos - Floccus bookmarks sync' },
    ],
  },
}
</script>
<style>
img {
  width: 100%;
  max-width: 700px;
  margin: 2em auto;
}

p {
  margin-top: 10px;
}

h1,
h2,
h3,
h4 {
  margin-top: 20px;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
