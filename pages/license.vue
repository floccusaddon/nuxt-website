<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">License</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" class="d-flex flex-wrap" v-html="license">

      </v-col>
    </v-row>
  </div>
</template>

<script>
import license from '~/license.md'

export default {
  name: 'LicensePage',
  data() {
    return {
      license
    }
  },
  head: {
    title: 'License',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find more details about its open source license.' },
      { hid: 'og:title', property: 'og:title', content: 'License - Floccus bookmarks sync' },
      { hid: "twitter:title", name: "twitter:title", content: 'License - Floccus bookmarks sync' },
    ],
  },
}
</script>
