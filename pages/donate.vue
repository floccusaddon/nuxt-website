<template>
  <div>
    <v-row justify="center" align="center">
      <v-col class="col-8 col-md-4 flex-column d-flex justify-center">
        <h1 class="headline">Support the creation of floccus</h1>
        <p>&nbsp;</p>
        <p class="font-italic" style="font-size: 1.2em">
          Hi<br/>
          I'm Marcel Klehr, the creator of floccus. I'm an employee at Nextcloud GmbH but I spend my free time working to improve floccus to create an open source bookmark syncing solution for everyone.<br/>
          My work on floccus is fuelled by a voluntary subscription model. If you think what I do is worthwhile, and if you can spare a few coins each month without hardship, please support my work.
          Also, please consider giving floccus a review or rating on the addon store of your choice.<br/>
          Thank you! 💙
        </p>
      </v-col>
      <v-col class="col-8 col-md-4">
        <v-img src="undraw_love.svg" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-9">
      <v-col cols="10" md="8">
        <h3 class="headline">Sponsoring options</h3>
        <p>Support floccus by making a one-time or recurring donation</p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" md="8" class="d-flex flex-wrap">
        <div class="d-flex flex-wrap flex-column flex-lg-row">
          <v-btn href="https://github.com/sponsors/marcelklehr" class="mt-2 mr-2 col-lg-5"
          >GitHub Sponsors</v-btn
          >
          <v-btn href="https://liberapay.com/marcelklehr/donate" class="mt-2 mr-2  col-lg-5"
          >Liberapay</v-btn
          >
          <v-btn href="https://opencollective.com/floccus" class="mt-2 mr-2  col-lg-5"
          >OpenCollective</v-btn
          >
          <v-btn href="https://www.paypal.me/marcelklehr1" class="mt-2 mr-2  col-lg-5"
          >PayPal</v-btn
          >
          <v-btn href="https://www.patreon.com/marcelklehr" class="mt-2 mr-2  col-lg-5"
          >Patreon</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-9">
      <v-col cols="10" md="8">
        <h3 class="headline">Review options</h3>
        <p>Support floccus by giving a review on one of these sites</p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" md="8" class="d-flex flex-wrap">
        <div class="d-flex flex-wrap flex-column flex-lg-row">
          <v-btn href="https://play.google.com/store/apps/details?id=org.handmadeideas.floccus" class="mt-2 mr-2 col-lg-5">Google Play</v-btn>
          <v-btn href="https://apps.apple.com/us/app/floccus/id1626998357" class="mt-2 mr-2  col-lg-5">Apple App Store</v-btn>
          <v-btn href="https://alternativeto.net/software/floccus/about/" class="mt-2 mr-2  col-lg-5">AlternativeTo</v-btn>
          <v-btn href="https://addons.mozilla.org/de/firefox/addon/floccus/reviews/" class="mt-2 mr-2  col-lg-5">Firefox ADDONs</v-btn>
          <v-btn href="https://chromewebstore.google.com/detail/floccus-bookmarks-sync/fnaicdffflnofjppbagibeoednhnbjhg" class="mt-2 mr-2  col-lg-5">Chrome Webstore</v-btn>
          <v-btn href="https://www.producthunt.com/products/floccus" class="mt-2 mr-2  col-lg-5">Product Hunt</v-btn>
          <v-btn href="https://www.slant.co/topics/12038/viewpoints/9/~cross-platform-cross-browser-bookmark-sync-solutions~floccus" class="mt-2 mr-2  col-lg-5">Slant</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DonatePage',
  head: {
    title: 'Support floccus',
  },
}
</script>
