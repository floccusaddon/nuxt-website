<template>
  <div class="fl-page">
    <div class="donate-intro">
      <div class="donate-intro-text">
        <template v-if="fromSite">
          <h1 class="fl-page-title">Support floccus</h1>
          <p>
            Thanks for considering supporting <strong>floccus</strong>, the open
            source <strong>bookmark syncing</strong> tool!
          </p>
          <p>
            I am <strong>Marcel</strong>, the creator of floccus. I'm an
            employee at Nextcloud but I currently spend one day of my work week,
            every week, to improve floccus to create an open source bookmark
            syncing solution for everyone.
          </p>
          <p>
            This work on floccus is fuelled by a
            <strong>voluntary subscription model</strong>: Floccus is free for
            everyone, and roughly 2% of the people that use it decide to help
            support its development financially. If you find floccus useful and
            you can spare a few coins each month without hardship, a
            <strong>donation</strong> is very much appreciated.
          </p>
          <p>
            Not in a position to donate? No worries! Giving floccus
            <strong>a review</strong> or <strong>rating</strong> on the addon
            store of your choice helps a lot as well.
            <strong>Thank you!</strong> 💙
          </p>
        </template>
        <template v-else>
          <h1 class="fl-page-title">Hi there, sorry to bug you…</h1>
          <p>
            You are seeing this because you are using <strong>floccus</strong>,
            the open source <strong>bookmark syncing</strong> tool.
          </p>
          <p>
            I am <strong>Marcel</strong>, the creator of floccus. I'm an
            employee at Nextcloud but I currently spend one day of my work week,
            every week, to improve floccus to create an open source bookmark
            syncing solution for everyone.
          </p>
          <p>
            This work on floccus is fuelled by a
            <strong>voluntary subscription model</strong>. In recent years,
            roughly 2% of all the people that use floccus decided to help
            support this work financially. If you think what I do is
            worthwhile, and if you can spare a few coins each month without
            hardship, <strong>please donate</strong>.
          </p>
          <p>
            It would mean a lot to me! That's it.
            <strong>Thank you</strong> for your attention! 💙
          </p>
          <p>
            PS: Also, please consider giving floccus <strong>a review</strong>
            or <strong>rating</strong> on the addon store of your choice, it
            really helps as well. ✌️
          </p>
        </template>
      </div>
      <div class="donate-intro-art">
        <img src="/undraw_love.svg" alt="" width="560" height="420" />
      </div>
    </div>

    <section class="donate-section">
      <h2 class="fl-h2">Donate</h2>
      <p class="fl-lead">Make a one-time or recurring donation.</p>
      <div class="donate-grid">
        <template v-for="d in donations">
          <a
            v-if="d.href"
            :key="d.name"
            :href="d.href"
            target="_blank"
            rel="noopener"
            class="fl-card donate-opt"
          >
            <span class="donate-opt-icon">
              <BrandIcon v-if="d.brand" :name="d.brand" :size="26" />
              <v-icon v-else :color="d.color" size="26">{{ d.icon }}</v-icon>
            </span>
            <span class="donate-opt-name">{{ d.name }}</span>
            <v-icon small class="donate-opt-arrow">mdi-arrow-top-right</v-icon>
          </a>
          <button
            v-else
            :key="d.name"
            class="fl-card fl-card-hover donate-opt"
            @click="d.dialog === 'wero' ? (showWero = true) : (showSepa = true)"
          >
            <span class="donate-opt-icon">
              <v-icon :color="d.color" size="26">{{ d.icon }}</v-icon>
            </span>
            <span class="donate-opt-name">{{ d.name }}</span>
            <v-icon small class="donate-opt-arrow">mdi-chevron-right</v-icon>
          </button>
        </template>
      </div>
    </section>

    <section class="donate-section">
      <h2 class="fl-h2">Leave a review</h2>
      <p class="fl-lead">
        Reviews help other people discover floccus — it only takes a minute.
      </p>
      <div class="donate-grid">
        <a
          v-for="r in reviews"
          :key="r.name"
          :href="r.href"
          target="_blank"
          rel="noopener"
          class="fl-card donate-opt"
        >
          <span class="donate-opt-icon">
            <BrandIcon v-if="r.brand" :name="r.brand" :size="26" />
            <v-icon v-else :color="r.color" size="26">{{ r.icon }}</v-icon>
          </span>
          <span class="donate-opt-name">{{ r.name }}</span>
          <v-icon small class="donate-opt-arrow">mdi-arrow-top-right</v-icon>
        </a>
      </div>
    </section>

    <v-dialog v-model="showWero" width="500">
      <v-card>
        <v-card-title class="text-h5">Donate via Wero</v-card-title>
        <v-card-text>
          You can scan this QR code with your Wero app to donate.
        </v-card-text>
        <v-card-text>
          <v-img src="/wero-qr-code.svg" />
        </v-card-text>
        <v-card-text>
          Alternatively, search for <code>me@marcelklehr.de</code> in the Wero
          app to find my profile and donate this way.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showWero = false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showSepa" width="500">
      <v-card>
        <v-card-title class="text-h5">Donate via bank wire</v-card-title>
        <v-card-text>
          <code>Account holder: Marcel Klehr</code><br />
          <code>IBAN: DE98 1203 0000 1313 9691 96</code><br />
          <code>BIC: BYLADEM1001</code>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showSepa = false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DonatePage',
  data() {
    return {
      showWero: false,
      showSepa: false,
      // The floccus extension opens /donate/ without query params once every
      // half year. Links on this website add ?from=site, so we can show a
      // text that doesn't assume the visitor was sent here by the extension.
      // Evaluated on mount to avoid hydration mismatches on the static build.
      fromSite: false,
      donations: [
        { name: 'GitHub Sponsors', brand: 'github', href: 'https://github.com/sponsors/marcelklehr' },
        { name: 'Liberapay', brand: 'liberapay', href: 'https://liberapay.com/marcelklehr/donate' },
        { name: 'Open Collective', brand: 'opencollective', href: 'https://opencollective.com/floccus' },
        { name: 'PayPal', brand: 'paypal', href: 'https://www.paypal.com/donate/?hosted_button_id=R3SDCC7AFSYZU' },
        { name: 'Patreon', brand: 'patreon', href: 'https://www.patreon.com/marcelklehr' },
        { name: 'Ko-fi', brand: 'kofi', href: 'https://ko-fi.com/marcelklehr' },
        { name: 'Wero', icon: 'mdi-qrcode', color: 'primary', dialog: 'wero' },
        { name: 'Bank wire', icon: 'mdi-bank-outline', color: 'primary', dialog: 'sepa' },
      ],
      reviews: [
        { name: 'Firefox Add-ons', brand: 'firefox', href: 'https://addons.mozilla.org/de/firefox/addon/floccus/reviews/' },
        { name: 'Chrome Web Store', brand: 'chrome', href: 'https://chromewebstore.google.com/detail/floccus-bookmarks-sync/fnaicdffflnofjppbagibeoednhnbjhg' },
        { name: 'Edge Add-ons', icon: 'mdi-microsoft-edge', color: '#0C78D4', href: 'https://microsoftedge.microsoft.com/addons/detail/floccus-bookmarks-sync/gjkddcofhiifldbllobcamllmanombji' },
        { name: 'Google Play', brand: 'googleplay', href: 'https://play.google.com/store/apps/details?id=org.handmadeideas.floccus' },
        { name: 'Apple App Store', brand: 'appstore', href: 'https://apps.apple.com/us/app/floccus/id1626998357' },
        { name: 'AlternativeTo', brand: 'alternativeto', href: 'https://alternativeto.net/software/floccus/about/' },
      ],
    }
  },
  head: {
    title: 'Support floccus',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Floccus offers seamless cross-browser bookmarks syncing. Work on floccus is fuelled by a voluntary subscription model. If you think what I do is worthwhile, and if you can spare a few coins each month without hardship, please support my work.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Support Floccus - Floccus bookmarks sync',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Support Floccus - Floccus bookmarks sync',
      },
    ],
  },
  watch: {
    '$route.query.from'(from) {
      this.fromSite = from === 'site'
    },
  },
  mounted() {
    this.fromSite = this.$route.query.from === 'site'
  },
}
</script>

<style>
.donate-intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 56px;
  align-items: center;
}

.donate-intro-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-top: 14px;
  max-width: 600px;
}

.donate-intro-art img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 460px;
  margin: 0 auto;
}

@media (max-width: 860px) {
  .donate-intro {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .donate-intro-art {
    order: -1;
  }

  .donate-intro-art img {
    max-width: 260px;
  }
}

.donate-section {
  margin-top: 64px;
}

.donate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.donate-opt {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  font: inherit;
  text-align: left;
  cursor: pointer;
  width: 100%;
}

.donate-opt-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--fl-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.donate-opt-name {
  flex: 1;
  font-weight: 600;
  font-size: 1.02rem;
}

.donate-opt-arrow {
  opacity: 0.45;
}
</style>
