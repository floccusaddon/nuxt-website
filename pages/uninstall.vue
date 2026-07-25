<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <v-img src="/undraw_heartbroken.svg" max-width="400"/>
        <h1 class="headline text-h2">We're sad to see you&nbsp;go!</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'UninstallPage',
  head: {
    title: 'Goodbye',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find all the answers to your questions.' },
      { hid: 'og:title', property: 'og:title', content: 'Goodbye - Floccus bookmarks sync' },
      { hid: "twitter:title", name: "twitter:title", content: 'Goodbye - Floccus bookmarks sync' },
      { name: "robots", content: "noindex" },
    ],
  },
}
</script>
